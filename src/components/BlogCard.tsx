import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="overflow-hidden rounded-lg mb-4">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-body font-semibold uppercase tracking-wider text-gold">
            {post.category}
          </span>
          <h3 className="font-display text-xl font-bold leading-tight group-hover:text-gold transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm font-body line-clamp-2">
            {post.description}
          </p>
          <p className="text-xs text-muted-foreground font-body">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
