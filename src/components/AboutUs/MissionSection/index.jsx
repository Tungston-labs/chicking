// src/components/AboutUs/MissionSection/index.jsx

import React, { useState } from "react";

import {
  Section,
  Container,
  SideImage,
  ContentCard,
  Title,
  Description,
  ArrowWrapper,
  ArrowButton,
  Crown,
  ArrowIcon,
} from "./style";

import { missionData } from "./data";

const MissionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // true = next arrow
  // false = previous arrow
  const [isNextDirection, setIsNextDirection] = useState(true);

  const handleSlide = () => {
    if (isNextDirection) {
      if (activeIndex === missionData.length - 1) {
        setIsNextDirection(false);

        setActiveIndex((prev) =>
          prev === 0 ? missionData.length - 1 : prev - 1,
        );
      } else {
        setActiveIndex((prev) => prev + 1);
      }
    } else {
      if (activeIndex === 0) {
        setIsNextDirection(true);

        setActiveIndex((prev) =>
          prev === missionData.length - 1 ? 0 : prev + 1,
        );
      } else {
        setActiveIndex((prev) => prev - 1);
      }
    }
  };

  const currentData = missionData[activeIndex];

  return (
    <Section>
      <Container>
        <SideImage image={currentData.leftImage} />

        <ContentCard>
          <Crown />

          <Title>
            Our <span>{currentData.title}</span>
          </Title>

          <Description>{currentData.description}</Description>
        </ContentCard>

        <SideImage image={currentData.rightImage} />

        <ArrowWrapper>
          <ArrowButton onClick={handleSlide}>
            <ArrowIcon>{isNextDirection ? "❯" : "❮"}</ArrowIcon>
          </ArrowButton>
        </ArrowWrapper>
      </Container>
    </Section>
  );
};

export default MissionSection;
