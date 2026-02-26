import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

export const blogImageMap: Record<string, string> = {
  "power-of-positive-thinking": blog1,
  "morning-routine-for-success": blog2,
  "overcoming-fear-of-failure": blog3,
  "building-daily-habits": blog4,
  "power-of-reading": blog5,
  "mindfulness-for-beginners": blog6,
};

export const getBlogImage = (slug: string, imageUrl?: string | null): string => {
  if (imageUrl) return imageUrl;
  return blogImageMap[slug] || "/placeholder.svg";
};
