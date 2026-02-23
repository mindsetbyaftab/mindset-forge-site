import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  link: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Mindset Mastery Course",
    description: "A comprehensive digital course to transform your thinking patterns and unlock your full potential.",
    image: product1,
    price: "$49.99",
    link: "#",
  },
  {
    id: "2",
    title: "Growth Journal",
    description: "Premium guided journal designed to help you set goals, track habits, and reflect on your progress daily.",
    image: product2,
    price: "$24.99",
    link: "#",
  },
  {
    id: "3",
    title: "Focus & Flow Audiobook",
    description: "Learn the science of deep focus and achieving flow states for peak performance in work and life.",
    image: product3,
    price: "$19.99",
    link: "#",
  },
];
