import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

const CaseStudyCard = ({ caseStudy, index }: CaseStudyCardProps) => {
  return (
    <Link 
      to={`/case-study/${caseStudy.id}`}
      className="card-case-study group block"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={caseStudy.thumbnail}
          alt={caseStudy.title}
          className="card-image w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Category Badge */}
        <span className="inline-block text-xs font-medium text-primary uppercase tracking-wider mb-3">
          {caseStudy.category}
        </span>

        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {caseStudy.title}
        </h3>

        {/* Tagline */}
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
          {caseStudy.tagline}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          <span>Read Case Study</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
