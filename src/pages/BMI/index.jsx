import PageLayout from "../../components/Layout/PageLayout.jsx";
import SiteFooter from "../../components/HomeSections/sections/SiteFooter/index.jsx";
import PartnerCta from "../../components/HomeSections/sections/PartnerCta/PartnerCta.jsx";
import TopBanner from "../../components/TopBanner/index.jsx";
import BmiCommitment from "../../components/BMI/BmiCommitment.jsx";
import BmiFoodShowcase from "../../components/BMI/BmiFoodShowcase.jsx";
import BmiMilestones from "../../components/BMI/BmiMilestones.jsx";
import sharedBannerImages from "../../assets/images/sharedBannerImages.js";
import { bmiBanner } from "../../components/BMI/data/bmiData.js";
import FaqSection from "../../components/HomeSections/sections/FaqSection/FaqSection.jsx";

const BMI = () => (
  <PageLayout>
    <TopBanner
      title={bmiBanner.titleLines.map((line, index) => (
        <span key={line}>
          {line}
          {index < bmiBanner.titleLines.length - 1 ? <br /> : null}
        </span>
      ))}
      description={bmiBanner.description}
      image={bmiBanner.image}
    />
    <BmiMilestones />
    <BmiCommitment />
    <BmiFoodShowcase />
    <PartnerCta
      action={{
        to: "/franchiseform",
        label: "Franchise Inquiry",
      }}
      actionBackground="#ffffff"
      actionTextColor="#891B1C"
      background="#891B1C"
      bottomEdgeImage={sharedBannerImages.edges.top}
      description="BFI doesn't just provide a brand name. We deliver a complete Chicking franchise business system backed by 20 years of operational expertise. From day one of your franchise journey through years of growth, our team remains dedicated to your profitability and success."
      textColor="#ffffff"
      title={
        <>
          Partner With Chicking <strong>- Where Proven</strong>
          <br />
          <strong>Success Meets Global Opportunity</strong>
        </>
      }
      topEdgeImage={sharedBannerImages.edges.top}
    />
<SiteFooter topEdgeImage={null} />
  </PageLayout>
);

export default BMI;
