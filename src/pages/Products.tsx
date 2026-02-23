import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Products = () => {
  return (
    <Layout>
      <SectionWrapper>
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Recommended <span className="text-gold">Products</span>
          </h1>
          <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto">
            Hand-picked resources to accelerate your personal growth journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl overflow-hidden border border-border group"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-muted-foreground text-sm font-body mb-6">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-gold text-xl">
                    {product.price}
                  </span>
                  <a
                    href={product.link}
                    className="inline-flex items-center gap-1 bg-gold text-foreground font-body font-semibold text-sm px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    View Product <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Products;
