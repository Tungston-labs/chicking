import React from "react";
import { FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";
import {
  HeroWrapper,
  Container,
  HeroHeader,
  Tag,
  Title,
  Subtitle,
  ChairmanCardContainer,
  ImageCardWrapper,
  ImageBox,
  VerticalTextStrip,
  FounderImage,
  SocialIconsRow,
  ChairmanInfoContent,
  InfoTop,
  InfoTag,
  InfoTitle,
  InfoBio,
  StatsGrid,
  StatItem,
  StatNumber,
  StatLabel,
} from "./ManagementHero.styles";

const founderImageSrc = "/images/management/profile.png";

const ManagementHero = () => {
  return (
    <HeroWrapper data-animate="fade-down">
      <Container>
        <HeroHeader>
          <Tag>The People Behind The Brand</Tag>
          <Title>Highly Qualified & Experienced Individuals</Title>
          <Subtitle>
            In Order To Support The Chicking Franchise System Along Every Step Of
            The Way, A Dedicated Team Is Comprised Of Highly Qualified And Experienced
            Individuals.
          </Subtitle>
        </HeroHeader>

        <ChairmanCardContainer>
          <ImageCardWrapper>
            <ImageBox>
              <VerticalTextStrip>Founder & CEO</VerticalTextStrip>
              <FounderImage src={founderImageSrc} alt="A K Mansoor" />
            </ImageBox>
            <SocialIconsRow>
              <a href="#twitter" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#instagram" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#website" aria-label="Website">
                <FaGlobe />
              </a>
            </SocialIconsRow>
          </ImageCardWrapper>

          <ChairmanInfoContent>
            <InfoTop>
              <InfoTag>Founder & Chairman</InfoTag>
              <InfoTitle>A K MANSOOR</InfoTitle>
              <InfoBio>
                Chicking® Started With A Vision Of Our Founder & Chairman, Mr.
                A. K. Mansoor, Who Identified The Need For A Fully Halal Compliant
                QSR That Serves Great Tasting Food In An Inviting Environment. Created
                In 2000 Through A Vision Of Founder & Managing Director Mr. A. K.
                Mansoor And Established In Dubai, Chicking® Is A Leading Quick
                Service Restaurant (QSR) Company With Business Across The Middle
                East And Asia. The Brand Is Distinctly Known For Its Longstanding
                Tradition Of Product Innovation And Commitment To High Quality,
                Halal Compliant, Freshly Prepared Food Infused With Exciting Flavors.
                The Brand Has Grown Into A 230+ Strong Chain And Today Serves More
                Than 20,000,000 Customers. The Brand's Point Of Difference Is Its
                Adherence To Providing A Varied Menu Inspired By Taste Cultures
                From Around The World In Modern And Inviting Family-Oriented Settings.
              </InfoBio>
            </InfoTop>

            <StatsGrid>
              <StatItem>
                <StatNumber>2000</StatNumber>
                <StatLabel>Founded in Dubai</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>470 +</StatNumber>
                <StatLabel>Stores worldwide</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>36 +</StatNumber>
                <StatLabel>Countries served</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>2500 +</StatNumber>
                <StatLabel>People employed</StatLabel>
              </StatItem>
            </StatsGrid>
          </ChairmanInfoContent>
        </ChairmanCardContainer>
      </Container>
    </HeroWrapper>
  );
};

export default ManagementHero;
