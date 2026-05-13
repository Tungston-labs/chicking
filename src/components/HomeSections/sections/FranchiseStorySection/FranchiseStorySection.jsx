import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SharedBanner from "../../../SharedBanner/SharedBanner.jsx";
import {
  CarouselArrow,
  CarouselDots,
  DotButton,
  SidePreview,
  StoryCard,
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

const getStoryIndex = (index) => {
  if (index < 0) {
    return stories.length - 1;
  }

  if (index >= stories.length) {
    return 0;
  }

  return index;
};

const FranchiseStorySection = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");
  const story = stories[activeStory];
  const previousStory = stories[getStoryIndex(activeStory - 1)];
  const nextStory = stories[getStoryIndex(activeStory + 1)];

  const goToPreviousStory = () => {
    setSlideDirection("previous");
    setActiveStory((current) => getStoryIndex(current - 1));
  };

  const goToNextStory = () => {
    setSlideDirection("next");
    setActiveStory((current) => getStoryIndex(current + 1));
  };

  const goToStory = (index) => {
    if (index === activeStory) {
      return;
    }

    setSlideDirection(index > activeStory ? "next" : "previous");
    setActiveStory(index);
  };

  return (
    <SharedBanner
      background="#891B1C"
      description="Starting with one outlet, this franchise partner expanded into multiple locations through strong brand support, operational excellence, and high customer demand."
      edgeColor="#ffffff"
      title={
        <>
          Franchise <strong>Success</strong> Story
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
          <StoryCard>
            <StoryCardCopy>
              <StoryFlag />
              <StoryText>{story.text}</StoryText>
              <StoryCardMeta>
                <strong>{story.author}</strong>
                <span>{story.location}</span>
              </StoryCardMeta>
            </StoryCardCopy>
            <StoryImagePanel>
              <StoryImage src={story.image} alt="" />
            </StoryImagePanel>
          </StoryCard>
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
