import styled from "styled-components";
import { HomeSection } from "../../components/SectionFrame/SectionFrame.styles.js";

export const ReasonBand = styled(HomeSection)`
  overflow: hidden;
`

export const ReasonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 980px) {
    grid-template-columns: none;
    grid-auto-columns: minmax(14.75rem, 15.75rem);
    grid-auto-flow: column;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    padding: 0 0 0.45rem;
    scrollbar-width: thin;

    & > * {
      scroll-snap-align: start;
    }
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    grid-auto-columns: unset;
    grid-auto-flow: row;
    overflow-x: visible;
    scroll-snap-type: none;
    padding-bottom: 0;

    & > * {
      scroll-snap-align: none;
    }
  }
`;
