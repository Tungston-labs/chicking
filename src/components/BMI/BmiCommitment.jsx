import SharedBanner from "../SharedBanner/index.jsx";
import bmiImages from "../../assets/images/bmiImages.js";
import { bmiCommitments } from "./data/bmiData.js";
import {
  CommitmentBannerContent,
  CommitmentCard,
  CommitmentCards,
  CommitmentHand,
  CommitmentIconBox,
  CommitmentSection,
  CommitmentText,
  CommitmentTitle,
} from "./BmiCommitment.styles.js";

const BmiCommitment = () => (
  <CommitmentSection>
    <SharedBanner
      background="transparent"
      bottomEdgeImage={bmiImages.edges.darkBottom}
      edgeColor="#ffffff"
      forceEdgeImages
      headerAlign="center"
      headerAlignMobile="left"
      headerAlignTablet="left"
      headerWidth="52rem"
      leadWidth="42rem"
      textColor="#ffffff"
      title="Commitment To Endurance"
      description="Our comprehensive support systems are designed to ensure your franchise success through three core pillars built to scale efficiency and profitability."
      topEdgeImage={bmiImages.edges.darkTop}
    >
      <CommitmentBannerContent>
        <CommitmentCards>
          {bmiCommitments.map((item) => (
            <CommitmentCard key={item.title}>
              <CommitmentIconBox>
                <img src={bmiImages.icon} alt="" aria-hidden="true" />
              </CommitmentIconBox>
              <CommitmentTitle>{item.title}</CommitmentTitle>
              <CommitmentText>{item.text}</CommitmentText>
            </CommitmentCard>
          ))}
        </CommitmentCards>

        <CommitmentHand src={bmiImages.hand} alt="" aria-hidden="true" />
      </CommitmentBannerContent>
    </SharedBanner>
  </CommitmentSection>
);

export default BmiCommitment;
