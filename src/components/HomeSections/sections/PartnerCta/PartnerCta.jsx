import { FaArrowRight } from "react-icons/fa";
import SectionFrame from "../../components/SectionFrame/index.jsx";
import SectionHeader from "../../components/SectionHeader/index.jsx";
import { CtaPanel, PrimaryButton } from "./PartnerCta.styles.js";
import SharedBanner from "../../../SharedBanner/SharedBanner.jsx";

const PartnerCta = () => (
  <SharedBanner background="#ffffff" textColor="black" edgeColor="#891b1c"compact>
    <CtaPanel>
      <SectionHeader
        eyebrow="Ready to Partner"
        title="Ready to partner with Chicking industry leaders?"
        description="Start with a franchise inquiry and the team will help you understand the right market, format, and next steps."
      />
      <PrimaryButton href="#">
        Franchise Inquiry
        <FaArrowRight aria-hidden="true" />
      </PrimaryButton>
    </CtaPanel>
  </SharedBanner >
);

export default PartnerCta;
