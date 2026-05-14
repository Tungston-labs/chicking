import styled, { keyframes } from "styled-components";

const slideFromRight = keyframes`
  from {
    opacity: 0.68;
    transform: translateX(2.6rem) scale(0.985);
  }

  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

const slideFromLeft = keyframes`
  from {
    opacity: 0.68;
    transform: translateX(-2.6rem) scale(0.985);
  }

  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

const previewFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(2rem);
  }

  to {
    opacity: 0.72;
    transform: translateX(0);
  }
`;

const previewFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2rem);
  }

  to {
    opacity: 0.72;
    transform: translateX(0);
  }
`;

export const StorySlider = styled.div`
  position: relative;
  width: 100vw;
  min-height: 31rem;
  margin-left: calc(50% - 50vw);
  padding: 0 0 4.5rem;

  @media (max-width: 1023px) {
    width: 100%;
    min-height: auto;
    margin-left: 0;
    padding: 0 0 3.5rem;
  }
`;

export const StoryStage = styled.div`
  position: relative;
  z-index: 2;
  width: clamp(42rem, 63.5vw, 52rem);
  margin: 0 auto;
  animation: ${({ $direction }) =>
      $direction === "previous" ? slideFromLeft : slideFromRight}
    680ms cubic-bezier(0.22, 1, 0.36, 1) both;
  will-change: opacity, transform;

  @media (max-width: 1023px) {
    width: min(100%, 44rem);
  }
`;

export const StoryCard = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 0.92fr;
  min-height: 25.75rem;
  overflow: hidden;
  border-radius: 1.2rem;
  background: #ffffff;
  box-shadow: 0 1.6rem 4.5rem rgba(0, 0, 0, 0.22);

  @media (max-width: 1023px) {
    grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
    min-height: 18.5rem;
    border-radius: 1rem;
  }
`;

export const StoryCardCopy = styled.div`
  display: flex;
  flex-direction: column;
  padding: clamp(2.2rem, 4.2vw, 3.5rem) clamp(1.8rem, 4vw, 3rem);

  @media (max-width: 1023px) {
    padding: 1.35rem 1rem 1.15rem 3.25rem;
  }
`;

export const StoryFlag = styled.span`
  display: inline-flex;
  width: 2.25rem;
  height: 1.42rem;
  margin-bottom: 2.4rem;
  border-radius: 0.12rem;
  overflow: hidden;
  flex: 0 0 auto;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);

  &::before {
    content: "";
    width: 32%;
    background:
      linear-gradient(
        180deg,
        #009a44 0 33.33%,
        #ffffff 33.33% 66.66%,
        #000000 66.66% 100%
      );
  }

  &::after {
    content: "";
    flex: 1;
    background: #ffffff;
    border-left: 0.8rem solid #d71920;
  }
`;

export const StoryText = styled.p`
  margin: 0;
  color: #121d35;
  font-size: clamp(0.95rem, 1.35vw, 1.08rem);
  font-weight: 500;
  line-height: 1.65;

  @media (max-width: 1023px) {
    font-size: 0.82rem;
    line-height: 1.45;
  }
`;

export const StoryCardMeta = styled.p`
  margin: auto 0 0;
  padding-top: 2rem;
  color: #121d35;
  font-size: 0.72rem;
  line-height: 1.5;

  strong,
  span {
    display: block;
  }

  strong {
    font-size: 0.82rem;
    font-weight: 800;
  }

  span {
    font-weight: 700;
  }

  @media (max-width: 1023px) {
    padding-top: 0.85rem;
    font-size: 0.64rem;
  }
`;

export const StoryImagePanel = styled.div`
  min-height: 100%;
  overflow: hidden;
`;

export const StoryImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 18rem;
  display: block;
  object-fit: cover;

  @media (max-width: 1023px) {
    min-height: 15rem;
  }
`;

export const SidePreview = styled.article`
  position: absolute;
  top: 2.45rem;
  z-index: 1;
  width: clamp(8.8rem, 14.75vw, 16rem);
  height: 20.75rem;
  overflow: visible;
  border-radius: 0 0.85rem 0.85rem 0;
  background: rgba(255, 255, 255, 0.68);
  color: #121d35;
  opacity: 0.72;
  animation: ${({ $direction }) =>
      $direction === "previous" ? previewFromLeft : previewFromRight}
    680ms cubic-bezier(0.22, 1, 0.36, 1) both;
  will-change: opacity, transform;

  ${({ $position }) =>
    $position === "left"
      ? `
        left: 0;
      `
      : `
        right: 0;
        padding: 2.5rem 2rem;
        border-radius: 0.85rem 0 0 0.85rem;
      `}

  > ${StoryImage} {
    border-radius: inherit;
  }

  ${StoryFlag} {
    margin-bottom: 1.9rem;
  }

  ${StoryText} {
    max-height: 8.25rem;
    overflow: hidden;
    font-size: 0.82rem;
    line-height: 1.55;
  }

  ${StoryCardMeta} {
    padding-top: 1.2rem;
    font-size: 0.58rem;
  }

  ${StoryCardMeta} strong {
    font-size: 0.65rem;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const CarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  z-index: 5;

  width: 2.25rem;
  height: 2.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 50%;

  background: rgba(91, 36, 48, 0.82);
  color: #fff;
  box-shadow: 0 0.65rem 1.4rem rgba(46, 13, 20, 0.2);

  cursor: pointer;

  transform: translateY(-50%);
  transition:
    background 0.28s ease,
    box-shadow 0.28s ease,
    transform 0.28s ease;

  ${({ $placement, $position }) =>
    $placement === "card"
      ? $position === "left"
        ? `
          left: 0.9rem;
          right: auto;
        `
        : `
          right: 0.9rem;
          left: auto;
        `
      : $position === "left"
        ? `
          right: -0.98rem;
        `
        : `
          left: -0.98rem;
        `}

  &:hover {
    background: #54e1e8;
    box-shadow: 0 0.9rem 1.6rem rgba(46, 13, 20, 0.26);
    transform: translateY(calc(-50% - 1px)) scale(1.04);
     width: 2.75rem;
  height: 2.75rem;
  }

  &:active {
    transform: translateY(-50%) scale(0.96);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.9);
    outline-offset: 3px;
  }

  svg {
    width: 1rem;
    height: 1rem;
    stroke-width: 2.1;
  }

  @media (max-width: 1023px) {
    ${({ $placement }) =>
      $placement === "card"
        ? `
          display: inline-flex;
          width: 2rem;
          height: 2rem;
        `
        : `
          display: none;
        `}
  }

  @media (min-width: 1023px) {
    ${({ $placement }) =>
      $placement === "card"
        ? `
          display: none;
        `
        : ""}
  }

  @media (max-width: 1024px) {
    ${({ $placement, $position }) =>
      $placement === "card"
        ? $position === "left"
          ? `
            left: 0.4rem;
          `
          : `
            right: 0.4rem;
          `
        : ""}

    svg {
      width: 0.9rem;
      height: 0.9rem;
    }
  }
`;

export const CarouselDots = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transform: translateX(-50%);
`;

export const DotButton = styled.button`
  width: ${({ $active }) => ($active ? "2rem" : "0.48rem")};
  height: 0.48rem;
  border: 0;
  border-radius: 999rem;
  background: ${({ $active }) => ($active ? "#f39200" : "#ffffff")};
  cursor: pointer;
  transition:
    background 0.28s ease,
    transform 0.28s ease,
    width 0.28s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.9);
    outline-offset: 4px;
  }
`;
