import styled from "styled-components";

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(1rem, 4vw, 2rem);

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }

  /* Mobile */
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;
