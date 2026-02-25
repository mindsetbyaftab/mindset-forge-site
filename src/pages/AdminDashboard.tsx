import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Eye, EyeOff, LogOut, Home } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  published: boolean;
  popular: boolean;
  created_at: string;
}

const AdminDashboard = () => {
  const { user, signOut, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/admin/login");
    }
  }, [user, authLoading, navigate]);

  const fetchPosts = async () => {
    const { data } = await supabase
      .from("blog_posts")
      .select("id, slug, title, date, category, description, published, popular, created_at")
      .order("created_at", { ascending: false });
    setPosts(data || []);
    setLoading(false);
  };

  useEffect(() => {
    if (user) fetchPosts();
  }, [user]);

  const togglePublish = async (id: string, published: boolean) => {
    await supabase.from("blog_posts").update({ published: !published }).eq("id", id);
    fetchPosts();
  };

  const togglePopular = async (id: string, popular: boolean) => {
    await supabase.from("blog_posts").update({ popular: !popular }).eq("id", id);
    fetchPosts();
  };

  const deletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    await supabase.from("blog_posts").delete().eq("id", id);
    fetchPosts();
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  if (authLoading || !user) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="font-display text-xl font-bold">
            Admin <span className="text-gold">Panel</span>
          </h1>
          <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">
            <Home size={18} />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/admin/editor"
            className="inline-flex items-center gap-2 bg-gold text-foreground font-body font-semibold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            <Plus size={16} /> New Post
          </Link>
          <button
            onClick={handleSignOut}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm transition-colors"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="font-display text-2xl font-bold mb-6">
          Your Blog Posts ({posts.length})
        </h2>

        {loading ? (
          <p className="text-muted-foreground font-body">Loading...</p>
        ) : posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground font-body mb-4">No blog posts yet.</p>
            <Link
              to="/admin/editor"
              className="inline-flex items-center gap-2 bg-gold text-foreground font-body font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Plus size={18} /> Write Your First Post
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl border border-border bg-card"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-semibold truncate">{post.title}</h3>
                    {!post.published && (
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded font-body">
                        Draft
                      </span>
                    )}
                    {post.popular && (
                      <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded font-body">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground font-body">
                    {post.category} · {new Date(post.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={() => togglePublish(post.id, post.published)}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    title={post.published ? "Unpublish" : "Publish"}
                  >
                    {post.published ? <Eye size={16} className="text-green-500" /> : <EyeOff size={16} className="text-muted-foreground" />}
                  </button>
                  <button
                    onClick={() => togglePopular(post.id, post.popular)}
                    className={`p-2 rounded-lg hover:bg-muted transition-colors text-xs font-body font-medium ${post.popular ? "text-gold" : "text-muted-foreground"}`}
                    title="Toggle popular"
                  >
                    ★
                  </button>
                  <Link
                    to={`/admin/editor/${post.id}`}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Edit size={16} className="text-muted-foreground" />
                  </Link>
                  <button
                    onClick={() => deletePost(post.id)}
                    className="p-2 rounded-lg hover:bg-destructive/10 transition-colors"
                  >
                    <Trash2 size={16} className="text-destructive" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
