import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <Layout>
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              Get In <span className="text-gold">Touch</span>
            </h1>
            <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto">
              Have a question or want to collaborate? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_300px] gap-12">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6"
            >
              <div>
                <label className="text-sm font-body font-medium mb-2 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label className="text-sm font-body font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label className="text-sm font-body font-medium mb-2 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-gold text-foreground font-body font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-3">
                <Mail className="text-gold mt-1" size={20} />
                <div>
                  <h4 className="font-body font-semibold text-sm">Email</h4>
                  <p className="text-muted-foreground text-sm font-body">hello@mindsetbyaftab.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-gold mt-1" size={20} />
                <div>
                  <h4 className="font-body font-semibold text-sm">Location</h4>
                  <p className="text-muted-foreground text-sm font-body">Available Worldwide</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-gold mt-1" size={20} />
                <div>
                  <h4 className="font-body font-semibold text-sm">Social</h4>
                  <p className="text-muted-foreground text-sm font-body">@mindsetbyaftab</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Contact;
