import SharedBanner from "../../../SharedBanner/SharedBanner.jsx";
import ReasonCard from "../../components/ReasonCard/index.jsx";
import { SectionInner } from "../../components/SectionFrame/SectionFrame.styles.js";
import SectionHeader from "../../components/SectionHeader/index.jsx";
import { reasons } from "../../data/homeSectionsData.js";
import { ReasonBand, ReasonGrid } from "./ReasonsSection.styles.js";

const ReasonsSection = () => (
  <SharedBanner $color="#ffffff" edgeColor="#ffff" background="#891b1c">
      <SectionHeader
        light
        eyebrow="Why Chicking"
        title={
          <>
            More reasons to revolutionize the world with our <strong>fried chicken</strong>
          </>
        }
        description="A focused brand platform for operators who want recognizable products, dependable systems, and room to grow."
      />
      <ReasonGrid>
        {reasons.map((reason) => (
          <ReasonCard key={reason.title} {...reason} />
        ))}
      </ReasonGrid>
  </SharedBanner>
);

export default ReasonsSection;
