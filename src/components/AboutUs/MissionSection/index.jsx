// src/components/AboutUs/MissionSection/index.jsx

import { useState } from "react";

import {
  Section,
  Container,
  SideImage,
  ContentCard,
  Title,
  Description,
  ChairmanQuoteText,
  ChairmanQuoteAuthor,
  ArrowWrapper,
  ArrowButton,
  Crown,
  ArrowIcon,
} from "./style";

import { missionData } from "./data";

const MissionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePreviousSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? missionData.length - 1 : prev - 1,
    );
  };

  const handleNextSlide = () => {
    setActiveIndex((prev) =>
      prev === missionData.length - 1 ? 0 : prev + 1,
    );
  };

  const currentData = missionData[activeIndex];

  return (
    <Section>
      <Container>
        <SideImage $image={currentData.leftImage}>
          {currentData.quote && (
            <div>
              <ChairmanQuoteAuthor>
                {currentData.quote.author}
              </ChairmanQuoteAuthor>

              <ChairmanQuoteText>
                “{currentData.quote.text}”
              </ChairmanQuoteText>
            </div>
          )}
        </SideImage>

        <ContentCard>
          <Crown />

          {/* Show title only if it exists */}
          {currentData.title && (
            <Title>
              <span>{currentData.title}</span>
            </Title>
          )}

          <Description>{currentData.description}</Description>
        </ContentCard>

        <SideImage $hideOnMobile $image={currentData.rightImage} />

        <ArrowWrapper>
          <ArrowButton
            aria-label="Previous slide"
            onClick={handlePreviousSlide}
            type="button"
          >
            <ArrowIcon>❮</ArrowIcon>
          </ArrowButton>

          <ArrowButton
            aria-label="Next slide"
            onClick={handleNextSlide}
            type="button"
          >
            <ArrowIcon>❯</ArrowIcon>
          </ArrowButton>
        </ArrowWrapper>
      </Container>
    </Section>
  );
};

export default MissionSection;
