import styled from "styled-components";

export const FoodSection = styled.section`
  padding: 3rem 0 4rem;
  background: #ffffff;

  @media (max-width: 768px) {
    padding: 2.5rem 0 3rem;
  }
`;

export const FoodScroller = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 2fr));
  gap: 1.4rem;

  @media (max-width: 1024px) {
    grid-auto-columns: minmax(39.5rem, 40rem);
    grid-auto-flow: column;
    grid-template-columns: none;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    padding-bottom: 0.55rem;

    & > * {
      scroll-snap-align: start;
    }
  }
`;

export const FoodCard = styled.article`
  overflow: hidden;
  background: #ffffff;
`;

export const FoodImage = styled.img`
  width: 100%;
  aspect-ratio: 1.18;
  object-fit: cover;
  display: block;
`;

export const FoodCopy = styled.div`
  min-height: 7.25rem;
  padding: 0.8rem 0.95rem 0.95rem;
  background: #0b0b0b;
`;

export const FoodTitle = styled.h3`
  margin: 0;
  color: #ffffff;
  font-size: 0.78rem;
  line-height: 1.35;
  font-weight: 700;
  text-transform: uppercase;
`;

export const FoodText = styled.p`
  margin: 0.45rem 0 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.84rem;
  line-height: 1.55;
`;
