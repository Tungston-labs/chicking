import { FiInstagram, FiMail, FiMap, FiPhoneCall, FiTwitter } from "react-icons/fi";
import { SiMeta } from "react-icons/si";
import { footerInfo, navItems } from "../../data/homeSectionsData.js";
import {
  Footer,
  FooterContactText,
  FooterInfoCard,
  FooterNav,
  FooterNavLink,
  FooterSocialLink,
  FooterSocials,
  FooterTop,
  FooterIconWrap,
  FooterNavRow,
  FooterBottom,
  FooterBottomInner,
  FooterCopyright,
  FooterNavHeading,
} from "./SiteFooter.styles.js";

const icons = {
  email: <FiMail aria-hidden="true" />,
  map: <FiMap aria-hidden="true" />,
  phone: <FiPhoneCall aria-hidden="true" />,
};

const socialLinks = (
  <>
    <FooterSocialLink href="#" aria-label="Twitter">
      <FiTwitter aria-hidden="true" />
    </FooterSocialLink>
    <FooterSocialLink href="#" aria-label="Instagram">
      <FiInstagram aria-hidden="true" />
    </FooterSocialLink>
    <FooterSocialLink href="#" aria-label="Meta">
      <SiMeta aria-hidden="true" />
    </FooterSocialLink>
  </>
);

const SiteFooter = () => (
  <Footer>
    <FooterTop>
      {footerInfo.map((item) => (
        <FooterInfoCard key={item.label}>
          <FooterIconWrap>{icons[item.icon]}</FooterIconWrap>
          <div>
            <strong>{item.label}</strong>
            <FooterContactText>
              {item.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </FooterContactText>
          </div>
        </FooterInfoCard>
      ))}
    </FooterTop>
    <FooterNavRow>
      <FooterNavHeading>Quick links</FooterNavHeading>
      <FooterNav aria-label="Footer navigation">
        {navItems.map((item) => (
          <FooterNavLink key={item} href={item === "Home" ? "/" : "#"}>
            {item}
          </FooterNavLink>
        ))}
      </FooterNav>
      <FooterSocials $placement="nav" aria-label="Social links">
        {socialLinks}
      </FooterSocials>
    </FooterNavRow>
    <FooterBottom>
      <FooterBottomInner>
        <FooterSocials $placement="bottom" aria-label="Social links">
          {socialLinks}
        </FooterSocials>
        <FooterCopyright>
          © Copyright 2026, Chicking. Designed By{" "}
          <a href="https://tungstonlabs.com">Tungston Labs.</a>
        </FooterCopyright>
      </FooterBottomInner>
    </FooterBottom>
  </Footer>
);

export default SiteFooter;
