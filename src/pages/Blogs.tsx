import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import BlogCard from "@/components/BlogCard";
import { supabase } from "@/integrations/supabase/client";
import type { BlogPost } from "@/data/blogPosts";

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("date", { ascending: false });

      if (data) {
        const mapped: BlogPost[] = data.map((p: any) => ({
          slug: p.slug,
          title: p.title,
          date: p.date,
          category: p.category,
          image: p.image_url || "/placeholder.svg",
          description: p.description,
          popular: p.popular,
          content: p.content,
        }));
        setPosts(mapped);
        setCategories([...new Set(mapped.map((p) => p.category))]);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <SectionWrapper>
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            All <span className="text-gold">Blog Posts</span>
          </h1>
          <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto">
            Explore articles on mindset, productivity, habits, and personal growth.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-gold text-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-gold/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center text-muted-foreground font-body">Loading posts...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <p className="text-center text-muted-foreground font-body mt-8">
            No posts found in this category.
          </p>
        )}
      </SectionWrapper>
    </Layout>
  );
};

export default Blogs;
