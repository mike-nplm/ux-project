import Layout from "@/components/layout/Layout";
import HeroEs from "@/components/home/HeroEs";
import CaseStudiesGrid from "@/components/home/CaseStudiesGrid";
import AboutPreview from "@/components/home/AboutPreview";

const Es = () => {
  return (
    <Layout>
      <HeroEs />
      <CaseStudiesGrid />
      <AboutPreview />
    </Layout>
  );
};

export default Es;
