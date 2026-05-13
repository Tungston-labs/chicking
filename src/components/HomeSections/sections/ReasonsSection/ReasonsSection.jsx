import SharedBanner from "../../../SharedBanner/SharedBanner.jsx";
import ReasonCard from "../../components/ReasonCard/index.jsx";
import { reasons } from "../../data/homeSectionsData.js";
import { ReasonGrid } from "./ReasonsSection.styles.js";

const ReasonsSection = () => (
  <SharedBanner
    background="#891b1c"
description={
  <>
    Chicking aims to be the top choice for dining out, known for
    bringing unmatched happiness with our one-of-a-kind menu items.
    <br />
    We strive for a future where all patrons savor our delicious
    dishes, leading the way in fast-food quality.
  </>
}
    edgeColor="#ffffff"
    title={
      <>
        We're Here To <strong>Revolutionize</strong><br></br> The World With Best 
        <strong> fried chicken</strong>
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
