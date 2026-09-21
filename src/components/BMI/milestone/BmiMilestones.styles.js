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
  position: relative;
  width: 100%;
  height: calc(100vh - 75px);
  min-height: 640px;
  max-height: 860px;
  background: transparent;
  overflow: hidden;
  color: #ffffff;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 768px) {
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left center;
    display: block;
    animation: ${bgSlowFadeIn} 0.7s cubic-bezier(0.25, 1, 0.5, 1);
  }
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
  left: 450px;
  width: 2px;
  background: rgba(243, 146, 0, 0.85);
  z-index: 12;
  pointer-events: none;

  @media (max-width: 1024px) {
    left: 280px;
  }

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
  padding: 0 9.5rem 2rem;
  align-items: flex-start;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 0 2.5rem 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1.25rem 1rem;
  }
`;

export const TimelineSidebar = styled.aside`
  position: relative;
  width: 296px;
  height: 100%;
  max-height: 560px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  z-index: 15;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 230px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-height: none;
    margin-bottom: 1rem;
    overflow: visible;
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
  transform: translateY(${(props) => props.$translateY || 0}px);
  transition: transform 0.55s cubic-bezier(0.25, 1, 0.5, 1);

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    transform: none;
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 0.5rem;
    gap: 0.85rem;
    scrollbar-width: thin;
    scrollbar-color: #f39200 transparent;
  }
`;

export const TimelineYearItem = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 268px 28px;
  align-items: center;
  gap: 0;
  cursor: pointer;
  user-select: none;
  height: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 202px 28px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;
    height: auto;
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
    font-size: ${(props) => (props.$active ? "1.1rem" : "0.85rem")};
    padding-right: 0;
  }
`;

export const TimelineDot = styled.div`
  justify-self: center;
  z-index: 2;
  width: ${(props) => (props.$active ? "26px" : "10px")};
  height: ${(props) => (props.$active ? "26px" : "10px")};
  border-radius: 50%;
  background: ${(props) => (props.$active ? "#ffffff" : "rgba(255, 255, 255, 0.6)")};
  box-shadow: ${(props) => (props.$active ? "0 0 0 10px rgba(255, 255, 255, 0.25)" : "none")};
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);

  @media (max-width: 768px) {
    margin-top: 0.25rem;
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
    padding-top: 0;
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
  font-size: clamp(2rem, 3.2vw, 2.65rem);
  font-weight: 800;
  line-height: 1.16;
  color: #ffffff;

  span.highlight {
    color: #f39200;
  }
`;

export const MilestoneDescription = styled.p`
  margin: 1.1rem 0 0;
  font-size: clamp(0.88rem, 1.05vw, 0.98rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.92);
  max-width: 680px;
`;

export const MilestoneIntro = styled.h4`
  margin: 1.4rem 0 0.9rem;
  font-size: clamp(0.92rem, 1.1vw, 1.02rem);
  font-weight: 600;
  color: #ffffff;
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

