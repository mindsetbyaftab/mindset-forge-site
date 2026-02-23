import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">
              Mindset <span className="text-gold">By Aftab</span>
            </h3>
            <p className="text-background/60 font-body text-sm leading-relaxed">
              Helping you grow your mindset and build success through self-improvement, productivity, and positive thinking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Blogs", to: "/blogs" },
                { label: "About Us", to: "/about" },
                { label: "Products", to: "/products" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-background/60 hover:text-gold transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4 text-gold">Connect</h4>
            <div className="flex gap-4">
              {["Twitter", "Instagram", "LinkedIn", "YouTube"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-background/60 hover:text-gold transition-colors text-sm font-body"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/40 text-sm font-body">
            © {new Date().getFullYear()} Mindset By Aftab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
