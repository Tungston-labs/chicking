import SharedBanner from "../../../SharedBanner/SharedBanner.jsx";
import FaqItem from "../../components/FaqItem/index.jsx";
import SectionFrame from "../../components/SectionFrame/index.jsx";
import SectionHeader from "../../components/SectionHeader/index.jsx";
import { faqs } from "../../data/homeSectionsData.js";
import {
  FaqImagePanel,
  FaqLayout,
  FaqListWrap,
} from "./FaqSection.styles.js";

const FaqSection = () => (
  <SharedBanner background="#fff">
    <FaqLayout>
      <FaqImagePanel>
        <img src="/images/animated1.svg" alt="" />
      </FaqImagePanel>
      <div>
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="Clear answers before you take the next step"
          description="A quick look at the questions most franchise candidates ask before starting a conversation."
        />
        <FaqListWrap>
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </FaqListWrap>
      </div>
    </FaqLayout>
  </SharedBanner >
);

export default FaqSection;
