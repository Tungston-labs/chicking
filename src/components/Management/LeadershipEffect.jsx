import React from "react";
import {
  Wrapper,
  BrushTop,
  Content,
  Heading,
  Description,
  CardContainer,
  Card,
  IconWrap,
  CardTitle,
  CardDescription,
} from "./styles";

import { leadershipData } from "./leadershipData";

import brushImg from "../../../public/images/sharedbanner/footerblack.png";

const LeadershipEffect = () => {
  return (
    <Wrapper>

      <BrushTop src={brushImg} />

      <Content>
        <Heading>
          Leadership Effect
        </Heading>

        <Description>
          The People At The Top Of Your Management Chain Have The Biggest Effect
          On Your Restaurant’s Culture. Keep An Eye Out For Good Leaders Who
          Cultivate A Mentality Of Success In The Workplace
        </Description>

        <CardContainer>
          {leadershipData.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.id}>
                <IconWrap>
                  <Icon size={32} />
                </IconWrap>

                <CardTitle>
                  {item.title}
                </CardTitle>

                <CardDescription>
                  {item.description}
                </CardDescription>
              </Card>
            );
          })}
        </CardContainer>
      </Content>

    </Wrapper>
  );
};

export default LeadershipEffect;