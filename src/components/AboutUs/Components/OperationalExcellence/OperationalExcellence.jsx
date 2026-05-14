// OperationalExcellence.jsx

import React from "react";
import {
  Section,
  Container,
  LeftContent,
  RightContent,
  Heading,
  HeadingBold,
  FeatureList,
  FeatureItem,
  IconBox,
  Content,
  Title,
  Highlight,
  Description,
  HandImage,
  BranchCircle,
  BranchImage,
  DashedLine,
  CircleOne,
  CircleTwo,
  CircleThree,
  CircleFour,
} from "./OperationalExcellence.style";

const featureData = [
  {
    id: 1,
    title: "professional",
    highlight: "team",
    description:
      "Building a strong second-level management team at regional level while expanding its outlet network across India & other markets, ensuring every Chicking outlet delivers consistent quality and service.",
    icon: "/assets/icons/team.svg",
  },
  {
    id: 2,
    title: "menu dynamics &",
    highlight: "optimisation",
    description:
      "Strong menu engineering targeted towards increased focus on higher product value like Chicking bucket, Chicking burger, and combos to drive the Average Bill Value.",
    icon: "/assets/icons/burger.svg",
  },
  {
    id: 3,
    title: "network",
    highlight: "expansion",
    description:
      "Strengthen market presence by deeper penetration from UAE to North & South America, Asia, and African Region with Chicking outlets and franchise opportunities.",
    icon: "/assets/icons/network.svg",
  },
  {
    id: 4,
    title: "strategic outlet",
    highlight: "establishment",
    description:
      "Profitable outlet-level unit economics coupled with low Capex spend per Chicking outlet, resulting in improved return on investment.",
    icon: "/assets/icons/store.svg",
  },
];

const OperationalExcellence = () => {
  return (
    <Section>
      <Container>
        <LeftContent>
          <Heading>
            Operational <HeadingBold>Excellence</HeadingBold>
          </Heading>

          <FeatureList>
            {featureData.map((item) => (
              <FeatureItem key={item.id}>
                <IconBox>
                  {/* Replace with your SVG icon */}
                  <img src={item.icon} alt={item.highlight} />
                </IconBox>

                <Content>
                  <Title>
                    {item.title} <Highlight>{item.highlight}</Highlight>
                  </Title>

                  <Description>{item.description}</Description>
                </Content>
              </FeatureItem>
            ))}
          </FeatureList>
        </LeftContent>

        <RightContent>
          <HandImage />

          <CircleOne>
            <DashedLine />
            <BranchCircle>
              <BranchImage />
            </BranchCircle>
          </CircleOne>

          <CircleTwo>
            <DashedLine />
            <BranchCircle>
              <BranchImage />
            </BranchCircle>
          </CircleTwo>

          <CircleThree>
            <DashedLine />
            <BranchCircle>
              <BranchImage />
            </BranchCircle>
          </CircleThree>

          <CircleFour>
            <DashedLine />
            <BranchCircle>
              <BranchImage />
            </BranchCircle>
          </CircleFour>
        </RightContent>
      </Container>
    </Section>
  );
};

export default OperationalExcellence;
