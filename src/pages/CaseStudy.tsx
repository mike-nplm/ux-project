import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Clock, Users, Briefcase } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getCaseStudy, getAdjacentCaseStudies, CaseStudySection } from "@/data/caseStudies";

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const caseStudy = getCaseStudy(id || "");
  const { prev, next } = getAdjacentCaseStudies(id || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!caseStudy) {
    return (
      <Layout>
        <div className="container-portfolio py-32 text-center">
          <h1 className="font-display text-4xl font-semibold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
          <Button asChild variant="hero">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const renderSection = (section: CaseStudySection, index: number) => {
    const isReversed = section.type === 'image-text';
    
    switch (section.type) {
      case 'text-image':
      case 'image-text':
        return (
          <div 
            key={index}
            className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={isReversed ? 'md:order-2' : ''}>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                {section.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </div>
            <div className={isReversed ? 'md:order-1' : ''}>
              <div className="rounded-xl overflow-hidden bg-muted">
                <img
                  src={section.image}
                  alt={section.caption || section.title}
                  className="w-full h-auto"
                />
              </div>
              {section.caption && (
                <p className="text-sm text-muted-foreground mt-3 text-center">
                  {section.caption}
                </p>
              )}
            </div>
          </div>
        );

      case 'full-image':
        return (
          <div key={index}>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              {section.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              {section.content}
            </p>
            <div className="rounded-xl overflow-hidden bg-muted">
              <img
                src={section.image}
                alt={section.caption || section.title}
                className="w-full h-auto"
              />
            </div>
            {section.caption && (
              <p className="text-sm text-muted-foreground mt-3 text-center">
                {section.caption}
              </p>
            )}
          </div>
        );

      case 'gallery':
        return (
          <div key={index}>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              {section.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              {section.content}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {section.images?.map((img, imgIndex) => (
                <div key={imgIndex} className="rounded-xl overflow-hidden bg-muted">
                  <img
                    src={img}
                    alt={`${section.title} ${imgIndex + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
            {section.caption && (
              <p className="text-sm text-muted-foreground mt-3 text-center">
                {section.caption}
              </p>
            )}
          </div>
          );

          case 'video':
      return (
        <div key={index} className="w-full max-w-4xl mx-auto my-12 px-4">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            {section.title}
          </h3>
          {/* Usamos esto para permitir negritas y listas en el texto */}
          <div 
            className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: section.content }} 
          />
          
          <div className="relative pt-[56.25%] bg-black rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <iframe 
              src={section.videoUrl} 
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          {section.caption && (
            <p className="text-center text-sm text-muted-foreground mt-3 italic">
              {section.caption}
            </p>
          )}
        </div>
      );

      default:
        return (
          <div key={index}>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              {section.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {section.content}
            </p>
          </div>
        );
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="container-portfolio">
          {/* Back Link */}
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Work</span>
          </Link>

          {/* Category */}
          <div>
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              {caseStudy.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 max-w-4xl">
            {caseStudy.title}
          </h1>

          {/* Tagline */}
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">
            {caseStudy.tagline}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">{caseStudy.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Role:</span>
              <span className="font-medium">{caseStudy.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Team:</span>
              <span className="font-medium">{caseStudy.team}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16 md:pb-24">
        <div className="container-portfolio">
          <div className="rounded-2xl overflow-hidden bg-muted aspect-video">
            <img
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview & Challenge */}
      <section className="pb-16 md:pb-24">
        <div className="container-portfolio">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.overview}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Sections */}
      <section className="pb-16 md:pb-24">
        <div className="container-portfolio">
          <div className="space-y-20 md:space-y-32">
            {caseStudy.sections.map((section, index) => renderSection(section, index))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container-portfolio">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12 text-center">
            Results & Impact
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {caseStudy.results.map((result, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-background rounded-2xl shadow-sm"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {result.value}
                </div>
                <div className="font-medium text-foreground mb-1">{result.metric}</div>
                <div className="text-sm text-muted-foreground">{result.description}</div>
              </div>
            ))}
          </div>

          {/* Learnings */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-semibold mb-6 text-center">Key Learnings</h3>
            <ul className="space-y-4">
              {caseStudy.learnings.map((learning, index) => (
                <li 
                  key={index}
                  className="flex gap-4 text-muted-foreground"
                >
                  <span className="text-primary font-medium">{String(index + 1).padStart(2, '0')}</span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container-portfolio">
          <div className="flex justify-between items-center">
            {prev ? (
              <Button
                variant="ghost"
                size="lg"
                onClick={() => navigate(`/case-study/${prev.id}`)}
                className="group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground mb-1">Previous</div>
                  <div className="font-medium">{prev.title}</div>
                </div>
              </Button>
            ) : <div />}
            
            {next ? (
              <Button
                variant="ghost"
                size="lg"
                onClick={() => navigate(`/case-study/${next.id}`)}
                className="group"
              >
                <div className="text-right">
                  <div className="text-xs text-muted-foreground mb-1">Next</div>
                  <div className="font-medium">{next.title}</div>
                </div>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            ) : <div />}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudy;
