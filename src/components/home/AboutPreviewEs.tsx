import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mikePortrait from "@/assets/mike-portrait2.png";

const AboutPreviewEs = () => {
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
              Hola, soy Mike
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Soy un Senior UX Designer con sede en Ciudad de México, con amplia experiencia diseñando 
                experiencias de producto end-to-end para fintech, operaciones y sistemas empresariales. 
                Con más de 5 años en UX y una sólida base en diseño visual, ayudo a los equipos a convertir 
                flujos complejos y procesos basados en datos en productos intuitivos y escalables.
              </p>
              <p>
                Me apasiona transformar la complejidad en claridad. Ya sea definiendo la estrategia de producto, 
                realizando investigación o prototipando nuevas experiencias, me enfoco en construir soluciones 
                reflexivas, usables y alineadas tanto a las necesidades del negocio como de las personas.
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

export default AboutPreviewEs;
