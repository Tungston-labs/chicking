import { useEffect, useRef, useState } from "react";

const HEADING_TRIGGER_OFFSET = 12;

const useActiveTimelineMilestone = (items) => {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);
  const timelineScrollAreaRef = useRef(null);
  const timelineYearHeaderRefs = useRef([]);

  useEffect(() => {
    const scrollArea = timelineScrollAreaRef.current;

    if (!scrollArea || items.length === 0) {
      return undefined;
    }

    const updateActiveMilestone = () => {
      const headerElements = timelineYearHeaderRefs.current.filter(Boolean);

      if (headerElements.length === 0) {
        return;
      }

      const hasReachedScrollEnd =
        scrollArea.scrollTop + scrollArea.clientHeight >= scrollArea.scrollHeight - 2;

      if (hasReachedScrollEnd) {
        setActiveMilestoneIndex(headerElements.length - 1);
        return;
      }

      const scrollAreaTop = scrollArea.getBoundingClientRect().top;
      const triggerTop = scrollAreaTop + HEADING_TRIGGER_OFFSET;
      let nextIndex = 0;

      headerElements.forEach((headerElement, index) => {
        const headerTop = headerElement.getBoundingClientRect().top;

        if (headerTop <= triggerTop) {
          nextIndex = index;
        }
      });

      setActiveMilestoneIndex(nextIndex);
    };

    const frameId = window.requestAnimationFrame(updateActiveMilestone);

    scrollArea.addEventListener("scroll", updateActiveMilestone, { passive: true });
    window.addEventListener("resize", updateActiveMilestone);

    return () => {
      window.cancelAnimationFrame(frameId);
      scrollArea.removeEventListener("scroll", updateActiveMilestone);
      window.removeEventListener("resize", updateActiveMilestone);
    };
  }, [items]);

  const setTimelineYearHeaderRef = (index) => (element) => {
    timelineYearHeaderRefs.current[index] = element;
  };

  return {
    activeMilestone: items[activeMilestoneIndex] || items[0] || null,
    activeMilestoneIndex,
    setTimelineYearHeaderRef,
    timelineScrollAreaRef,
  };
};

export default useActiveTimelineMilestone;
