import { PiArrowFatLinesRightFill } from "react-icons/pi";

import bmiImages from "../../../assets/images/bmiImages.js";
import { PageSection } from "../../Layout/PageLayout.jsx";
import { bmiMilestones } from "../data/bmiData.js";
import useActiveTimelineMilestone from "./useActiveTimelineMilestone.js";
import {
  BrandStamp,
  MilestonesGrid,
  MilestonesHeading,
  MilestonesIntro,
  MilestonesSection,
  MilestonesText,
  MilestoneVisual,
  MilestoneVisualImage,
  Timeline,
  TimelineDescription,
  TimelineGroup,
  TimelineItem,
  TimelineItemIcon,
  TimelineList,
  TimelineScrollArea,
  TimelineYear,
  TimelineYearHeader,
  TimelineYearIcon,
} from "./BmiMilestones.styles.js";

const BmiMilestones = () => {
  const {
    activeMilestone,
    setTimelineYearHeaderRef,
    timelineScrollAreaRef,
  } = useActiveTimelineMilestone(bmiMilestones);

  return (
    <MilestonesSection>
      <PageSection>
        <BrandStamp>
          <img src={bmiImages.logo} alt="Chicking" />
        </BrandStamp>

        <MilestonesGrid>
          <MilestonesIntro>
            <MilestonesHeading>
              Key Brand <strong>Milestones</strong>
            </MilestonesHeading>

            <MilestonesText>
              Chicking&apos;s journey has been shaped by disciplined expansion,
              recognizable product appeal, and a business model designed for
              durability.
            </MilestonesText>

            <MilestoneVisual>
              <MilestoneVisualImage
                key={`${activeMilestone.year}-${activeMilestone.image}`}
                src={activeMilestone.image}
                alt={`${activeMilestone.year} milestone visual`}
              />
            </MilestoneVisual>
          </MilestonesIntro>

          <Timeline>
            <TimelineScrollArea ref={timelineScrollAreaRef}>
              {bmiMilestones.map((milestone, index) => (
                <TimelineGroup key={`${milestone.year}-${index}`}>
                  <TimelineYearHeader ref={setTimelineYearHeaderRef(index)}>
                    <TimelineYearIcon aria-hidden="true">
                      <PiArrowFatLinesRightFill />
                    </TimelineYearIcon>
                    <TimelineYear>{milestone.year}</TimelineYear>
                  </TimelineYearHeader>
                  {milestone.description ? (
                    <TimelineDescription>{milestone.description}</TimelineDescription>
                  ) : null}
                  <TimelineList>
                    {milestone.items.map((item) => (
                      <TimelineItem key={item}>
                        <TimelineItemIcon
                          src={bmiImages.tickRow}
                          alt=""
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </TimelineItem>
                    ))}
                  </TimelineList>
                </TimelineGroup>
              ))}
            </TimelineScrollArea>
          </Timeline>
        </MilestonesGrid>
      </PageSection>
    </MilestonesSection>
  );
};

export default BmiMilestones;
