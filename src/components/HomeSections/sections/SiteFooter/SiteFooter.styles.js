import styled from "styled-components";

export const Footer = styled.footer`
  position: relative;
  background: #080808;
  color: #ffffff;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -0.0625rem;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 1.45rem;
    pointer-events: none;
  }
`;

export const FooterTop = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 85rem);
  margin: 0 auto;
  padding: 5.25rem 2rem 2.25rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.5rem, 6vw, 5.5rem);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 4rem 1.25rem 1.6rem;
    gap: 1rem;
  }
`;

export const FooterInfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  min-height: 8.85rem;
  padding: 1.55rem 1.75rem;
  border: 1px dashed rgba(255, 255, 255, 0.48);
  background: transparent;

  svg {
    width: 2.35rem;
    height: 2.35rem;
    color: #ffffff;
  }

  strong {
    display: block;
    margin-top: 0.08rem;
    font-size: 0.98rem;
    line-height: 1.3;
    font-weight: 800;
    text-transform: uppercase;
  }

  @media (max-width: 760px) {
    min-height: auto;
    padding: 1.35rem;
  }
`;

export const FooterIconWrap = styled.span`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
`;

export const FooterContactText = styled.p`
  display: grid;
  gap: 0.32rem;
  margin: 0.55rem 0 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.92rem;
  line-height: 1.45;
`;

export const FooterNavRow = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 85rem);
  margin: 0 auto;
  padding: 1.85rem 2rem 2.55rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1.5rem, 4vw, 4.5rem);
  border-bottom: 1px dashed rgba(255, 255, 255, 0.38);

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  @media (max-width: 760px) {
    padding: 1.35rem 1.25rem 2rem;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(1.2rem, 3vw, 2.55rem);
`;

export const FooterNavLink = styled.a`
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 400;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 160ms ease;

  &:first-child {
    font-weight: 800;
  }

  &:hover {
    color: #f39200;
  }
`;

export const FooterSocials = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  flex: 0 0 auto;
`;

export const FooterSocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  transition:
    color 160ms ease,
    transform 160ms ease;

  svg {
    width: 1.35rem;
    height: 1.35rem;
  }

  &:hover {
    color: #f39200;
    transform: translateY(-0.0625rem);
  }
`;
export const FooterBottom = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 85rem);
  margin: 0 auto;
  padding: 1.35rem 2rem 1.6rem;
  border-top: 1px dashed rgba(255, 255, 255, 0.38);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 760px) {
    padding: 1.2rem 1rem 1.5rem;
  }
`;

export const FooterCopyright = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.82rem;
  line-height: 1.5;
  text-align: center;

  a {
    color: #ffffff;
    text-decoration: underline;
    transition: color 160ms ease;

    &:hover {
      color: #f39200;
    }
  }
`;