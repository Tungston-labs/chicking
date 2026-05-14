import styled from "styled-components";

export const MilestonesSection = styled.section`
  padding: 3.5rem 0 4rem;
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

  strong {
    font-weight: 700;
  }
`;

export const MilestonesText = styled.p`
  margin: 0.8rem 0 0;
  color: #555555;
  font-size: 0.96rem;
  line-height: 1.7;
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
  position: relative;
  min-width: 0;
  padding-left: 1.5rem;

  &::before {
    content: "";
    position: absolute;
    left: 0.35rem;
    top: 0.25rem;
    bottom: 0.25rem;
    width: 1px;
    background: rgba(243, 146, 0, 0.35);
  }

  @media (max-width: 768px) {
    padding-left: 1.2rem;
  }
`;

export const TimelineGroup = styled.article`
  position: relative;
  padding: 0 0 1.6rem 1rem;

  &::before {
    content: "";
    position: absolute;
    left: -1.15rem;
    top: 0.2rem;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: #f39200;
    box-shadow: 0 0 0 0.28rem rgba(243, 146, 0, 0.14);
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export const TimelineYear = styled.h3`
  margin: 0;
  color: #171717;
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 700;
`;

export const TimelineList = styled.ul`
  margin: 0.8rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.6rem;
`;

export const TimelineItem = styled.li`
  position: relative;
  padding-left: 1rem;
  color: #626262;
  font-size: 0.92rem;
  line-height: 1.65;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.55rem;
    width: 0.38rem;
    height: 0.38rem;
    border-radius: 50%;
    background: #891b1c;
  }
`;
