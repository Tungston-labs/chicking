import SharedBanner from "../../../SharedBanner/SharedBanner.jsx";
import ReasonCard from "../../components/ReasonCard/index.jsx";
import { reasons } from "../../data/homeSectionsData.js";
import { ReasonGrid } from "./ReasonsSection.styles.js";

const ReasonsSection = () => (
  <SharedBanner
    background="#891b1c"
    backgroundImage="/images/mapbackground.svg"
    backgroundImageSize="min(76rem, 94%) auto"
    description="A focused brand platform for operators who want recognizable products, dependable systems, and room to grow."
    edgeColor="#ffffff"
    eyebrow="Why Chicking"
    title={
      <>
        More reasons to revolutionize the world with our{" "}
        <strong>fried chicken</strong>
      </>
    }
  >
    <ReasonGrid>
      {reasons.map((reason) => (
        <ReasonCard key={reason.title} {...reason} />
      ))}
    </ReasonGrid>
  </SharedBanner>
);

export default ReasonsSection;
