import { Link } from "react-router-dom";
import { HardHat, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  "For Clients": [
    { label: "Find Professionals", href: "/explore" },
    { label: "Post a Project", href: "/dashboard/post-project" },
    { label: "Cost Calculator", href: "/calculator" },
    { label: "Material Prices", href: "/materials" },
  ],
  "For Professionals": [
    { label: "Join as Professional", href: "/register" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Success Stories", href: "/blog" },
  ],
  Resources: [
    { label: "Knowledge Hub", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Cities: [
    { label: "Dar es Salaam", href: "/explore?city=dar" },
    { label: "Dodoma", href: "/explore?city=dodoma" },
    { label: "Arusha", href: "/explore?city=arusha" },
    { label: "Mwanza", href: "/explore?city=mwanza" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <HardHat className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">
                Jengo<span className="text-primary">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-secondary-foreground/70 mb-6 leading-relaxed">
              Connecting you with trusted construction professionals across Tanzania.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-foreground/10 text-secondary-foreground/60 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-display text-sm font-semibold">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-secondary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-secondary-foreground/50">
            © 2026 JengoHub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-secondary-foreground/50 hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-secondary-foreground/50 hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
