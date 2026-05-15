import styled from "styled-components";

const getBodyMargin = (align) => (align === "left" ? "0 0" : "0 auto");
const getLeadMargin = (align) => (align === "left" ? "1.125rem 0 0" : "1.125rem auto 0");
const getMobileLeadMargin = (align) => (align === "left" ? "0.9rem 0 0" : "0.9rem auto 0");
const getTitleMargin = (align) => (align === "left" ? "0" : "0 auto");

export const BannerShell = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  isolation: isolate;

  background-color: ${({ $background }) => $background};

  color: ${({ $textColor }) => $textColor};

  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background-image: ${({ $backgroundImage }) =>
      $backgroundImage ? `url(${$backgroundImage})` : "none"};

    background-repeat: ${({ $backgroundImageRepeat }) =>
      $backgroundImageRepeat || "no-repeat"};
    background-position: center;
    background-size: ${({ $backgroundImageSize }) =>
      $backgroundImageSize || "cover"};

    opacity: ${({ $hideBackgroundImage }) =>
      $hideBackgroundImage ? 0 : 1};

    z-index: 0;

    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.03),
      rgba(0, 0, 0, 0.04)
    );

    opacity: ${({ $hasBackgroundImage }) => ($hasBackgroundImage ? 1 : 0)};

    z-index: 1;
    pointer-events: none;
  }
`;

export const PaintEdge = styled.img`
  position: absolute;
  left: -0.15rem;
  z-index: 333;
  width: calc(100% + 0.3rem);
  height: ${({ $position }) =>
    $position === "top"
      ? "clamp(1.5rem, 6.85vw, 2.5rem)"
      : "clamp(1.7rem, 8.1vw, 2.7rem)"};
  display: block;
  object-fit: fill;
  pointer-events: none;
  user-select: none;

  ${({ $position }) =>
    $position === "top"
      ? `
        top: 0;
      `
      : `
        bottom: 0;
      `}
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  width: min(100%, ${({ $contentWidth }) => $contentWidth || "var(--section-max-width)"});
  margin: 0 auto;
  min-height: ${({ $compact }) => ($compact ? "17rem" : "38.5rem")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ $compact }) =>
    $compact ? "4.8rem 2rem 4.6rem" : "6rem 2rem 5.5rem"};

  ${({ $reverse }) =>
    $reverse &&
    `
      text-align: right;
      align-items: flex-end;
    `}

  @media (max-width: 768px) {
    min-height: auto;
    padding: ${({ $compact }) =>
      $compact ? "3.4rem 1.25rem" : "4.25rem 1.25rem 3.5rem"};
    text-align: left;
    align-items: stretch;
  }
`;

export const BannerBody = styled.div`
  width: min(100%, ${({ $width }) => $width || "var(--section-max-width)"});
  margin: ${({ $align }) => getBodyMargin($align)};
  text-align: ${({ $align }) => $align || "center"};

  @media (min-width: 769px) and (max-width: 900px) {
    margin: ${({ $tabletAlign }) => getBodyMargin($tabletAlign)};
    text-align: ${({ $tabletAlign }) => $tabletAlign || "center"};
  }

  @media (max-width: 768px) {
    margin: ${({ $mobileAlign }) => getBodyMargin($mobileAlign)};
    text-align: ${({ $mobileAlign }) => $mobileAlign || "center"};
  }
`;

export const BannerEyebrow = styled.p`
  margin: 0 0 0.75rem;
  font-size: 0.90rem;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: uppercase;
  opacity: 0.82;
`;

export const BannerTitle = styled.h2`
  margin: 0;
  font-size: 2.5rem;
  line-height: 1.28;
  font-weight: 400;
  
  strong {
    font-weight: 700;
  }

  .desktop-only {
    display: inline;
  }

  .mobile-only {
    display: none;
  }

  @media (max-width: 767px) {
    max-width: 48rem;
    margin: ${({ $mobileAlign }) => getTitleMargin($mobileAlign)};
    font-size: clamp(1.45rem, 5.25vw, 1.9rem);
    line-height: 1.18;
    text-wrap: balance;

    .desktop-only {
      display: none;
    }

    .mobile-only {
      display: inline;
    }
  }
`;

export const BannerLead = styled.p`
  width: min(100%, ${({ $width }) => $width || "72rem"});
  margin: ${({ $align }) => getLeadMargin($align)};
  font-size: 1rem;
  line-height: 1.8;
  font-weight: 300;

  @media (min-width: 769px) and (max-width: 900px) {
    margin: ${({ $tabletAlign }) => getMobileLeadMargin($tabletAlign)};
  }

  @media (max-width: 768px) {
    max-width: 38rem;
    margin: ${({ $mobileAlign }) => getMobileLeadMargin($mobileAlign)};
    font-size: 0.875rem;
    line-height: 1.65;
  }
`;

export const BannerAction = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  margin-top: 1.5rem;
  padding: 0 1.25rem;
  border-radius: 0.25rem;
  background: ${({ $background }) => $background || "#f39200"};
  color: ${({ $textColor }) => $textColor || "#ffffff"};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition:
    background 160ms ease,
    transform 160ms ease;

  &:hover {
    filter: brightness(0.92);
    transform: translateY(-0.0625rem);
  }

  svg {
    transition: transform 160ms ease;
  }

  &:hover svg {
    transform: translateX(0.25rem);
  }
`;

export const BannerFeatureGrid = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 3rem;

  @media (max-width: 900px) {
    gap: 1.35rem;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;

export const BannerFeature = styled.article`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  justify-content: center;
  text-align: left;

  @media (max-width: 900px) {
    gap: 0.85rem;
  }
`;

export const BannerFeatureIcon = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border-radius: 999rem;
  background: rgba(255, 255, 255, 0.16);
  box-shadow: 1.25rem 1.25rem 0 rgba(0, 0, 0, 0.08);

  img {
    width: 6.25rem;
    height: 6.25rem;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 900px) {
    width: 4.4rem;
    height: 4.4rem;
    box-shadow: 0.8rem 0.8rem 0 rgba(0, 0, 0, 0.08);

    img {
      width: 4.4rem;
      height: 4.4rem;
    }
  }
`;

export const BannerFeatureContent = styled.div`
  min-width: 0;
`;

export const BannerFeatureTitle = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.4;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 900px) {
    font-size: 0.84rem;
  }
`;

export const BannerFeatureText = styled.p`
  margin: 0.65rem 0 0;
  font-size: 0.95rem;
  line-height: 1.65;
  font-weight: 300;

  @media (max-width: 900px) {
    margin-top: 0.45rem;
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;

export const BannerMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const BannerImage = styled.img`
  width: min(100%, 24rem);
  height: auto;
  display: block;
`;

export const BannerChildren = styled.div`
  width: 100%;

  ${BannerBody} + &,
  ${BannerFeatureGrid} + &,
  ${BannerMedia} + & {
    margin-top: 2.7rem;
  }
`;
