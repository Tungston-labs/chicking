"use client";

import { useEffect, useState } from "react";
import {
  HeroButton,
  HeroFirstContainer,
  HeroSubtitle,
  HeroTitle,
} from "./HeroFirst.styles";
import { CiLocationArrow1 } from "react-icons/ci";

const texts = [
  <>
    A <strong>Global</strong> Brand, Built to <strong>Partner</strong>.
  </>,
  <>
    {" "}
    <strong>Your </strong>Gateway to a <strong>Global Food Brand</strong>.
  </>,
  <>
    <strong>Turn Passion into</strong> Profit with <strong>Chicking</strong>.
  </>,
  <>
    <strong>Start Strong </strong>Succeed with <strong>Chicking</strong>.
  </>,
];

const HeroFirst = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500); // change timing here

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroFirstContainer>
      <HeroTitle key={index}>{texts[index]}</HeroTitle>
      <HeroSubtitle>
        Join Chicking, the world’s fastest-growing Halal quick-service
        restaurant chain, and capitalize on a proven business model.
      </HeroSubtitle>
      <HeroButton href="#">
        Franchise Inquiry <CiLocationArrow1 />
      </HeroButton>
    </HeroFirstContainer>
  );
};

export default HeroFirst;
