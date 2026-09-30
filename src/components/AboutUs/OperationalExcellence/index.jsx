import React, { useState } from "react";
import {
  Section,
  Container,
  HeaderWrapper,
  Heading,
  Subtitle,
  WingsDishImage,
  MainGrid,
  VideoCardWrapper,
  VideoCardImage,
  FeaturesWrapper,
  FeatureCard,
  IconBox,
  FeatureContent,
  FeatureTitle,
  FeatureDescription,
} from "./style";

import { excellenceData } from "./data";
import VideoModal from "../VideoModal/VideoModal";

const about2Img = "/images/about/about2.svg";
const videoFrame2Img = "/images/about/videoframe2.svg";

const OperationalExcellence = ({ videoUrl }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <Section data-animate="fade-up">
        <Container>
          <WingsDishImage src={about2Img} alt="Chicking Chicken Wings Dish" />
          <HeaderWrapper>
            <Heading>
              Operational <span>Excellence</span>
            </Heading>
            <Subtitle>
              Receive Ongoing Support Across Operations, Training, Products, Services And
              Marketing To Help Franchise Partners Operate Successfully. Become Part Of
              Chicking's Expanding International Network And Explore Opportunities Across
              Established And Emerging Markets.
            </Subtitle>
          </HeaderWrapper>

          <MainGrid>
            <VideoCardWrapper onClick={() => setIsVideoOpen(true)}>
              <VideoCardImage src={videoFrame2Img} alt="Operational Excellence Video" />
            </VideoCardWrapper>

            <FeaturesWrapper>
              {excellenceData.map((item) => {
                const IconComponent = item.icon;
                return (
                  <FeatureCard key={item.id}>
                    <IconBox>
                      <IconComponent />
                    </IconBox>
                    <FeatureContent>
                      <FeatureTitle>
                        {item.title} <span>{item.highlight}</span>
                      </FeatureTitle>
                      <FeatureDescription>{item.description}</FeatureDescription>
                    </FeatureContent>
                  </FeatureCard>
                );
              })}
            </FeaturesWrapper>
          </MainGrid>
        </Container>
      </Section>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={videoUrl}
      />
    </>
  );
};

export default OperationalExcellence;
