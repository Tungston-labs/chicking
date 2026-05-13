import styled from "styled-components";

export const PartnerCtaWrap = styled.div`
  position: relative;
  overflow: hidden;
`;

export const PartnerCtaArtwork = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  width: min(100%, var(--section-max-width));
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
`;

export const PartnerCtaDecorImage = styled.img`
  position: absolute;
  display: block;
  height: auto;
  pointer-events: none;

  ${({ $variant }) => {
    if ($variant === "location") {
      return `
        left: 0;
        bottom: 0;
        width: clamp(8rem, 12vw, 10.5rem);
        opacity: 0.82;
        transform: translate(-12%, 12%);
      `;
    }

    if ($variant === "arrow") {
      return `
        right: clamp(14rem, 19vw, 20.5rem);
        bottom: clamp(1.8rem, 3vw, 2.7rem);
        width: clamp(4.2rem, 6.2vw, 5.5rem);
      `;
    }

    return `
      right: clamp(2.4rem, 5vw, 4.5rem);
      bottom: clamp(1.95rem, 3vw, 2.75rem);
      width: clamp(7.2rem, 11vw, 9.8rem);
    `;
  }}

  @media (min-width: 1025px) and (max-width: 1280px) {
    ${({ $variant }) => {
      if ($variant === "location") {
        return `
          left: 0.75rem;
          width: 10.25rem;
          opacity: 0.9;
          transform: translate(-6%, 8%);
        `;
      }

      return "";
    }}
  }

  @media (max-width: 1024px) {
    ${({ $variant }) => {
      if ($variant === "location") {
        return `
          left: 0.65rem;
          width: 8.75rem;
          opacity: 0.82;
          transform: translate(-8%, 10%);
        `;
      }

      if ($variant === "arrow") {
        return `
          right: 11.2rem;
          bottom: 2.45rem;
        `;
      }

      if ($variant === "smiley") {
        return `
          right: 1.5rem;
          bottom: 2.2rem;
          width: 7.6rem;
        `;
      }

      return "";
    }}
  }

  @media (max-width: 768px) {
    ${({ $variant }) => {
      if ($variant === "location") {
        return `
          width: 7.5rem;
          opacity: 0.72;
          transform: translate(-14%, 11%);
        `;
      }

      if ($variant === "arrow") {
        return `
          right: 8.7rem;
          bottom: 2.35rem;
          width: 4.2rem;
        `;
      }

      return `
        right: 0.75rem;
        bottom: 2.2rem;
        width: 6.5rem;
      `;
    }}
  }

  @media (max-width: 640px) {
    ${({ $variant }) => {
      if ($variant === "arrow") {
        return "display: none;";
      }

      if ($variant === "smiley") {
        return `
          right: 50%;
          bottom: 1.7rem;
          width: 6.2rem;
          transform: translateX(50%);
        `;
      }

      return "";
    }}
  }
`;
