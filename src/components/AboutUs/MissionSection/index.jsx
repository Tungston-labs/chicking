import React from "react";
import {
  Section,
  Container,
  SectionHeader,
  Title,
  Subtitle,
  ContentWrapper,
  LeftAboutImage,
  MissionCard,
  MissionItem,
  ItemTitle,
  ItemDescription,
  DotArrowImage,
  TopLeftGradientOverlay,
  BottomRightGradientOverlay,
} from "./style";

const about1Img = "/images/about/about1.svg";
const dotArrowImg = "/images/about/dotarrow.svg";

const MissionSection = () => {
  return (
    <Section data-animate="fade-up">
      <LeftAboutImage src={about1Img} alt="Chicking Quality Food" />
      <TopLeftGradientOverlay />
      <BottomRightGradientOverlay />
      <Container>
        <DotArrowImage src={dotArrowImg} alt="" aria-hidden="true" />
        <SectionHeader>
          <Title>
            Strong Focus On Quality, Innovation, Halal<br />
            Standards &amp; <strong>Customer Satisfaction</strong>
          </Title>
          <Subtitle>
            Chicking Is A Homegrown UAE Quick Service Restaurant (QSR) Brand Founded In
            Dubai In 2000. What Began With A Passion For Creating Delicious, High-Quality
            Fried Chicken Has Grown Into An International Brand Serving Customers Across
            Multiple Markets Worldwide.
          </Subtitle>
        </SectionHeader>

        <ContentWrapper>
          <MissionCard>
            <MissionItem>
              <ItemTitle>Our <strong>Mission</strong></ItemTitle>
              <ItemDescription>
                To create unforgettable moments with our signature fried chicken by
                sourcing the finest ingredients, using innovative recipes, and
                maintaining top quality and freshness. We aim to redefine fast food with
                exceptional service and taste, focusing on customer satisfaction.
              </ItemDescription>
            </MissionItem>

            <MissionItem>
              <ItemTitle>Our <strong>Vision</strong></ItemTitle>
              <ItemDescription>
                To be the leading restaurant destination, known for delivering joy through
                our unique and signature menus. Chicking aims to delight every
                customer and set the standard for excellence in the fast-food industry.
              </ItemDescription>
            </MissionItem>
          </MissionCard>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default MissionSection;
