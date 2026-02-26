import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import Layout from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { getBlogImage } from "@/data/blogImages";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  image_url: string | null;
  content: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("slug, title, date, category, image_url, content")
        .eq("slug", slug)
        .eq("published", true)
        .single();
      setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, [slug]);

  const toc = useMemo(() => {
    if (!post) return [];
    const headingRegex = /^##\s+(.+)$/gm;
    const matches: string[] = [];
    let match;
    while ((match = headingRegex.exec(post.content)) !== null) {
      matches.push(match[1]);
    }
    return matches;
  }, [post]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center">
          <p className="text-muted-foreground font-body">Loading...</p>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blogs" className="text-gold font-body hover:underline">
            ← Back to Blogs
          </Link>
        </div>
      </Layout>
    );
  }

  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="font-display text-xl font-bold mt-8 mb-3">
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("## ")) {
        const text = line.replace("## ", "");
        const id = text.toLowerCase().replace(/\s+/g, "-");
        elements.push(
          <h2 key={i} id={id} className="font-display text-2xl font-bold mt-10 mb-4 text-gold">
            {text}
          </h2>
        );
      } else if (line.startsWith("- ")) {
        const listItems: string[] = [];
        while (i < lines.length && lines[i].startsWith("- ")) {
          listItems.push(lines[i].replace("- ", ""));
          i++;
        }
        elements.push(
          <ul key={`list-${i}`} className="list-disc pl-6 space-y-2 my-4 font-body text-muted-foreground">
            {listItems.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        );
        continue;
      } else if (line.trim() === "") {
        // skip
      } else {
        elements.push(
          <p key={i} className="font-body text-muted-foreground leading-relaxed mb-4">
            {line}
          </p>
        );
      }
      i++;
    }
    return elements;
  };

  const imageUrl = getBlogImage(post.slug, post.image_url);

  return (
    <Layout>
      <div className="relative h-[50vh] overflow-hidden">
        <img src={imageUrl} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-body font-semibold uppercase tracking-wider text-gold">
                {post.category}
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-background mt-2 max-w-3xl">
                {post.title}
              </h1>
              <p className="text-background/70 font-body mt-3">
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-gold transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Blogs
        </Link>

        <div className="grid lg:grid-cols-[1fr_280px] gap-12 max-w-5xl">
          <article className="max-w-none">{renderContent(post.content)}</article>
          {toc.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-24 p-6 bg-surface-warm rounded-xl">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold mb-4">
                  Table of Contents
                </h4>
                <ul className="space-y-2">
                  {toc.map((heading) => (
                    <li key={heading}>
                      <a href={`#${heading.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm font-body text-muted-foreground hover:text-gold transition-colors">
                        {heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
