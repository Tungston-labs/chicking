import PageLayout from "../../components/Layout/PageLayout.jsx";
import SiteFooter from "../../components/HomeSections/sections/SiteFooter/index.jsx";
import TopBanner from "../../components/TopBanner/index.jsx";
import BmiCommitment from "../../components/BMI/BmiCommitment.jsx";
import BmiFoodShowcase from "../../components/BMI/BmiFoodShowcase.jsx";
import BmiMilestones from "../../components/BMI/BmiMilestones.jsx";
import { bmiBanner } from "../../components/BMI/data/bmiData.js";

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
    <SiteFooter />
  </PageLayout>
);

export default BMI;
