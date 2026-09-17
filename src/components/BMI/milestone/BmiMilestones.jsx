import React from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { bmiMilestones } from "../data/bmiData.js";
import useActiveTimelineMilestone from "./useActiveTimelineMilestone.js";
import {
  BackgroundLayer,
  BulletItem,
  BulletList,
  CheckIconWrapper,
  ContentArea,
  ContentBox,
  HeaderOverlay,
  KeyBrandTitle,
  MainContainer,
  MilestoneDescription,
  MilestoneIntro,
  MilestonesSection,
  MilestoneTitle,
  ScrollIndicator,
  StepCounter,
  TimelineDot,
  TimelineSidebar,
  TimelineTrack,
  TimelineYearItem,
  YearText,
} from "./BmiMilestones.styles.js";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <path
      d="M8.5 12.5L11 15L15.5 9.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BmiMilestones = () => {
  const {
    activeMilestone,
    activeMilestoneIndex,
    containerRef,
    goToMilestone,
    nextMilestone,
  } = useActiveTimelineMilestone(bmiMilestones);

  const isLastSlide = activeMilestoneIndex === bmiMilestones.length - 1;

  const handleScrollClick = () => {
    if (isLastSlide) {
      goToMilestone(0);
    } else {
      nextMilestone();
    }
  };

  const activeCounter = activeMilestone.counter || "01/11";
  const [activeNum, totalNum] = activeCounter.split("/");

  return (
    <MilestonesSection ref={containerRef}>
      <BackgroundLayer>
        <img
          key={activeMilestone.bgImage || activeMilestoneIndex}
          src={activeMilestone.bgImage || "/images/bmi/bmi1.svg"}
          alt=""
          aria-hidden="true"
        />
      </BackgroundLayer>

      <HeaderOverlay>
        <KeyBrandTitle>
          KEY <strong>BRAND</strong> MILESTONES
        </KeyBrandTitle>
        <StepCounter>
          <span className="active-num">{activeNum}</span>
          <span className="total-num">/{totalNum}</span>
        </StepCounter>
      </HeaderOverlay>

      <MainContainer>
        <TimelineSidebar>
          <TimelineTrack>
            {bmiMilestones.map((item, index) => {
              const isActive = index === activeMilestoneIndex;
              return (
                <TimelineYearItem
                  key={`${item.year}-${index}`}
                  onClick={() => goToMilestone(index)}
                  title={`Select ${item.year}`}
                >
                  <YearText $active={isActive}>{item.year}</YearText>
                  <TimelineDot $active={isActive} />
                </TimelineYearItem>
              );
            })}
          </TimelineTrack>
        </TimelineSidebar>

        <ContentArea>
          <ContentBox key={activeMilestoneIndex}>
            <MilestoneTitle>
              {activeMilestone.titlePrefix}
              {activeMilestone.highlightWord ? (
                <span className="highlight">{activeMilestone.highlightWord}</span>
              ) : null}
              {activeMilestone.titleSuffix}
            </MilestoneTitle>

            {activeMilestone.description ? (
              <MilestoneDescription>{activeMilestone.description}</MilestoneDescription>
            ) : null}

            {activeMilestone.intro ? (
              <MilestoneIntro>{activeMilestone.intro}</MilestoneIntro>
            ) : null}

            {activeMilestone.items && activeMilestone.items.length > 0 ? (
              <BulletList>
                {activeMilestone.items.map((bullet, bulletIdx) => (
                  <BulletItem key={`${bulletIdx}-${bullet}`}>
                    <CheckIconWrapper>
                      <CheckIcon />
                    </CheckIconWrapper>
                    <span>{bullet}</span>
                  </BulletItem>
                ))}
              </BulletList>
            ) : null}
          </ContentBox>
        </ContentArea>
      </MainContainer>

      <ScrollIndicator onClick={handleScrollClick} aria-label="Scroll milestones">
        {isLastSlide ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
        <span>SCROLL</span>
      </ScrollIndicator>
    </MilestonesSection>
  );
};

export default BmiMilestones;
