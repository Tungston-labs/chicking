import styled from "styled-components";

export const HomeSection = styled.section`
  position: relative;
  width: 100%;
  padding: ${({ $compact }) => ($compact ? "4.5rem 2rem" : "5.5rem 2rem")};
  background: ${({ $background }) => $background || "#ffffff"};
  color: ${({ $color }) => $color || "#171717"};

  @media (max-width: 768px) {
    padding: ${({ $compact }) =>
      $compact ? "3.25rem 1.25rem" : "4rem 1.25rem"};
  }
`;

export const SectionInner = styled.div`
  width: min(100%, var(--section-max-width));
  margin: 0 auto;
`;
