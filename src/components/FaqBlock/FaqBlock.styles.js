import styled, { keyframes, css } from "styled-components";

const pinJump = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(-1rem);
  }


`;
export const FaqBlockGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.74fr) minmax(0, 1.26fr);
  gap: clamp(2.25rem, 6vw, 6.75rem);
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FaqIntro = styled.div`
  min-width: 0;
  padding-top: 0.35rem;

  h2 {
    margin: 0;
    color: #000;
    font-size: clamp(1.45rem, 1.9vw, 2.05rem);
    font-weight: 400;
    line-height: 1.15;
  }

  strong {
    margin-right: 0.28rem;
    font-weight: 800;
  }

  @media (min-width: 561px) and (max-width: 900px) {
    text-align: left;
  }
`;

export const FaqCopy = styled.p`
  width: min(100%, 34rem);
  margin: 0.85rem 0 0;
  color: #000;
  font-size: clamp(1rem, 1vw, 1.3rem);
  line-height: 1.75;

  @media (min-width: 561px) and (max-width: 900px) {
    width: min(100%, 30rem);
  }
`;

export const FaqVisual = styled.div`
  position: relative;
  width: min(100%, 34rem);
  min-height: clamp(11.5rem, 23vw, 18.25rem);
  margin-top: 1.65rem;

  @media (min-width: 561px) and (max-width: 900px) {
    width: min(100%, 29rem);
    min-height: 15.5rem;
    margin-top: 1.95rem;
  }
    @media (min-width: 301px) and (max-width: 560px) {
    width: min(100%, 24rem);
    min-height: 15.5rem;
    margin-top: 1.95rem;
  }
`;

export const FaqVisualImage = styled.img`
  position: absolute;
  display: block;
  height: auto;
  object-fit: contain;
  pointer-events: none;
  user-select: none;

  ${({ $variant }) =>
    $variant === "pin"
      ? css`
          left: -6%;
          top: 0;
          z-index: 2;
          width: clamp(11.5rem, 52%, 20rem);
          transform-origin: 50% 92%;
          animation: ${pinJump} 0.9s ease-in-out infinite;
          will-change: transform;
        `
      : css`
          left: clamp(3.5rem, 16%, 6rem);
          right: 0;
          bottom: -12%;
          z-index: 1;
          width: min(91%, 31rem);
          opacity: 0.95;
        `}
  @media (min-width: 561px) and (max-width: 900px) {
    ${({ $variant }) =>
      $variant === "pin"
        ? css`
            left: -0.35rem;
            top: 0.1rem;
            width: min(39%, 11.75rem);
          `
        : css`
            left: auto;
            right: -0.15rem;
            bottom: -0.2rem;
            width: min(68%, 19.75rem);
          `}
  }
`;

export const FaqAccordion = styled.div`
  display: grid;
  gap: 1.15rem;
  min-width: 0;
`;

export const FaqSummary = styled.summary`
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 1.5rem;
  cursor: pointer;
  list-style: none;

  background: #f7f1e4;
  color: #000;

  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.25s ease;

  &::-webkit-details-marker {
    display: none;
  }

  svg {
    flex: 0 0 auto;
    width: 0.8rem;
    height: 0.8rem;
    transition:
      transform 0.25s ease,
      color 0.25s ease;
    color: #000;
  }
`;

export const FaqQuestion = styled.details`
  overflow: hidden;
  border: 1px solid #d8d1c4;
  background: #f7f1e4;
  transition: all 0.25s ease;

  &[open] ${FaqSummary} {
    background: #9d1515;
    color: #fff;
  }

  &[open] ${FaqSummary} svg {
    transform: rotate(45deg);
    color: #fff;
  }
`;

export const FaqAnswer = styled.div`
  background: #f7f1e4;
  padding: 1.8rem 1.5rem;
  color: #4e4e4e;
  font-size: 0.875rem;
  line-height: 1.8;
`;
