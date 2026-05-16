import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: min(100%, ${({ $align }) => ($align === "left" ? "64rem" : "54rem")});
  margin: ${({ $align }) =>
    $align === "left" ? "0 0 2.5rem" : "0 auto 2.5rem"};
  text-align: ${({ $align }) => $align || "center"};
`;

export const Eyebrow = styled.p`
  margin: 0 0 0.55rem;
  color: ${({ $tone }) => ($tone === "light" ? "#f8d36f" : "#111111")};
  font-size: ${({ $asTitle }) => ($asTitle ? "1.9rem" : "0.78rem")};
  font-weight: ${({ $asTitle }) => ($asTitle ? 400 : 700)};
  line-height: 1.2;
  letter-spacing: 0;
  text-transform: ${({ $asTitle }) => ($asTitle ? "none" : "uppercase")};

  strong {
    font-weight: 700;
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: inherit;
  font-size: clamp(1.85rem, 2.5vw, 2.25rem);
  line-height: 1.2;
  font-weight: 500;
  

  strong {
    font-weight: 700;
  }
`;

export const Text = styled.p`
  width: min(100%, ${({ $align }) => ($align === "left" ? "62rem" : "46rem")});
  margin: 0.9rem ${({ $align }) => ($align === "left" ? "0 0" : "auto 0")};
  color: ${({ $tone }) =>
    $tone === "light" ? "rgba(255, 255, 255, 0.78)" : "#5f5f5f"};
  font-size: 0.875rem;
  line-height: 1.8;
`;
