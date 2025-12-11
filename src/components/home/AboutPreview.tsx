import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mikePortrait from "@/assets/mike-portrait.jpg";

const AboutPreview = () => {
  const skills = [
    "UX Strategy",
    "User Research", 
    "Interaction Design",
    "Product Thinking",
    "Prototyping",
    "Usability Testing",
    "Dashboard & Data Visualization",
  ];

  return (
    <section className="py-20 md:py-32 bg-card/50">
      <div className="container-portfolio">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src={mikePortrait}
                alt="Miguel Zúñiga"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              About Me
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Hola, I'm Mike
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I'm a Senior UX Designer based in Mexico City with deep experience 
                shaping end-to-end product experiences for fintech, operations, 
                and enterprise systems. With 5+ years in UX and a strong visual 
                design foundation, I help teams turn complex workflows and data-heavy 
                processes into intuitive, scalable products.
              </p>
              <p>
                I’m passionate about transforming complexity into clarity. Whether 
                defining product strategy, running research, or prototyping new 
                experiences, I focus on building thoughtful, usable solutions 
                that support both business and user goals.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-foreground mb-3">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-accent text-accent-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <Button asChild variant="subtle" size="lg" className="group">
              <Link to="/about">
                Learn More About Me
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
