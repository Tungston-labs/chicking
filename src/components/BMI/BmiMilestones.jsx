import { PageSection } from "../Layout/PageLayout.jsx";
import bmiImages from "../../assets/images/bmiImages.js";
import { bmiMilestones } from "./data/bmiData.js";
import { PiArrowFatLinesRightFill } from "react-icons/pi";

import {
  BrandStamp,
  MilestonesGrid,
  MilestonesHeading,
  MilestonesIntro,
  MilestonesSection,
  MilestonesText,
  MilestoneVisual,
  Timeline,
  TimelineDescription,
  TimelineGroup,
  TimelineItemIcon,
  TimelineItem,
  TimelineList,
  TimelineScrollArea,
  TimelineYearHeader,
  TimelineYearIcon,
  TimelineYear,
} from "./BmiMilestones.styles.js";

const BmiMilestones = () => (
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
            <img src={bmiImages.top} alt="Chicking menu showcase" />
          </MilestoneVisual>
        </MilestonesIntro>

        <Timeline>
          <TimelineScrollArea>
            {bmiMilestones.map((milestone) => (
              <TimelineGroup key={milestone.year}>
                <TimelineYearHeader>
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

export default BmiMilestones;
