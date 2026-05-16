import React from "react";

import {
  Wrapper,
  Container,
  Heading,
  Description,
  MainSection,
  SideWrapper,
  TeamCard,
  CardTitle,
  CardName,
  CardRole,
  CenterLogo,
  LogoCircle,
} from "./BFICoreTeam.styles";

import logo from "../../../public/images/management/logo.svg";

import {
  leftTeam,
  rightTeam,
} from "./leadershipData";

const BFICoreTeam = () => {
  return (
    <Wrapper>
      <Container>

        <Heading>
          BFI Core Team
        </Heading>

        <Description>
          In terms of successful franchisees, quality of training,
          and franchisee recruitment, Chicking Europe's
          record speaks for itself.
        </Description>

        <MainSection>

          <SideWrapper>
            {leftTeam.map((item, index) => (
              <TeamCard key={index}>
                <CardTitle>
                  {item.title}
                </CardTitle>

                <CardName>
                  {item.name}
                </CardName>

                <CardRole>
                  {item.role}
                </CardRole>
              </TeamCard>
            ))}
          </SideWrapper>

          <CenterLogo>

            <LogoCircle>
              <img src={logo} alt="" />
            </LogoCircle>

          </CenterLogo>

          <SideWrapper>
            {rightTeam.map((item, index) => (
              <TeamCard key={index}>
                <CardTitle>
                  {item.title}
                </CardTitle>

                <CardName>
                  {item.name}
                </CardName>

                <CardRole>
                  {item.role}
                </CardRole>
              </TeamCard>
            ))}
          </SideWrapper>

        </MainSection>

      </Container>
    </Wrapper>
  );
};

export default BFICoreTeam;