import SectionHeader from "../HomeSections/components/SectionHeader/SectionHeader.jsx";
import bmiImages from "../../assets/images/bmiImages.js";
import { bmiCommitments } from "./data/bmiData.js";
import {
  CommitmentCard,
  CommitmentCards,
  CommitmentEdge,
  CommitmentHand,
  CommitmentHeader,
  CommitmentIconBox,
  CommitmentInner,
  CommitmentSection,
  CommitmentText,
  CommitmentTitle,
} from "./BmiCommitment.styles.js";

const BmiCommitment = () => (
  <CommitmentSection>
    <CommitmentEdge
      src={bmiImages.edges.darkTop}
      alt=""
      aria-hidden="true"
      $position="top"
    />

    <CommitmentInner>
      <CommitmentHeader>
        <SectionHeader
          title="Commitment To Endurance"
          description="Our comprehensive support systems are designed to ensure your franchise success through three core pillars built to scale efficiency and profitability."
          light
        />
      </CommitmentHeader>

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
    </CommitmentInner>

    <CommitmentEdge
      src={bmiImages.edges.darkBottom}
      alt=""
      aria-hidden="true"
      $position="bottom"
    />
  </CommitmentSection>
);

export default BmiCommitment;
