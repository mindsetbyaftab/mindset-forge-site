import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import BlogCard from "@/components/BlogCard";
import { supabase } from "@/integrations/supabase/client";
import { products } from "@/data/products";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-portrait.jpg";
import { ArrowRight, Mail } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";
import { getBlogImage } from "@/data/blogImages";

const Index = () => {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [popularPosts, setPopularPosts] = useState<BlogPost[]>([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const { data: latest } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("date", { ascending: false })
        .limit(3);

      const { data: popular } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .eq("popular", true)
        .order("date", { ascending: false })
        .limit(3);

      const mapPost = (p: any): BlogPost => ({
        slug: p.slug,
        title: p.title,
        date: p.date,
        category: p.category,
        image: getBlogImage(p.slug, p.image_url),
        description: p.description,
        popular: p.popular,
        content: p.content,
      });

      setLatestPosts((latest || []).map(mapPost));
      setPopularPosts((popular || []).map(mapPost));
    };
    fetchPosts();
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-tight">
            Welcome to <br /><span className="text-gold">Mindset By Aftab</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-6 text-background/70 text-lg md:text-xl font-body max-w-xl mx-auto">
            Helping you grow your mindset and build success
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <Link to="/blogs" className="mt-8 inline-flex items-center gap-2 bg-gold text-foreground font-body font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Read Latest Blogs <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-2xl">
            <img src={aboutImg} alt="About Mindset By Aftab" className="w-full h-[400px] object-cover" loading="lazy" />
          </div>
          <div>
            <span className="text-xs font-body font-semibold uppercase tracking-wider text-gold">Our Mission</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">About This Platform</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Mindset By Aftab is a platform dedicated to helping individuals unlock their full potential through personal growth, mindset development, and productivity strategies.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              We believe that success starts in the mind. Through carefully crafted articles, practical tips, and proven strategies, we aim to inspire and equip you with the tools you need to build the life you envision.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-gold font-body font-semibold hover:underline gold-underline">
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Latest Posts */}
      {latestPosts.length > 0 && (
        <SectionWrapper className="bg-surface-warm">
          <div className="text-center mb-12">
            <span className="text-xs font-body font-semibold uppercase tracking-wider text-gold">Fresh Content</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Latest Posts</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blogs" className="inline-flex items-center gap-2 border-2 border-gold text-gold font-body font-semibold px-8 py-3 rounded-lg hover:bg-gold hover:text-foreground transition-colors">
              View All Posts <ArrowRight size={18} />
            </Link>
          </div>
        </SectionWrapper>
      )}

      {/* Popular Posts */}
      {popularPosts.length > 0 && (
        <SectionWrapper>
          <div className="text-center mb-12">
            <span className="text-xs font-body font-semibold uppercase tracking-wider text-gold">Most Read</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Popular Posts</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {popularPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Products */}
      <SectionWrapper className="bg-surface-warm">
        <div className="text-center mb-12">
          <span className="text-xs font-body font-semibold uppercase tracking-wider text-gold">Grow Faster</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Recommended Products</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card rounded-xl overflow-hidden border border-border group">
              <div className="overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold mb-2">{product.title}</h3>
                <p className="text-muted-foreground text-sm font-body mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-gold text-lg">{product.price}</span>
                  <a href={product.link} className="inline-flex items-center gap-1 text-sm font-body font-semibold text-gold hover:underline">
                    View Product <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 border-2 border-gold text-gold font-body font-semibold px-8 py-3 rounded-lg hover:bg-gold hover:text-foreground transition-colors">
            View All Products <ArrowRight size={18} />
          </Link>
        </div>
      </SectionWrapper>

      {/* Newsletter */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="mx-auto mb-4 text-gold" size={40} />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Join Our Growth Community</h2>
          <p className="text-muted-foreground font-body mb-8">Get weekly insights on mindset, productivity, and personal growth delivered straight to your inbox.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
            <button type="submit" className="bg-gold text-foreground font-body font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Index;
