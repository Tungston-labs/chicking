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

import FranchiseImage from "../../../../public/images/franchise-image.png";

const OperationalExcellence = () => {
  return (
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
  );
};

export default OperationalExcellence;
