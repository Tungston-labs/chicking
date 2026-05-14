import styled from "styled-components";

export const FoodSection = styled.section`
  padding: 3rem 0 4rem;
  background: #ffffff;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 2.6rem 0 3.25rem;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 0 3rem;
  }
`;

export const FoodScrollerViewport = styled.div`
  width: calc(100% + 4rem);
  margin-right: -4rem;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: calc(100% + 3rem);
    margin-right: -1.5rem;
  }

  @media (max-width: 768px) {
    width: calc(100% + 1.25rem);
    margin-right: -1.25rem;
  }
`;

export const FoodScroller = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(31rem, 33.5rem);
  gap: 1.4rem;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
  padding-bottom: 0.7rem;

  & > * {
    scroll-snap-align: start;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-auto-columns: minmax(22rem, 25rem);
    gap: 1rem;
  }

  @media (max-width: 767px) {
    grid-auto-columns: minmax(13.5rem, 15.5rem);
    gap: 0.9rem;
    padding-bottom: 0.55rem;
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

  @media (min-width: 768px) and (max-width: 1024px) {
    min-height: 6.2rem;
    padding: 0.7rem 0.8rem 0.85rem;
  }

  @media (max-width: 767px) {
    min-height: 5.5rem;
    padding: 0.6rem 0.7rem 0.75rem;
  }
`;

export const FoodTitle = styled.h3`
  margin: 0;
  color: #ffffff;
  font-size: 0.82rem;
  line-height: 1.45;
  letter-spacing: 0.015em;
  font-weight: 700;
  text-transform: uppercase;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.72rem;
    line-height: 1.35;
  }

  @media (max-width: 767px) {
    font-size: 0.56rem;
    line-height: 1.3;
  }
`;

export const FoodText = styled.p`
  margin: 0.45rem 0 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.84rem;
  line-height: 1.55;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 0.35rem;
    font-size: 0.72rem;
    line-height: 1.45;
  }

  @media (max-width: 767px) {
    margin-top: 0.28rem;
    font-size: 0.6rem;
    line-height: 1.35;
  }
`;
