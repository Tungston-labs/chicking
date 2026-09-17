import styled, { keyframes } from "styled-components";

const fadeInBg = keyframes`
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
`;

const fadeInContent = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MilestonesSection = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 75px);
  min-height: 580px;
  max-height: 850px;
  background-color: #891b1c;
  overflow: hidden;
  color: #ffffff;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    animation: ${fadeInBg} 0.4s ease-in-out;
  }
`;

export const HeaderOverlay = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.25rem 4rem 0.5rem;
  pointer-events: none;

  @media (max-width: 1024px) {
    padding: 1.75rem 2.5rem 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem 1.25rem 0.5rem;
  }
`;

export const KeyBrandTitle = styled.h2`
  margin: 0;
  font-size: clamp(1.1rem, 1.8vw, 1.45rem);
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
  font-size: clamp(1.1rem, 1.8vw, 1.35rem);
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

export const MainContainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex: 1;
  width: 100%;
  padding: 0 4rem 1.5rem;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 0 2.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1.25rem 1rem;
    align-items: flex-start;
  }
`;

export const TimelineSidebar = styled.aside`
  width: 290px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 15;

  @media (max-width: 1024px) {
    width: 230px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const TimelineTrack = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-left: 0.5rem;

  &::before {
    content: "";
    position: absolute;
    left: 150px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: #f39200;
  }

  @media (max-width: 1024px) {
    gap: 0.65rem;
    padding-left: 0;

    &::before {
      left: 118px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
    padding-left: 0;
    padding-bottom: 0.5rem;
    gap: 0.75rem;
    scrollbar-width: thin;
    scrollbar-color: #f39200 transparent;

    &::before {
      display: none;
    }
  }
`;

export const TimelineYearItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding: 1rem 0.05rem;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;
  }
`;

export const YearText = styled.span`
  width: 140px;
  white-space: nowrap;
  text-align: right;
  padding-right: 1.25rem;
  font-size: ${(props) => (props.$active ? "1.5rem" : "0.9rem")};
  font-weight: ${(props) => (props.$active ? "800" : "600")};
  color: ${(props) => (props.$active ? "#ffffff" : "rgba(255, 255, 255, 0.55)")};
  transition: all 0.25s ease;

  @media (max-width: 1024px) {
    width: 110px;
    padding-right: 1rem;
    font-size: ${(props) => (props.$active ? "1.2rem" : "0.85rem")};
  }

  @media (max-width: 768px) {
    width: auto;
    text-align: center;
    padding-right: 0;
    font-size: ${(props) => (props.$active ? "1.1rem" : "0.85rem")};
  }
`;

export const TimelineDot = styled.div`
  position: relative;
  z-index: 2;
  width: ${(props) => (props.$active ? "22px" : "10px")};
  height: ${(props) => (props.$active ? "22px" : "10px")};
  border-radius: 50%;
  background: ${(props) => (props.$active ? "#ffffff" : "rgba(255, 255, 255, 0.5)")};
  box-shadow: ${(props) => (props.$active ? "0 0 0 8px rgba(255, 255, 255, 0.22)" : "none")};
  transition: all 0.25s ease;
  transform: ${(props) => (props.$active ? "translateX(-6px)" : "translateX(0px)")};

  @media (max-width: 1024px) {
    transform: ${(props) => (props.$active ? "translateX(-6px)" : "translateX(0px)")};
  }

  @media (max-width: 768px) {
    transform: none;
    margin-top: 0.25rem;
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4.5rem;
  max-width: 720px;

  @media (max-width: 1024px) {
    padding-left: 2.5rem;
  }

  @media (max-width: 768px) {
    padding-left: 0;
    max-width: 100%;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeInContent} 0.35s ease-out;
`;

export const MilestoneTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.25rem, 2.5vw, 2.5rem);
  font-weight: 800;
  line-height: 1.15;
  color: #ffffff;

  span.highlight {
    color: #f39200;
  }
`;

export const MilestoneDescription = styled.p`
  margin: 1.1rem 0 0;
  font-size: clamp(0.9rem, 1.15vw, 1.05rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.92);
  max-width: 720px;
`;

export const MilestoneIntro = styled.h4`
  margin: 1.5rem 0 0.85rem;
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
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
  gap: 0.75rem;
  max-width: 700px;
`;

export const BulletItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  font-size: clamp(0.88rem, 1.05vw, 1rem);
  line-height: 1.45;
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
  bottom: 1.75rem;
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
  transition: transform 0.25s ease, opacity 0.25s ease;

  &:hover {
    transform: translateY(3px);
  }

  span {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #f39200;
  }

  svg {
    font-size: 1.3rem;
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
