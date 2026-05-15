import styled from "styled-components";

export const MilestonesSection = styled.section`
  padding: 2.5rem 0 2rem;
  background: #ffffff;

  @media (max-width: 768px) {
    padding: 2.75rem 0 3rem;
  }
`;

export const BrandStamp = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  img {
    width: 5.5rem;
    height: auto;
    display: block;
  }
`;

export const MilestonesGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;

  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 1.4rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const MilestonesIntro = styled.div`
  min-width: 0;
`;

export const MilestonesHeading = styled.h2`
  margin: 0;
  color: #181818;
  font-size: clamp(1.55rem, 2.2vw, 2.2rem);
  line-height: 1.18;
  font-weight: 400;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.45rem;
  }

  strong {
    font-weight: 700;
  }
`;

export const MilestonesText = styled.p`
  margin: 0.8rem 0 0;
  color: #555555;
  font-size: 0.96rem;
  line-height: 1.7;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.92rem;
    line-height: 1.65;
  }

  @media (max-width: 767px) {
    font-size: 0.92rem;
    line-height: 1.65;
  }
`;

export const MilestoneVisual = styled.div`
  margin-top: 1.8rem;
  border-radius: 1.1rem;
  overflow: hidden;
  background: linear-gradient(180deg, #fff7ef 0%, #ffffff 100%);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const Timeline = styled.div`
  --timeline-line-x: 0.35rem;
  --timeline-year-icon-size: clamp(1.45rem, 2.3vw, 1.85rem);
  --timeline-year-gap: clamp(0.7rem, 1.3vw, 0.95rem);

  position: relative;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
  padding-left: 1.5rem;

  &::before {
    content: "";
    position: absolute;
    left: var(--timeline-line-x);
    top: 0.25rem;
    bottom: 0.25rem;
    width: 1px;
    background: rgba(243, 146, 0, 0.35);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    --timeline-year-icon-size: clamp(1.35rem, 2.8vw, 1.65rem);
    --timeline-year-gap: 0.8rem;
  }

  @media (max-width: 768px) {
    --timeline-year-icon-size: 1.35rem;
    --timeline-year-gap: 0.72rem;
    padding-left: 1.2rem;
  }
`;

export const TimelineScrollArea = styled.div`
  max-height: 39rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 0.85rem;

  scrollbar-width: none;

  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    max-height: 34rem;
  }

  @media (max-width: 767px) {
    max-height: 30rem;
    padding-right: 0.55rem;
  }
`;
export const TimelineGroup = styled.article`
  --timeline-group-indent: 1rem;

  position: relative;
  min-width: 0;
  padding: 0 0 1.8rem var(--timeline-group-indent);

  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    --timeline-group-indent: 0.85rem;
  }
`;

export const TimelineYearHeader = styled.div`
  display: grid;
  grid-template-columns: var(--timeline-year-icon-size) minmax(0, 1fr);
  align-items: start;
  gap: var(--timeline-year-gap);
  margin-left: calc(var(--timeline-line-x) - var(--timeline-group-indent));
`;

export const TimelineYearIcon = styled.span`
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: var(--timeline-year-icon-size);
  height: var(--timeline-year-icon-size);
  color: #f39200;
  transform: translateY(0.08rem);

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const TimelineYear = styled.h3`
  margin: 0;
  color: #171717;
  font-size: 1.08rem;
  line-height: 1.3;
  font-weight: 700;
  overflow-wrap: anywhere;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 767px) {
    font-size: 0.98rem;
  }
`;

export const TimelineDescription = styled.p`
  margin: 0.7rem 0 0
    calc(var(--timeline-year-icon-size) + var(--timeline-year-gap));
  color: #383838;
  font-size: 0.96rem;
  line-height: 1.7;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.92rem;
    line-height: 1.65;
  }

  @media (max-width: 767px) {
    font-size: 0.92rem;
    line-height: 1.65;
  }
`;

export const TimelineList = styled.ul`
  margin: 0.8rem 0 0
    calc(var(--timeline-year-icon-size) + var(--timeline-year-gap));
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.7rem;
`;

export const TimelineItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 0.65rem;
  color: #626262;
  font-size: 0.92rem;
  line-height: 1.65;
  overflow-wrap: anywhere;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.92rem;
    line-height: 1.65;
  }

  @media (max-width: 767px) {
    font-size: 0.92rem;
    line-height: 1.65;
  }
`;

export const TimelineItemIcon = styled.img`
  width: 1rem;
  height: 1rem;
  display: block;
  margin-top: 0.28rem;
  flex: 0 0 auto;
`;
