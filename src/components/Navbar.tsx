import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";

const navLinks = [
{ label: "Home", to: "/" },
{ label: "Blogs", to: "/blogs" },
{ label: "About Us", to: "/about" },
{ label: "Products", to: "/products" },
{ label: "Contact", to: "/contact" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Mindset By Aftab" className="h-10 w-auto object-fill border-0 rounded shadow-sm" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <Link
            key={link.to}
            to={link.to}
            className={`text-sm font-medium font-body transition-colors hover:text-gold ${
            location.pathname === link.to ? "text-gold gold-underline underline" : "text-foreground/70"}`
            }>

              {link.label}
            </Link>
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu">

          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open &&
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-background border-b border-border">

            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) =>
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`text-base font-medium font-body transition-colors hover:text-gold ${
              location.pathname === link.to ? "text-gold" : "text-foreground/70"}`
              }>

                  {link.label}
                </Link>
            )}
            </div>
          </motion.nav>
        }
      </AnimatePresence>
    </header>);

};

export default Navbar;