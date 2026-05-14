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
    right: 2.5rem;
    width: min(22rem, 27vw);
    height: min(22rem, 27vw);
    background: url("/images/bmi/darkbginner.svg") center/contain no-repeat;
    opacity: 0.2;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 900px) {
    &::before {
      right: 0.75rem;
      width: 11rem;
      height: 11rem;
      opacity: 0.14;
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

export const CommitmentCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.75rem, 3vw, 3rem);
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const CommitmentCard = styled.article`
  position: relative;
  min-height: 14rem;
  padding-right: 1rem;

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
`;

export const CommitmentText = styled.p`
  max-width: 20rem;
  margin: 0.9rem 0 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.98rem;
  line-height: 1.7;
`;

export const CommitmentHand = styled.img`
  position: absolute;
  top: 2rem;
  left: 3rem;
  width: min(5.5rem, 8vw);
  opacity: 0.18;
  pointer-events: none;
  z-index: 1;

  @media (max-width: 900px) {
    top: 1.4rem;
    left: 1.1rem;
    width: 3.6rem;
    opacity: 0.12;
  }

  @media (max-width: 560px) {
    top: 1.1rem;
    left: 0.85rem;
    width: 3rem;
  }
`;
