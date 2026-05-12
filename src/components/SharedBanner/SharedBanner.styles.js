import styled from "styled-components";

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

    background:
      radial-gradient(
        circle at 50% 48%,
        rgba(255, 255, 255, 0.06) 0 18rem,
        transparent 18.25rem
      ),
      radial-gradient(
        circle at 72% 42%,
        rgba(0, 0, 0, 0.09) 0 8rem,
        transparent 8.25rem
      ),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.03),
        rgba(0, 0, 0, 0.04)
      );

    z-index: 1;
    pointer-events: none;
  }
`;

export const PaintEdge = styled.svg`
  position: absolute;
  left: 0;
  z-index: 333;
  width: 100%;
  height: 2.1rem;
  color: ${({ $edgeColor }) => $edgeColor};
  pointer-events: none;
  fill: ${({ $edgeColor }) => $edgeColor || "white"};

  path {
    shape-rendering: crispEdges;
  }

  path + path {
    opacity: 1.62;
  }

  ${({ $position }) =>
    $position === "top"
      ? `
        top: -0.0625rem;
      `
      : `
        bottom: -0.0625rem;
      `}

  @media (max-width: 768px) {
    height: 2.25rem;
  }
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  width: min(100%, 96rem);
  margin: 0 auto;
  min-height: 24.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 4rem 5.5rem;

  ${({ $reverse }) =>
    $reverse &&
    `
      text-align: right;
      align-items: flex-end;
    `}

  @media (max-width: 768px) {
    min-height: auto;
    padding: 5rem 1.5rem;
    text-align: left;
    align-items: stretch;
  }
`;

export const BannerBody = styled.div`
  width: min(100%, 85rem);
  margin: 0 auto;
  text-align: center;
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

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const BannerLead = styled.p`
  width: min(100%, 72rem);
  margin: 1.125rem auto 0;
  font-size: 1rem;
  line-height: 1.8;
  font-weight: 300;
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
  background: #f39200;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition:
    background 160ms ease,
    transform 160ms ease;

  &:hover {
    background: #dd8200;
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
`;

export const BannerFeatureText = styled.p`
  margin: 0.65rem 0 0;
  font-size: 0.95rem;
  line-height: 1.65;
  font-weight: 300;
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
