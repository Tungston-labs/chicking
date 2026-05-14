import React from "react";
import {
  Wrapper,
  HeaderSection,
  TopBgImage,
  Heading,
  SubHeading,
  CardsWrapper,
  Card,
  IconBox,
  CardTitle,
  CardText,
} from "./style";

import topShape from "../../../public/images/yellowstar.svg";

import icon1 from "../../../public/images/sparkle.svg";
import icon2 from "../../../public/images/sparkle.svg";
import icon3 from "../../../public/images/sparkle.svg";

const CompetitiveAdvantage = () => {
  return (
    <Wrapper>
      <HeaderSection>
        <TopBgImage
          src={topShape}
          alt=""
        />

        <Heading>
          Our <span>Competitive</span> Advantage
        </Heading>

        <SubHeading>
          Industry-leading metrics across all key performance indicators
        </SubHeading>
      </HeaderSection>

      <CardsWrapper>
        <Card>
          <IconBox>
            <img src={icon1} alt="" />
          </IconBox>

          <CardTitle>
            Exceptional <span>Growth</span> Rate
          </CardTitle>

          <CardText>
            92% growth metric demonstrates our Chicking
            expansion velocity across emerging and
            established markets.
          </CardText>
        </Card>

        <Card>
          <IconBox>
            <img src={icon2} alt="" />
          </IconBox>

          <CardTitle>
            Operational <span>Excellence</span>
          </CardTitle>

          <CardText>
            88% operational score reflects our
            commitment to streamlined processes and
            Chicking franchisee success.
          </CardText>
        </Card>

        <Card>
          <IconBox>
            <img src={icon3} alt="" />
          </IconBox>

          <CardTitle>
            Dominant <span>Market</span> Position
          </CardTitle>

          <CardText>
            Number 1 Halal Quick Service Restaurant
            Franchise, serving millions across 36+
            countries with Chicking excellence.
          </CardText>
        </Card>
      </CardsWrapper>
    </Wrapper>
  );
};

export default CompetitiveAdvantage;