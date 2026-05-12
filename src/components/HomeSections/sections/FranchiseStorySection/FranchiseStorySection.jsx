import SectionHeader from "../../components/SectionHeader/index.jsx";
import { SectionInner } from "../../components/SectionFrame/SectionFrame.styles.js";
import {
  StoryCard,
  StoryFlag,
  StoryImage,
  StoryLayout,
  StorySideImage,
  StoryText,
  StoryTitle,
} from "./FranchiseStorySection.styles.js";
import SharedBanner from "../../../SharedBanner/SharedBanner.jsx";

const FranchiseStorySection = () => (
  <SharedBanner $color="#ffffff">
    <SectionInner>
      <SectionHeader
        light
        eyebrow="Franchise Success Story"
        title="A growing brand story with partners at the center"
        description="Starting with one outlet, this franchise partner expanded through strong brand support, operational excellence, and high customer demand."
      />
      <StoryLayout>
        <StorySideImage src="/images/frame2.svg" alt="" />
        <StoryCard>
          <div>
            <StoryFlag />
            <StoryTitle>From one strong store to a recognizable destination</StoryTitle>
            <StoryText>
              With training, food consistency, and local market support, partners can focus on guest relationships while the brand supports the daily rhythm.
            </StoryText>
          </div>
          <StoryImage src="/images/frame1.svg" alt="" />
        </StoryCard>
        <StorySideImage src="/images/frame3.svg" alt="" />
      </StoryLayout>
    </SectionInner>
  </SharedBanner>
);

export default FranchiseStorySection;
