import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download } from "lucide-react";
import mikePortrait from "@/assets/mike-portrait.jpg";

const About = () => {
  const experience = [
    {
      role: "Senior UX Designer",
      company: "Tech Company",
      period: "2021 - Present",
      description: "Leading design for enterprise products serving 1M+ users. Established design system and research practices."
    },
    {
      role: "UX Designer",
      company: "Fintech Startup",
      period: "2018 - 2021",
      description: "Designed mobile banking experiences. Led user research initiatives and improved conversion by 40%."
    },
    {
      role: "Product Designer",
      company: "Design Agency",
      period: "2016 - 2018",
      description: "Worked with diverse clients across healthcare, e-commerce, and SaaS. Shipped 20+ products."
    }
  ];

  const skills = {
    "Research & Strategy": ["User Interviews", "Usability Testing", "Journey Mapping", "Competitive Analysis", "A/B Testing"],
    "Design & Prototyping": ["Figma", "Framer", "Principle", "Design Systems", "Responsive Design"],
    "Collaboration": ["Agile/Scrum", "Design Thinking Workshops", "Stakeholder Management", "Developer Handoff"]
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-portfolio">
          <div className="grid md:grid-cols-5 gap-12 md:gap-20">
            {/* Image */}
            <div className="md:col-span-2">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted sticky top-24">
                <img
                  src={mikePortrait}
                  alt="Miguel Zúñiga"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                About Me
              </span>
              
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-8">
                Hola, I'm Miguel Zúñiga—but everyone calls me Mike.
              </h1>
              
              <div className="prose prose-lg text-muted-foreground space-y-6 mb-10">
                <p>
                  I'm a Senior UX Designer based in Mexico City with a passion for creating 
                  digital products that genuinely improve people's lives. Over the past 8+ years, 
                  I've had the privilege of working with startups and enterprises across fintech, 
                  healthcare, and enterprise software.
                </p>
                <p>
                  My approach is rooted in deep user understanding. I believe the best designs 
                  emerge from genuine curiosity about user problems, not assumptions. Whether 
                  I'm leading research, facilitating workshops, or pushing pixels, my goal is 
                  always to bridge the gap between user needs and business objectives.
                </p>
                <p>
                  When I'm not designing, you'll find me exploring the vibrant streets of CDMX, 
                  experimenting with coffee brewing methods, or mentoring aspiring designers. 
                  I'm a firm believer in giving back to the design community that has given me so much.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-16">
                <Button asChild size="lg" variant="hero">
                  <a href="mailto:hello@mikezuniga.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Get in Touch
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://linkedin.com/in/mikezuniga" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/resume.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>

              {/* Experience */}
              <div className="mb-16">
                <h2 className="font-display text-2xl font-semibold mb-8">Experience</h2>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-border pl-6 hover:border-primary transition-colors">
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                        <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
                        <span className="text-primary">@ {exp.company}</span>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="font-display text-2xl font-semibold mb-8">Skills & Tools</h2>
                <div className="space-y-8">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <span 
                            key={skill}
                            className="px-4 py-2 text-sm bg-accent text-accent-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
