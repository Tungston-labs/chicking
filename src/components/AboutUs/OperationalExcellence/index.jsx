import React from "react";

import {
  Section,
  Container,
  LeftContent,
  Heading,
  CardWrapper,
  Card,
  Content,
  Title,
  Description,
  RightContent,
  MainImage,
} from "./style";

import { excellenceData } from "./data";

import SharedBanner from "../../SharedBanner";

import sharedBannerImages from "../../../assets/images/sharedBannerImages";

const FranchiseImage = "../../../../public/images/franchise-image.png";

const BEIGE_TOP = sharedBannerImages.edges.beigeTop;

const OperationalExcellence = () => {
  return (
    <SharedBanner
      topEdgeImage={BEIGE_TOP}
      bottomEdgeImage={sharedBannerImages.edges.beigeBottom}
      forceEdgeImages={true}
      background="#eaddcd"
    >
      <Section>
        <Container>
          <LeftContent>
            <Heading>
              Operational <span>Excellence</span>
            </Heading>

            <CardWrapper>
              {excellenceData.map((item) => (
                <Card key={item.id}>
                  <img src={item.icon} alt={item.highlight} />

                  <Content>
                    <Title>
                      {item.title} <span>{item.highlight}</span>
                    </Title>

                    <Description>{item.description}</Description>
                  </Content>
                </Card>
              ))}
            </CardWrapper>
          </LeftContent>

          <RightContent>
            <MainImage src={FranchiseImage} alt="Operational Excellence" />
          </RightContent>
        </Container>
      </Section>
    </SharedBanner>
  );
};

export default OperationalExcellence;
