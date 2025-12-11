import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";

const Header = () => {
  const location = useLocation();
  
  const navLinks = [
    { href: "/", label: "Work" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-portfolio">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-display font-semibold text-lg tracking-tight hover:text-primary transition-colors"
          >
            Mike Zúñiga
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors link-underline",
                      location.pathname === link.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <a
              href="mailto:hello@mikezuniga.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
            </a>
            {/* Botón de Español */}
            <Link 
              to="/es" 
              className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm font-medium transition-colors"
            >
              ES
            </Link>

            {/* Botón de Inglés */}
            <Link 
              to="/" 
              className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm font-medium transition-colors"
            >
              EN
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
