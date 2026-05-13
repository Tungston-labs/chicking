import styled from "styled-components";

export const FaqBlockGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.74fr) minmax(0, 1.26fr);
  gap: clamp(2.25rem, 6vw, 6.75rem);
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const FaqIntro = styled.div`
  min-width: 0;
  padding-top: 0.35rem;

  h2 {
    margin: 0;
    color: #171717;
    font-size: clamp(1.45rem, 2.1vw, 2.05rem);
    font-weight: 400;
    line-height: 1.15;
  }

  strong {
    margin-right: 0.28rem;
    font-weight: 800;
  }
`;

export const FaqCopy = styled.p`
  width: min(100%, 34rem);
  margin: 0.85rem 0 0;
  color: #565656;
  font-size: clamp(0.88rem, 1vw, 0.98rem);
  line-height: 1.75;
`;

export const FaqVisual = styled.div`
  position: relative;
  width: min(100%, 34rem);
  min-height: clamp(11.5rem, 23vw, 18.25rem);
  margin-top: 1.65rem;
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
      ? `
        left: -6%;
        top: 0;
        z-index: 2;
        width: clamp(15.5rem, 52%, 20rem);
      `
      : `
        left: clamp(3.5rem, 16%, 6rem);
        right: 0;
        bottom: -12%;
        z-index: 1;
        width: min(91%, 31rem);
        opacity: 0.95;
      `}

  @media (max-width: 560px) {
    ${({ $variant }) =>
      $variant === "pin"
        ? `
          width: min(48%, 12rem);
        `
        : `
          left: 2.25rem;
          width: 95%;
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
  color: #171717;

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
    color: #171717;
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
  font-size: 0.92rem;
  line-height: 1.8;
`;