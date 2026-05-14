import styled from "styled-components";

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(2rem, 7vw, 7.2rem);

  @media (min-width: 600px) and (max-width: 1000px) {
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: 1.6rem;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    padding-bottom: 0.4rem;
    scrollbar-width: thin;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 599px) {
    display: grid;
  }
`;
