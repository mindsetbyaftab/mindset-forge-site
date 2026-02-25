import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "sonner";

const AdminEditor = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
    description: "",
    content: "",
    image_url: "",
    published: false,
    popular: false,
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) navigate("/admin/login");
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (id && user) {
      supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single()
        .then(({ data }) => {
          if (data) {
            setForm({
              title: data.title,
              slug: data.slug,
              category: data.category,
              date: data.date,
              description: data.description,
              content: data.content,
              image_url: data.image_url || "",
              published: data.published,
              popular: data.popular,
            });
          }
        });
    }
  }, [id, user]);

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleTitleChange = (title: string) => {
    setForm((f) => ({
      ...f,
      title,
      slug: isEditing ? f.slug : generateSlug(title),
    }));
  };

  const handleSave = async () => {
    if (!form.title || !form.content) {
      toast.error("Title and content are required");
      return;
    }
    setSaving(true);

    const payload = {
      title: form.title,
      slug: form.slug || generateSlug(form.title),
      category: form.category || "General",
      date: form.date,
      description: form.description,
      content: form.content,
      image_url: form.image_url || null,
      published: form.published,
      popular: form.popular,
    };

    let error;
    if (isEditing) {
      ({ error } = await supabase.from("blog_posts").update(payload).eq("id", id));
    } else {
      ({ error } = await supabase.from("blog_posts").insert(payload));
    }

    setSaving(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success(isEditing ? "Post updated!" : "Post created!");
      navigate("/admin");
    }
  };

  if (authLoading || !user) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate("/admin")}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm transition-colors"
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </button>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm font-body">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) => setForm({ ...form, published: e.target.checked })}
              className="accent-gold"
            />
            Published
          </label>
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 bg-gold text-foreground font-body font-semibold px-5 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <Save size={16} /> {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </header>

      {/* Editor */}
      <div className="max-w-3xl mx-auto px-6 py-8 space-y-5">
        <div>
          <input
            type="text"
            value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Post title..."
            className="w-full font-display text-3xl font-bold bg-transparent border-none outline-none placeholder:text-muted-foreground/40"
          />
          <p className="text-xs text-muted-foreground font-body mt-1">
            Slug: {form.slug || "auto-generated"}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-body font-medium mb-1 block">Category</label>
            <input
              type="text"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              placeholder="e.g. Mindset, Productivity"
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <label className="text-sm font-body font-medium mb-1 block">Date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-body font-medium mb-1 block">Image URL (optional)</label>
          <input
            type="text"
            value={form.image_url}
            onChange={(e) => setForm({ ...form, image_url: e.target.value })}
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>

        <div>
          <label className="text-sm font-body font-medium mb-1 block">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="A short description for the blog card..."
            rows={2}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
          />
        </div>

        <div>
          <label className="text-sm font-body font-medium mb-1 block">
            Content <span className="text-muted-foreground">(supports ## headings, ### subheadings, - lists)</span>
          </label>
          <textarea
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            placeholder="Write your blog post content here...

Use ## for headings
Use ### for subheadings  
Use - for bullet points"
            rows={20}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-y font-mono leading-relaxed"
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm font-body">
            <input
              type="checkbox"
              checked={form.popular}
              onChange={(e) => setForm({ ...form, popular: e.target.checked })}
              className="accent-gold"
            />
            Mark as Popular
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdminEditor;
