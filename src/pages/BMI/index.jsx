import PageLayout from "../../components/Layout/PageLayout.jsx";
import SiteFooter from "../../components/HomeSections/sections/SiteFooter/index.jsx";
import PartnerCta from "../../components/HomeSections/sections/PartnerCta/index.jsx";
import SEO from "../../components/Common/SEO.jsx";
import BmiCommitment from "../../components/BMI/commitment/index.jsx";
import BmiFoodShowcase from "../../components/BMI/showcase/index.jsx";
import BmiMilestones from "../../components/BMI/milestone/index.jsx";
import sharedBannerImages from "../../assets/images/sharedBannerImages.js";

const bmiSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Brand Momentum & Investment (BMI) | Chicking",
  "description": "Explore Chicking's commitment to culinary excellence, menu innovations, fresh quality ingredients, and 100% Halal certification.",
  "url": "http://178.248.112.5/bmi",
  "publisher": {
    "@type": "Organization",
    "name": "Chicking",
    "logo": "http://178.248.112.5/images/logo.svg",
  },
};

const BMI = () => (
  <PageLayout>
    <SEO
      title="Brand Momentum & Investment (BMI) | Chicking"
      description="Explore Chicking's commitment to culinary excellence, menu innovations, fresh quality ingredients, and 100% Halal certification."
      canonicalPath="/bmi"
      schema={bmiSchema}
    />
    
    <BmiMilestones />
    <BmiFoodShowcase />
    <BmiCommitment />

    <PartnerCta
      action={{
        to: "/franchiseform",
        label: "Franchise Inquiry",
      }}
      topEdgeImage={null}
      actionBackground="#ffffff"
      actionTextColor="#891B1C"
      background="#891B1C"
      bottomEdgeImage={null}
      description="BFI doesn't just provide a brand name. We deliver a complete Chicking franchise business system backed by 20 years of operational expertise. From day one of your franchise journey through years of growth, our team remains dedicated to your profitability and success."
      textColor="#ffffff"
      title={
        <>
          Partner With Chicking <strong>- Where Proven</strong>
          <br />
          <strong>Success Meets Global Opportunity</strong>
        </>
      }
    />
    <SiteFooter topEdgeImage={null} />
  </PageLayout>
);

export default BMI;
