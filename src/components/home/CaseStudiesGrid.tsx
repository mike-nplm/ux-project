import { caseStudies } from "@/data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

const CaseStudiesGrid = () => {
  return (
    <section id="case-studies" className="py-20 md:py-32">
      <div className="container-portfolio">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of case studies showcasing my approach to solving complex 
            design challenges through research, strategy, and iteration.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard 
              key={caseStudy.id} 
              caseStudy={caseStudy} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
