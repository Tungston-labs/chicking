import { useState } from "react";

const getWrappedIndex = (index, length) => {
  if (index < 0) {
    return length - 1;
  }

  if (index >= length) {
    return 0;
  }

  return index;
};

const getSlideDirection = (currentIndex, nextIndex, length) => {
  const forwardDistance = (nextIndex - currentIndex + length) % length;
  const backwardDistance = (currentIndex - nextIndex + length) % length;

  return forwardDistance <= backwardDistance ? "next" : "previous";
};

const useFranchiseStorySlider = (items) => {
  const [activeStory, setActiveStory] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");

  const goToPreviousStory = () => {
    setSlideDirection("previous");
    setActiveStory((current) => getWrappedIndex(current - 1, items.length));
  };

  const goToNextStory = () => {
    setSlideDirection("next");
    setActiveStory((current) => getWrappedIndex(current + 1, items.length));
  };

  const goToStory = (index) => {
    if (index === activeStory) {
      return;
    }

    setSlideDirection(getSlideDirection(activeStory, index, items.length));
    setActiveStory(index);
  };

  return {
    activeStory,
    nextStory: items[getWrappedIndex(activeStory + 1, items.length)],
    previousStory: items[getWrappedIndex(activeStory - 1, items.length)],
    slideDirection,
    story: items[activeStory],
    goToNextStory,
    goToPreviousStory,
    goToStory,
  };
};

export default useFranchiseStorySlider;
