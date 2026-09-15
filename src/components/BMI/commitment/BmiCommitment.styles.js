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
    opacity: 0.32;
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
  padding: 1rem 0;
`;

export const CommitmentCards = styled.div`
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.75rem, 3vw, 3rem);
  align-items: stretch;
  margin-left: 0;
  padding: 0 clamp(0.5rem, 2vw, 1.5rem);

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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 14rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 0.5px solid #2d2b2b;
  border-radius: 12px;
  backdrop-filter: blur(4px);

  @media (min-width: 768px) and (max-width: 1024px) {
    min-height: 12rem;
    padding: 1.2rem;
  }

  @media (max-width: 900px) {
    min-height: 0;
    padding: 1.2rem;
  }
`;

export const CommitmentIconBox = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.72);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;

  img {
    width: 2.4rem;
    height: 2.4rem;
    display: block;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const CommitmentTitle = styled.h3`
  margin: 1.2rem 0 0;
  color: #ffffff;
  font-size: clamp(1.2rem, 1.4vw, 1.6rem);
  line-height: 1.3;
  font-weight: 600;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.3;
  }
`;

export const CommitmentText = styled.p`
  max-width: 100%;
  margin: 0.8rem 0 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  line-height: 1.65;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.875rem;
    line-height: 1.6;
  }

  @media (max-width: 767px) {
    font-size: 0.875rem;
    line-height: 1.6;
  }
`;

export const CommitmentHand = styled.img`
  position: absolute;
  right: 2rem;
  bottom: -0.5rem;
  width: clamp(10rem, 18vw, 16rem);
  max-height: 75%;
  object-fit: contain;
  opacity: 0.35;
  pointer-events: none;
  z-index: 1;

  @media (max-width: 1024px) {
    right: 1rem;
    bottom: 0;
    width: 11rem;
    opacity: 0.25;
  }

  @media (max-width: 900px) {
    right: 50%;
    transform: translateX(50%);
    bottom: -1rem;
    width: 12rem;
    opacity: 0.2;
  }
`;
