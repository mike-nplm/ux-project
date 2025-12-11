import { Button } from "@/components/ui/button";
import { ArrowDown, FileText } from "lucide-react";

const HeroEs = () => {
  const scrollToCases = () => {
    document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[85vh] flex items-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[var(--hero-gradient)] -z-10" />
      
      <div className="container-portfolio">
        <div className="max-w-full">
          {/* Intro Label */}
          <div className="section-fade-in stagger-1">
            <span className="inline-block text-sm font-medium text-muted-foreground tracking-wide uppercase mb-6">
              UX / Product Designer
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="section-fade-in stagger-2 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground mb-6">
            Diseñando productos digitales{" "}
            <span className="text-primary">que resuelven problemas reales</span>
          </h1>

          {/* Tagline */}
          <p className="section-fade-in stagger-3 text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Senior UX Designer con más de 5 años creando experiencias centradas en las personas para productos 
            fintech, de salud y soluciones empresariales — respaldado por una sólida trayectoria en diseño.
          </p>

          {/* CTAs */}
          <div className="section-fade-in stagger-4 flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="xl"
              className="group"
              onClick={scrollToCases}
            >
              <FileText className="w-5 h-5" />
              Ver mi Case Study Book
              <ArrowDown className="w-4 h-4 ml-1 group-hover:translate-y-0.5 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              asChild
            >
              <a href="mailto:hello@mikezuniga.com">
                Ponte en contacto
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 section-fade-in stagger-5">
        <button 
          onClick={scrollToCases}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to case studies"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroEs;
