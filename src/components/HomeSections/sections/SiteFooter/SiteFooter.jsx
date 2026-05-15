import { useLocation, NavLink as RouterLink } from "react-router-dom";
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
  FooterEdge,
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

const normalizePath = (path) => (path === "/" ? "/" : path.replace(/\/+$/, ""));

const isActivePath = (currentPath, itemPath) => {
  const normalizedCurrentPath = normalizePath(currentPath);
  const normalizedItemPath = normalizePath(itemPath);

  if (normalizedItemPath === "/") {
    return normalizedCurrentPath === "/";
  }

  return (
    normalizedCurrentPath === normalizedItemPath ||
    normalizedCurrentPath.startsWith(`${normalizedItemPath}/`)
  );
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

const SiteFooter = ({ topEdgeImage, topedgeImage }) => {
  const location = useLocation();
  const resolvedTopEdgeImage = topEdgeImage ?? topedgeImage;

  return (
    <Footer>
      {resolvedTopEdgeImage && (
        <FooterEdge
          src={resolvedTopEdgeImage}
          alt=""
          aria-hidden="true"
        />
      )}

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
              $active={isActivePath(location.pathname, item.path)}
            >
              {item.name}
            </FooterNavLink>
          ))}
        </FooterNav>
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
