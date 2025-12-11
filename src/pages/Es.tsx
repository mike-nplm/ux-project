import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import CaseStudiesGrid from "@/components/home/CaseStudiesGrid";
import AboutPreview from "@/components/home/AboutPreview";

const Es = () => {
  return (
    <Layout>
      <Hero />
      <CaseStudiesGrid />
      <AboutPreview />
    </Layout>
  );
};

export default Es;
