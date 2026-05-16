import styled from "styled-components";

export const CommitmentSection = styled.section`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background: #000000;
  color: #ffffff;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0.4rem;
    width: min(46rem, 44vw);
    height: min(46rem, 34vw);
    background: url("/images/bmi/darkbginner.svg") center/contain no-repeat;
    opacity: 2.32;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 1024px) {
    &::before {
      right: 0.4rem;
      width: 14rem;
      height: 14rem;
      opacity: 0.24;
    }
  }

  @media (max-width: 900px) {
    &::before {
      right: 0.75rem;
      width: 10rem;
      height: 10rem;
      opacity: 0.22;
    }
  }
`;

export const CommitmentBannerContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const CommitmentCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.75rem, 3vw, 3rem);
  align-items: start;
  margin-left: 8%;
  padding: 0 clamp(0.2rem, 1.4vw, 0.9rem);

  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 1.3rem;
    padding: 0 0.4rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-left: 0;
    padding: 0;
  }
`;

export const CommitmentCard = styled.article`
  box-sizing: border-box;
  position: relative;
  min-height: 14rem;
  padding: 0 1rem;

  @media (min-width: 768px) and (max-width: 1024px) {
    min-height: 12rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 900px) {
    min-height: 0;
    padding: 0;
  }
`;

export const CommitmentIconBox = styled.div`
  width: 5.5rem;
  height: 4.5rem;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.72);
  background: rgba(255, 255, 255, 0.02);

  img {
    width: 2.6rem;
    height: 2.6rem;
    display: block;
  }

  @media (max-width: 768px) {
    width: 5rem;
    height: 4.1rem;
  }
`;

export const CommitmentTitle = styled.h3`
  margin: 1.2rem 0 0;
  color: #ffffff;
  font-size: clamp(1.3rem, 1.5vw, 1.9rem);
  line-height: 1.25;
  font-weight: 400;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.05rem;
    line-height: 1.3;
  }
`;

export const CommitmentText = styled.p`
  max-width: 20rem;
  margin: 0.9rem 0 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.98rem;
  line-height: 1.7;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.875rem;
    line-height: 1.65;
  }

  @media (max-width: 767px) {
    font-size: 0.875rem;
    line-height: 1.65;
  }
`;

export const CommitmentHand = styled.img`
  position: absolute;
  left: 2.6rem;
  bottom: 6rem;
  width: min(15rem, 22vw);
  opacity: 0.68;
  pointer-events: none;
  z-index: 2;

  @media (max-width: 1024px) {
    top: 1.7rem;
    left: 1.5rem;
    width: 8.6rem;
    opacity: 0.62;
  }

  @media (max-width: 900px) {
    top: 1.4rem;
    left: 1.1rem;
    width: 3.6rem;
    opacity: 0.18;
  }

  @media (max-width: 560px) {
    top: 1.1rem;
    left: 10.85rem;
    width: 13rem;
    opacity: 0.56;
  }
`;
