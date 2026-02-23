import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import aboutImg from "@/assets/about-portrait.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={aboutImg}
              alt="Aftab - Founder of Mindset By Aftab"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs font-body font-semibold uppercase tracking-wider text-gold">
              Our Story
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-6">
              About <span className="text-gold">Mindset By Aftab</span>
            </h1>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Mindset By Aftab was born from a simple belief: that the right mindset can
                transform anyone's life. What started as a personal journey of self-discovery
                has grown into a platform dedicated to inspiring and empowering others.
              </p>
              <p>
                Through years of studying psychology, productivity systems, and personal
                development, I've distilled the most powerful insights into actionable
                content that anyone can apply.
              </p>
              <p>
                My mission is to help you break through limiting beliefs, develop empowering
                habits, and build the life you truly desire. Every article, every resource,
                and every product on this platform is designed with one goal in mind — your growth.
              </p>
              <p>
                Whether you're just starting your personal development journey or you're
                looking to level up, you'll find valuable content here to support your path
                to success.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-surface-warm">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            What We <span className="text-gold">Believe</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Growth Mindset",
              desc: "We believe that abilities and intelligence can be developed through dedication, hard work, and the right strategies.",
            },
            {
              title: "Consistency Over Intensity",
              desc: "Small, consistent actions compound over time to create extraordinary results. It's not about big leaps — it's about daily progress.",
            },
            {
              title: "Community & Support",
              desc: "Growth is easier when you're not alone. We're building a community of like-minded individuals committed to becoming their best selves.",
            },
          ].map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6"
            >
              <h3 className="font-display text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default About;
