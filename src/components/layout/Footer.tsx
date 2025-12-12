import { Linkedin, Mail, FileText } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/dg-miguel-zuniga", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:mikexk8@gmail.com", icon: Mail, label: "Email" },
    { href: "/case-study-book.pdf", icon: FileText, label: "Download Resume" },
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-portfolio py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side */}
          <div className="text-center md:text-left">
            <p className="font-display font-medium text-foreground">
              Mike Zúñiga
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Senior UX Designer · Mexico City
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
