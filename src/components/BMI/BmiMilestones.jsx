import SectionHeader from "../HomeSections/components/SectionHeader/index.jsx";
import { PageSection } from "../Layout/PageLayout.jsx";
import bmiImages from "../../assets/images/bmiImages.js";
import { bmiMilestones } from "./data/bmiData.js";
import {
  BrandStamp,
  MilestonesGrid,
  MilestonesHeading,
  MilestonesIntro,
  MilestonesSection,
  MilestonesText,
  MilestoneVisual,
  Timeline,
  TimelineGroup,
  TimelineItem,
  TimelineList,
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
          {bmiMilestones.map((milestone) => (
            <TimelineGroup key={milestone.year}>
              <TimelineYear>{milestone.year}</TimelineYear>
              <TimelineList>
                {milestone.items.map((item) => (
                  <TimelineItem key={item}>{item}</TimelineItem>
                ))}
              </TimelineList>
            </TimelineGroup>
          ))}
        </Timeline>
      </MilestonesGrid>
    </PageSection>
  </MilestonesSection>
);

export default BmiMilestones;
