import React, { useEffect, useRef } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { bmiMilestones } from "../data/bmiData.js";
import useActiveTimelineMilestone from "./useActiveTimelineMilestone.js";
import {
  BackgroundImg,
  BackgroundLayer,
  BulletItem,
  BulletList,
  CheckIconWrapper,
  ContentArea,
  ContentBox,
  FixedGradientOverlay,
  FullHeightVerticalLine,
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

const ITEM_STEP_HEIGHT_REM = 5.2; // 2.0rem item height + 3.2rem gap

const BmiMilestones = () => {
  const {
    activeMilestone,
    activeMilestoneIndex,
    containerRef,
    goToMilestone,
    nextMilestone,
  } = useActiveTimelineMilestone(bmiMilestones);

  const itemRefs = useRef([]);

  useEffect(() => {
    if (window.innerWidth <= 768 && itemRefs.current[activeMilestoneIndex]) {
      itemRefs.current[activeMilestoneIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeMilestoneIndex]);

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

  // Position active item at the 2nd dot (offset by 1 step from top)
  const trackTranslateY = -((activeMilestoneIndex - 1) * ITEM_STEP_HEIGHT_REM);

  return (
    <MilestonesSection ref={containerRef}>
      <BackgroundLayer>
        {bmiMilestones.map((item, idx) => (
          <BackgroundImg
            key={item.bgImage || idx}
            src={item.bgImage || `/images/bmi/nogradient/bmi${idx + 1}.svg`}
            alt=""
            aria-hidden="true"
            $active={idx === activeMilestoneIndex}
          />
        ))}
      </BackgroundLayer>

      <FixedGradientOverlay />


      <FullHeightVerticalLine />

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
          <TimelineTrack $translateY={trackTranslateY}>
            {bmiMilestones.map((item, idx) => {
              const isActive = idx === activeMilestoneIndex;
              return (
                <TimelineYearItem
                  key={item.year || idx}
                  ref={(el) => (itemRefs.current[idx] = el)}
                  onClick={() => goToMilestone(idx)}
                  title={`Select ${item.year}`}
                  $active={isActive}
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
