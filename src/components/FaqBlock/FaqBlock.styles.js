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
        left: 0;
        top: 0;
        z-index: 2;
        width: clamp(9.5rem, 42%, 16rem);
      `
      : `
        left: clamp(3.5rem, 16%, 6rem);
        right: 0;
        bottom: 0;
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

export const FaqQuestion = styled.details`
  border-radius: 0;
  background: #fff8e9;
  color: #171717;
  overflow: hidden;
  transition:
    background 0.25s ease,
    box-shadow 0.25s ease;

  &[open] {
    background: #ffffff;
    box-shadow: 0 0.8rem 1.85rem rgba(78, 49, 17, 0.08);
  }

  &[open] svg {
    transform: rotate(45deg);
  }
`;

export const FaqSummary = styled.summary`
  min-height: clamp(2.85rem, 4.4vw, 3.45rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 1.4rem;
  cursor: pointer;
  font-size: clamp(0.86rem, 1vw, 0.98rem);
  font-weight: 700;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }

  svg {
    flex: 0 0 auto;
    width: 0.72rem;
    height: 0.72rem;
    color: #171717;
    transition: transform 0.25s ease;
  }
`;

export const FaqAnswer = styled.p`
  margin: 0;
  padding: 0 1.4rem 1.15rem;
  color: #5f5f5f;
  font-size: 0.92rem;
  line-height: 1.7;
`;
