import styled from "styled-components";

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(2rem, 7vw, 4rem);

  @media (min-width: 600px) and (max-width: 1000px) {
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: 1rem;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    padding-bottom: 0.4rem;
    scrollbar-width: thin;
  }

 /* @media (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
} */

  @media (max-width: 570px) {
    display: grid;
  }
`;
