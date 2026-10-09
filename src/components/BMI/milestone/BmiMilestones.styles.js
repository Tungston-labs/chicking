import styled, { keyframes } from "styled-components";

const smoothSlowFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bgSlowFadeIn = keyframes`
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
`;

export const MilestonesSection = styled.section`
  --container-pad-left: 9.5rem;
  --year-col-width: 16.75rem;
  --dot-col-width: 2.75rem;

  position: relative;
  width: 100%;
  height: calc(100vh - 75px);
  min-height: 640px;
  max-height: 860px;
  background: #891b1c;
  overflow: hidden;
  color: #ffffff;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    --container-pad-left: 6rem;
  }

  @media (max-width: 1200px) {
    --container-pad-left: 4.5rem;
  }

  @media (max-width: 1024px) {
    --container-pad-left: 2.5rem;
    --year-col-width: 12.625rem;
  }

  @media (max-width: 768px) {
    --container-pad-left: 1.25rem;
    height: auto;
    min-height: auto;
    max-height: none;
    padding-bottom: 2rem;
  }
`;

export const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`;

export const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
  display: block;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition: opacity 0.65s cubic-bezier(0.25, 1, 0.5, 1);
  will-change: opacity;
`;

export const FixedGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    #891b1c 0%,
    #891b1c 34%,
    rgba(137, 27, 28, 0.9) 48%,
    rgba(137, 27, 28, 0.6) 65%,
    rgba(20, 5, 5, 0.45) 85%,
    rgba(0, 0, 0, 0.4) 100%
  );
`;

export const HeaderOverlay = styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.25rem 4rem 1rem;
  pointer-events: none;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    padding: 1.75rem 2.5rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem 1.25rem 0.5rem;
  }
`;

export const KeyBrandTitle = styled.h2`
  margin: 0;
  font-size: clamp(1.1rem, 1.6vw, 1.45rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ffffff;
  pointer-events: auto;

  strong {
    color: #f39200;
    font-weight: 800;
  }
`;

export const StepCounter = styled.div`
  font-size: clamp(1.1rem, 1.6vw, 1.35rem);
  font-weight: 700;
  letter-spacing: 0.05em;
  pointer-events: auto;

  .active-num {
    color: #f39200;
  }

  .total-num {
    color: rgba(255, 255, 255, 0.85);
    font-weight: 500;
  }
`;

export const FullHeightVerticalLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(var(--container-pad-left) + var(--year-col-width) + (var(--dot-col-width) / 2));
  transform: translateX(-50%);
  width: 2px;
  background: rgba(243, 146, 0, 0.85);
  z-index: 12;
  pointer-events: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainContainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex: 1;
  width: 100%;
  padding: 0 9.5rem 2rem var(--container-pad-left);
  align-items: flex-start;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 0 2.5rem 2rem var(--container-pad-left);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1.25rem 1rem;
  }
`;

export const TimelineSidebar = styled.aside`
  position: relative;
  width: calc(var(--year-col-width) + var(--dot-col-width));
  height: 100%;
  max-height: 560px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  z-index: 15;
  overflow: visible;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-height: none;
    margin-bottom: 1.25rem;
    overflow: hidden;
  }
`;

export const TimelineTrack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  transform: translateY(${(props) => props.$translateY || 0}rem);
  transition: transform 0.55s cubic-bezier(0.25, 1, 0.5, 1);

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    transform: none !important;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0.4rem 0.25rem 0.75rem;
    gap: 0.65rem;
    scrollbar-width: thin;
    scrollbar-color: #f39200 rgba(255, 255, 255, 0.2);
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: 4px;
      display: block;
    }
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.15);
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: #f39200;
      border-radius: 4px;
    }
  }
`;

export const TimelineYearItem = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: var(--year-col-width) var(--dot-col-width);
  align-items: center;
  gap: 0;
  cursor: pointer;
  user-select: none;
  height: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 0.45rem 0.85rem;
    border-radius: 20px;
    background: ${(props) => (props.$active ? "#f39200" : "rgba(255, 255, 255, 0.15)")};
    border: 1px solid ${(props) => (props.$active ? "#f39200" : "rgba(255, 255, 255, 0.25)")};
    box-shadow: ${(props) => (props.$active ? "0 2px 8px rgba(243, 146, 0, 0.4)" : "none")};
    transition: all 0.3s ease;
  }
`;

export const YearText = styled.span`
  text-align: right;
  white-space: nowrap;
  font-size: ${(props) => (props.$active ? "1.65rem" : "0.95rem")};
  font-weight: ${(props) => (props.$active ? "800" : "600")};
  color: ${(props) => (props.$active ? "#ffffff" : "rgba(255, 255, 255, 0.65)")};
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  padding-right: 1.75rem;

  @media (max-width: 1024px) {
    font-size: ${(props) => (props.$active ? "1.3rem" : "0.85rem")};
    padding-right: 1.15rem;
  }

  @media (max-width: 768px) {
    font-size: 0.825rem;
    font-weight: ${(props) => (props.$active ? "700" : "600")};
    color: ${(props) => (props.$active ? "#ffffff" : "rgba(255, 255, 255, 0.9)")};
    padding-right: 0;
    text-align: center;
  }
`;

export const TimelineDot = styled.div`
  justify-self: center;
  align-self: center;
  z-index: 2;
  width: ${(props) => (props.$active ? "1.25rem" : "0.9375rem")};
  height: ${(props) => (props.$active ? "1.25rem" : "0.9375rem")};
  border-radius: 50%;
  background: ${(props) => (props.$active ? "#ffffff" : "rgba(255, 255, 255, 0.6)")};
  box-shadow: ${(props) => (props.$active ? "0 0 0 0.625rem rgba(255, 255, 255, 0.25)" : "none")};
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 0.2rem;
  padding-left: 3.5rem;
  max-width: 800px;
  height: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding-left: 2rem;
    padding-top: 0.2rem;
  }

  @media (max-width: 768px) {
    padding-left: 0;
    padding-top: 0;
    max-width: 100%;
    height: auto;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  animation: ${smoothSlowFadeIn} 0.65s cubic-bezier(0.25, 1, 0.5, 1);
`;

export const MilestoneTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.5rem, 2.7vw, 2rem);
  font-weight: 800;
  line-height: 1.16;
  color: #ffffff;

  span.highlight {
    color: #f39200;
  }
`;

export const MilestoneDescription = styled.p`
  margin: 1.1rem 0 0;
  font-size: clamp(0.84rem, 0.9vw, 0.92rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.92);
  max-width: 680px;
`;

export const MilestoneIntro = styled.p`
  margin: 1.4rem 0 0.9rem;
  font-size: clamp(0.84rem, 0.9vw, 0.92rem);
  font-weight: 400;
  color: #fefdff;
  line-height: 1.4;
`;

export const BulletList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 680px;
`;

export const BulletItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  font-size: clamp(0.85rem, 0.98vw, 0.95rem);
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.95);
`;

export const CheckIconWrapper = styled.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    color: #ffffff;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
  }
`;

export const ScrollIndicator = styled.button`
  position: absolute;
  bottom: 2rem;
  right: 3.5rem;
  z-index: 20;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  color: #f39200;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: translateY(3px);
  }

  span {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #f39200;
  }

  svg {
    font-size: 1.35rem;
    color: #f39200;
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1.25rem;

    span {
      font-size: 0.6rem;
    }

    svg {
      font-size: 1rem;
    }
  }
`;

