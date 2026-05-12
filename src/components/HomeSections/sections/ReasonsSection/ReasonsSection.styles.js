import styled from "styled-components";
import { HomeSection } from "../../components/SectionFrame/SectionFrame.styles.js";

export const ReasonBand = styled(HomeSection)`
  overflow: hidden;
  background:
    linear-gradient(rgba(137, 27, 28, 0.96), rgba(137, 27, 28, 0.96)),
    url("/images/mapbackground.svg") center / 76rem auto no-repeat;
`;

export const ReasonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;
