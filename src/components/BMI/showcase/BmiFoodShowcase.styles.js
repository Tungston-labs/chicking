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

export const FoodHeader = styled.div`
  width: min(100%, 50rem);
  margin-bottom: 2.5rem;

  @media (min-width: 901px) and (max-width: 1180px) {
    width: min(100%, 46rem);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: min(100%, 40rem);
    margin-bottom: 2rem;
  }

  @media (max-width: 767px) {
    width: min(100%, 22rem);
    margin-bottom: 1.75rem;
  }
`;

export const FoodScrollerViewport = styled.div`
  width: 100%;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: calc(100% + 1.5rem);
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
  grid-auto-columns: clamp(17.5rem, 28vw, 24rem);
  gap: 1rem;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 0;
  padding: 0 0 0.85rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(137, 27, 28, 0.34) transparent;
  -webkit-overflow-scrolling: touch;

  & > * {
    scroll-snap-align: start;
  }

  &::-webkit-scrollbar {
    height: 0.34rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999rem;
    background: rgba(137, 27, 28, 0.34);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-auto-columns: minmax(18rem, 23rem);
    gap: 1rem;
  }

  @media (max-width: 767px) {
    grid-auto-columns: minmax(15.75rem, 82%);
    gap: 0.9rem;
    padding-bottom: 0.55rem;
  }

  @media (max-width: 380px) {
    grid-auto-columns: 84%;
  }
`;

export const FoodCard = styled.article`
  overflow: hidden;
  background: #ffffff;
`;

export const FoodImage = styled.img`
  width: 100%;
  aspect-ratio: 1.28;
  object-fit: cover;
  display: block;
`;

export const FoodCopy = styled.div`
  min-height: 7.25rem;
  padding: 0.8rem 0.95rem 0.95rem;
  background: #0b0b0b;

  @media (min-width: 768px) and (max-width: 1024px) {
    min-height: 7.5rem;
    padding: 0.7rem 0.8rem 0.85rem;
  }

  @media (max-width: 767px) {
    min-height: 7.2rem;
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
    font-size: 0.875rem;
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
    font-size: 0.875rem;
    line-height: 1.6;
  }

  @media (max-width: 767px) {
    margin-top: 0.28rem;
    font-size: 0.875rem;
    line-height: 1.55;
  }
`;
