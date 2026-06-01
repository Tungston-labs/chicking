import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const revealVisibleElements = () => {
  document.querySelectorAll("[data-animate]").forEach((element) => {
    element.classList.add("is-visible");
  });
};

const ScrollAnimations = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealVisibleElements();
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      revealVisibleElements();
      return undefined;
    }

    const observedElements = new WeakSet();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    const observeAnimatedElements = () => {
      document.querySelectorAll("[data-animate]:not(.is-visible)").forEach((element) => {
        if (observedElements.has(element)) {
          return;
        }

        observedElements.add(element);
        observer.observe(element);
      });
    };

    const mutationObserver = new MutationObserver(observeAnimatedElements);

    const timer = window.setTimeout(() => {
      observeAnimatedElements();
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }, 60);

    return () => {
      window.clearTimeout(timer);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

export default ScrollAnimations;
