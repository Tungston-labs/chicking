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
    right: 1.4rem;
    width: min(26rem, 34vw);
    height: min(26rem, 34vw);
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

export const CommitmentEdge = styled.img`
  position: absolute;
  left: -0.15rem;
  z-index: 3;
  width: calc(100% + 0.3rem);
  height: ${({ $position }) =>
    $position === "top"
      ? "clamp(1.6rem, 7vw, 2.7rem)"
      : "clamp(2rem, 6vw, 3rem)"};
  display: block;
  object-fit: fill;
  pointer-events: none;

  ${({ $position }) =>
    $position === "top"
      ? "top: 0;"
      : "bottom: 0;"}
`;

export const CommitmentInner = styled.div`
  position: relative;
  z-index: 2;
  width: min(100%, var(--section-max-width));
  margin: 0 auto;
  padding: 5.75rem 2rem 5rem;

  @media (max-width: 768px) {
    padding: 4.25rem 1.25rem 4rem;
  }
`;

export const CommitmentHeader = styled.div`
  width: min(100%, 52rem);
  margin: 0 auto 2.75rem;
  text-align: center;

  h2 {
    font-size: clamp(1.55rem, 2.8vw, 2.5rem);
    line-height: 1.16;
    text-wrap: balance;
  }

  p {
    width: min(100%, 42rem);
    margin-left: auto;
    margin-right: auto;
    font-size: 0.98rem;
    line-height: 1.7;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 2.2rem;

    h2 {
      font-size: 1.75rem;
    }

    p {
      font-size: 0.88rem;
      line-height: 1.6;
    }
  }

  @media (max-width: 767px) {
    width: min(100%, 18rem);
    margin-bottom: 2rem;

    h2 {
      font-size: 1.3rem;
      line-height: 1.2;
    }

    p {
      width: 100%;
      font-size: 0.8rem;
      line-height: 1.55;
    }
  }
`;

export const CommitmentCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.75rem, 3vw, 3rem);
  align-items: start;

  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 1.3rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const CommitmentCard = styled.article`
  position: relative;
  min-height: 14rem;
  padding-right: 1rem;

  @media (min-width: 768px) and (max-width: 1024px) {
    min-height: 12rem;
    padding-right: 0.5rem;
  }

  @media (max-width: 900px) {
    min-height: 0;
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
    font-size: 0.78rem;
    line-height: 1.55;
  }
`;

export const CommitmentHand = styled.img`
  position: absolute;
  top: 2rem;
  left: 2.6rem;
  width: min(7rem, 9vw);
  opacity: 0.28;
  pointer-events: none;
  z-index: 2;

  @media (max-width: 1024px) {
    top: 1.7rem;
    left: 1.5rem;
    width: 4.6rem;
    opacity: 0.2;
  }

  @media (max-width: 900px) {
    top: 1.4rem;
    left: 1.1rem;
    width: 3.6rem;
    opacity: 0.18;
  }

  @media (max-width: 560px) {
    top: 1.1rem;
    left: 0.85rem;
    width: 3rem;
    opacity: 0.16;
  }
`;
