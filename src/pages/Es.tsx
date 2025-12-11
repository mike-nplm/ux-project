import Layout from "@/components/layout/Layout";
import HeroEs from "@/components/home/HeroEs";
import CaseStudiesGrid from "@/components/home/CaseStudiesGrid";
import AboutPreviewEs from "@/components/home/AboutPreviewEs";

const Es = () => {
  return (
    <Layout>
      <HeroEs />
      <CaseStudiesGrid />
      <AboutPreviewEs />
    </Layout>
  );
};

export default Es;
