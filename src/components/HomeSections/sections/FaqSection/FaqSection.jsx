import FaqBlock from "../../../FaqBlock/index.jsx";
import SharedBanner from "../../../SharedBanner/SharedBanner.jsx";
import { faqs } from "../../data/homeSectionsData.js";

const FaqSection = () => (
  <SharedBanner
    background="#ffffff"
    contentWidth="var(--section-max-width-narrow)"
    textColor="#171717"
    hideBackgroundImage

  >
    <FaqBlock
      description="A quick look at the questions most franchise candidates ask before starting a conversation."
      faqs={faqs}
      highlight="Frequently"
      mapImage="/images/faq2.svg"
      pinImage="/images/faq1.svg"
      title="Asked Questions?"
    />
  </SharedBanner>
);

export default FaqSection;
