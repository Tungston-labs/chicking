import { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import {
  FiInstagram,
  FiMail,
  FiMap,
  FiPhoneCall,
  FiTwitter,
} from "react-icons/fi";
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
  email: <FiMail />,
  map: <FiMap />,
  phone: <FiPhoneCall />,
};

const socialLinks = (
  <>
    <FooterSocialLink href="#">
      <FiTwitter />
    </FooterSocialLink>

    <FooterSocialLink href="#">
      <FiInstagram />
    </FooterSocialLink>

    <FooterSocialLink href="#">
      <SiMeta />
    </FooterSocialLink>
  </>
);

const SiteFooter = () => {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <Footer>
      <FooterTop>
        {footerInfo.map((item) => (
          <FooterInfoCard key={item.label}>
            <FooterIconWrap>
              {icons[item.icon]}
            </FooterIconWrap>

            <div>
              <strong>{item.label}</strong>

              <FooterContactText>
                {item.lines.map((line) => (
                  <span key={line}>
                    {line}
                  </span>
                ))}
              </FooterContactText>
            </div>
          </FooterInfoCard>
        ))}
      </FooterTop>

      <FooterNavRow>
        <FooterNavHeading>
          Quick links
        </FooterNavHeading>

        <FooterNav>
          {navItems.map((item) => (
            <FooterNavLink
              as={RouterLink}
              key={item.path}
              to={item.path}
              $active={activeItem === item.name}
              onClick={() =>
                setActiveItem(item.name)
              }
            >
              {item.name}
            </FooterNavLink>
          ))}
        </FooterNav>

        <FooterSocials>
          {socialLinks}
        </FooterSocials>
      </FooterNavRow>

      <FooterBottom>
        <FooterBottomInner>
          <FooterSocials>
            {socialLinks}
          </FooterSocials>

          <FooterCopyright>
            © Copyright 2026, Chicking.
            Designed By{" "}
            <a href="https://tungstonlabs.com">
              Tungston Labs
            </a>
          </FooterCopyright>
        </FooterBottomInner>
      </FooterBottom>
    </Footer>
  );
};

export default SiteFooter;