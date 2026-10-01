import { useEffect, useRef, useState } from "react";

const useActiveTimelineMilestone = (items = []) => {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);
  const containerRef = useRef(null);
  const isScrollingRef = useRef(false);

  const goToMilestone = (index) => {
    if (index >= 0 && index < items.length) {
      setActiveMilestoneIndex(index);
    }
  };

  const nextMilestone = () => {
    setActiveMilestoneIndex((prev) => (prev + 1) % items.length);
  };

  const prevMilestone = () => {
    setActiveMilestoneIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  useEffect(() => {
    const element = containerRef.current;
    if (!element || items.length === 0) return undefined;

    const handleWheel = (e) => {
      if (isScrollingRef.current) {
        if (
          (e.deltaY > 0 && activeMilestoneIndex < items.length - 1) ||
          (e.deltaY < 0 && activeMilestoneIndex > 0)
        ) {
          e.preventDefault();
        }
        return;
      }

      if (e.deltaY > 0) {
        // Scrolling down
        if (activeMilestoneIndex < items.length - 1) {
          e.preventDefault();
          isScrollingRef.current = true;
          setActiveMilestoneIndex((prev) => prev + 1);
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 450);
        }
      } else if (e.deltaY < 0) {
        // Scrolling up
        if (activeMilestoneIndex > 0) {
          e.preventDefault();
          isScrollingRef.current = true;
          setActiveMilestoneIndex((prev) => prev - 1);
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 450);
        }
      }
    };

    element.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, [items.length, activeMilestoneIndex]);

  return {
    activeMilestone: items[activeMilestoneIndex] || items[0] || null,
    activeMilestoneIndex,
    containerRef,
    goToMilestone,
    nextMilestone,
    prevMilestone,
  };
};

export default useActiveTimelineMilestone;
