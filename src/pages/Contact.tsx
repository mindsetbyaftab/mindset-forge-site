import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              Get In <span className="text-gold">Touch</span>
            </h1>
            <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto leading-relaxed">
              We'd love to hear from you! Whether you have questions about our content, want to share feedback, or are interested in collaborating — don't hesitate to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border bg-card p-8 space-y-3"
            >
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="text-gold" size={22} />
                <h3 className="font-display text-lg font-semibold">Queries & Feedback</h3>
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Have a question about mindset, productivity, or self-improvement? Want to suggest a topic or share how our content has helped you? We welcome all queries and feedback — your voice helps us grow and serve you better.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 space-y-3"
            >
              <div className="flex items-center gap-3 mb-2">
                <Mail className="text-gold" size={22} />
                <h3 className="font-display text-lg font-semibold">Email Us</h3>
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-2">
                For business inquiries, collaborations, or any other questions, drop us an email and we'll get back to you as soon as possible.
              </p>
              <a
                href="mailto:mindsetbyaftab@gmail.com"
                className="text-gold font-body font-medium text-sm hover:underline inline-block"
              >
                mindsetbyaftab@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-border bg-card p-8 space-y-3"
            >
              <div className="flex items-center gap-3 mb-2">
                <Instagram className="text-gold" size={22} />
                <h3 className="font-display text-lg font-semibold">Social Media</h3>
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-2">
                Follow us for daily mindset tips, motivational content, and behind-the-scenes updates.
              </p>
              <a
                href="https://instagram.com/mindsetbyaftab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-body font-medium text-sm hover:underline inline-block"
              >
                @mindsetbyaftab
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-border bg-card p-8 space-y-3"
            >
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-gold" size={22} />
                <h3 className="font-display text-lg font-semibold">Location</h3>
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                We operate digitally and are available worldwide. No matter where you are, we're just a message away.
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Contact;
