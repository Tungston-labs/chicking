import styled from "styled-components";

export const PageShell = styled.div`
  background: #ffffff;
`;

export const LayoutMain = styled.main`
  width: 100%;
  overflow: hidden;
`;

export const PageBody = styled.section`
  width: 100%;
  background: ${({ $background }) => $background};
  padding: ${({ $spacing }) => $spacing || "4rem 2rem"};

  @media (max-width: 768px) {
    padding: ${({ $fullBleed, $spacing }) =>
      $fullBleed ? $spacing || "3rem 0" : "3rem 1.25rem"};
  }
`;

export const SectionContent = styled.div`
  width: 100%;
  max-width: var(--section-max-width);
  margin: 0 auto;
`;
