import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { footerInfo } from "../../data/homeSectionsData.js";
import {
  Footer,
  FooterBottom,
  FooterInfoCard,
  FooterTop,
} from "./SiteFooter.styles.js";

const icons = {
  email: <FaEnvelope aria-hidden="true" />,
  map: <FaMapMarkerAlt aria-hidden="true" />,
  phone: <FaPhoneAlt aria-hidden="true" />,
};

const SiteFooter = () => (
  <Footer>
    <FooterTop>
      {footerInfo.map((item) => (
        <FooterInfoCard key={item.label}>
          {icons[item.icon]}
          <div>
            <strong>{item.label}</strong>
            <p>{item.text}</p>
          </div>
        </FooterInfoCard>
      ))}
    </FooterTop>
    <FooterBottom>
      <div>
        <img src="/images/logo.svg" alt="Chicking" />
        <p>Global franchise opportunities for operators ready to build with a proven food brand.</p>
      </div>
      <p>Copyright 2026 Chicking. All rights reserved.</p>
    </FooterBottom>
  </Footer>
);

export default SiteFooter;
