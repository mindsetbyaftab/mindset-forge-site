import { useState } from "react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import BlogCard from "@/components/BlogCard";
import { blogPosts, categories } from "@/data/blogPosts";

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

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

        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground font-body mt-8">
            No posts found in this category.
          </p>
        )}
      </SectionWrapper>
    </Layout>
  );
};

export default Blogs;
