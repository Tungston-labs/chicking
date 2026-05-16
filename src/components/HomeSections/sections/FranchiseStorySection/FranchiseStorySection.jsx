import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SharedBanner from "../../../SharedBanner/SharedBanner.jsx";
import {
  CarouselArrow,
  CarouselDots,
  DotButton,
  SidePreview,
  StoryCard,
  StoryCardShell,
  StoryCardCopy,
  StoryCardMeta,
  StoryFlag,
  StoryImage,
  StoryImagePanel,
  StorySlider,
  StoryStage,
  StoryText,
} from "./FranchiseStorySection.styles.js";
import { stories } from "../../data/homeSectionsData.js";
import FranchiseStorySectionContent from "./FranchiseStorySection.content.jsx";
import useFranchiseStorySlider from "./useFranchiseStorySlider.js";

const FranchiseStorySection = () => {
  const {
    activeStory,
    nextStory,
    previousStory,
    slideDirection,
    story,
    goToNextStory,
    goToPreviousStory,
    goToStory,
  } = useFranchiseStorySlider(stories);

  return (
    <SharedBanner
      background="#891B1C"
      description={<FranchiseStorySectionContent />}
      edgeColor="#ffffff"
      title={
        <>
          <span>
            Franchise <strong>Success</strong> Story
          </span>
        </>
      }
    >
      <StorySlider>
        <SidePreview
          key={`previous-${previousStory.image}`}
          $position="left"
          $direction={slideDirection}
        >
          <StoryImage src={previousStory.image} alt="" />
          <CarouselArrow
            type="button"
            $position="left"
            aria-label="Show previous success story"
            onClick={goToPreviousStory}
          >
            <FiArrowLeft aria-hidden="true" />
          </CarouselArrow>
        </SidePreview>
        <SidePreview
          key={`next-${nextStory.image}`}
          $position="right"
          $direction={slideDirection}
        >
          <StoryFlag />
          <StoryText>{nextStory.text}</StoryText>
          <StoryCardMeta>
            <strong>{nextStory.author}</strong>
            <span>{nextStory.location}</span>
          </StoryCardMeta>
          <CarouselArrow
            type="button"
            $position="right"
            aria-label="Show next success story"
            onClick={goToNextStory}
          >
            <FiArrowRight aria-hidden="true" />
          </CarouselArrow>
        </SidePreview>

        <StoryStage key={story.image} $direction={slideDirection}>
          <StoryCardShell>
            <CarouselArrow
              type="button"
              $placement="stage"
              $position="left"
              aria-label="Show previous success story"
              onClick={goToPreviousStory}
            >
              <FiArrowLeft aria-hidden="true" />
            </CarouselArrow>
            <StoryCard>
              <StoryCardCopy $direction={slideDirection}>
                <StoryFlag />
                <StoryText>{story.text}</StoryText>
                <StoryCardMeta>
                  <strong>{story.author}</strong>
                  <span>{story.location}</span>
                </StoryCardMeta>
              </StoryCardCopy>
              <StoryImagePanel $direction={slideDirection}>
                <StoryImage src={story.image} alt="" />
              </StoryImagePanel>
            </StoryCard>
            <CarouselArrow
              type="button"
              $placement="stage"
              $position="right"
              aria-label="Show next success story"
              onClick={goToNextStory}
            >
              <FiArrowRight aria-hidden="true" />
            </CarouselArrow>
          </StoryCardShell>
        </StoryStage>

        <CarouselDots aria-label="Select success story">
          {stories.map((item, index) => (
            <DotButton
              key={item.image}
              type="button"
              $active={index === activeStory}
              aria-label={`Show success story ${index + 1}`}
              aria-pressed={index === activeStory}
              onClick={() => goToStory(index)}
            />
          ))}
        </CarouselDots>
      </StorySlider>
    </SharedBanner>
  );
};

export default FranchiseStorySection;
