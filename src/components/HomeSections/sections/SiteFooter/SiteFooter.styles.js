import styled from "styled-components";

export const Footer = styled.footer`
  position: relative;
  background: #000;
  color: #ffffff;
  overflow: hidden;
`;

export const FooterEdge = styled.img`
  position: absolute;
  top: 0;
  left: -0.15rem;
  z-index: 0;
  width: calc(100% + 0.3rem);
  height: clamp(2rem, 5.6vw, 3.2rem);
  display: block;
  object-fit: fill;
  pointer-events: none;
  user-select: none;
`;

export const FooterTop = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, var(--section-max-width));
  margin: 0 auto;
  padding: 5.25rem 2rem 2.25rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.5rem, 6vw, 5.5rem);

  @media (min-width: 761px) and (max-width: 1024px) {
    padding: 4rem 1.25rem 1.5rem;
    gap: 0.75rem;
  }

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

  @media (min-width: 761px) and (max-width: 1024px) {
    gap: 0.8rem;
    min-height: 7.1rem;
    padding: 1rem 0.9rem;

    svg {
      width: 1.35rem;
      height: 1.35rem;
    }

    strong {
      font-size: 0.88rem;
    }
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
  font-size: 0.875rem;
  line-height: 1.45;

  @media (min-width: 761px) and (max-width: 1024px) {
    gap: 0.22rem;
    margin-top: 0.45rem;
    font-size: 0.78rem;
    line-height: 1.55;
  }
`;

export const FooterNavRow = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, var(--section-max-width));
  margin: 0 auto;
  padding: 1.85rem 2rem 2.55rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1.5rem, 4vw, 4.5rem);

  @media (min-width: 761px) and (max-width: 1024px) {
    justify-content: center;
    padding: 1.2rem 1.25rem 1.25rem;
    gap: 1rem;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.35rem 1.25rem 2rem;
    gap: 1.5rem;
  }
`;

export const FooterNavHeading = styled.h2`
  display: none;
  margin: 0;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.2;
  font-weight: 800;
  text-transform: uppercase;

  @media (max-width: 760px) {
    display: block;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(1.2rem, 3vw, 2.55rem);

  @media (min-width: 761px) and (max-width: 1024px) {
    justify-content: flex-start;
    gap: 1rem;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.9rem;
  }
`;

export const FooterNavLink = styled.a`
  color: ${({ $active }) => ($active ? "#891b1c" : "#ffffff")};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 160ms ease;

  &:first-child {
    font-weight: 800;
  }

  @media (min-width: 761px) and (max-width: 1024px) {
    font-size: 0.75rem;
  }
`;

export const FooterSocials = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  flex: 0 0 auto;

  ${({ $placement }) =>
    $placement === "nav"
      ? `
        @media (max-width: 1024px) {
          display: none;
        }
      `
      : `
        @media (min-width: 1025px) {
          display: none;
        }
      `}

  @media (min-width: 761px) and (max-width: 1024px) {
    gap: 0.8rem;
  }
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

  @media (min-width: 761px) and (max-width: 1024px) {
    svg {
      width: 0.9rem;
      height: 0.9rem;
    }
  }

  &:hover {
    color: #f39200;
    transform: translateY(-0.0625rem);
  }
`;
export const FooterBottom = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  border-top: 1px dashed rgba(255, 255, 255, 0.38);

  @media (max-width: 760px) {
    padding: 0;
  }
`;

export const FooterBottomInner = styled.div`
  width: min(100%, var(--section-max-width));
  margin: 0 auto;
  padding: 1.35rem 2rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.35rem;

  @media (min-width: 761px) and (max-width: 1024px) {
    justify-content: space-between;
    padding: 1rem 1.25rem 1.1rem;
  }

  @media (max-width: 760px) {
    padding: 1.2rem 1rem 1.5rem;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
  }
`;

export const FooterCopyright = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.875rem;
  line-height: 1.5;
  text-align: center;

  @media (min-width: 761px) and (max-width: 1024px) {
    font-size: 0.88rem;
    text-align: right;
  }

  @media (max-width: 760px) {
    text-align: left;
    font-size: 0.75rem;
  }

  a {
    color: #ffffff;
    text-decoration: underline;
    transition: color 160ms ease;

    &:hover {
      color: #f39200;
    }
  }
`;
