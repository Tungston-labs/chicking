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

  const handleSlide = () => {
    setActiveIndex((prev) =>
      prev === missionData.length - 1 ? 0 : prev + 1,
    );
  };

  const currentData = missionData[activeIndex];

  return (
    <Section>
      <Container>
        <SideImage data-animate="fade-right" $image={currentData.leftImage}>
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

        <ContentCard data-animate="fade-up">
          <Crown />

          {/* Show title only if it exists */}
          {currentData.title && (
            <Title>
              <span>{currentData.title}</span>
            </Title>
          )}

          <Description>{currentData.description}</Description>
        </ContentCard>

        <SideImage
          data-animate="fade-left"
          $hideOnMobile
          $image={currentData.rightImage}
        />

        <ArrowWrapper>
          <ArrowButton onClick={handleSlide} type="button">
            <ArrowIcon>❯</ArrowIcon>
          </ArrowButton>
        </ArrowWrapper>
      </Container>
    </Section>
  );
};

export default MissionSection;
