import React from "react";
import {
  Section,
  Container,
  SectionHeader,
  Tag,
  Title,
  Description,
  GridContainer,
  Card,
  AvatarBox,
  AvatarImage,
  MemberName,
  MemberRole,
} from "./LeadershipTeamSection.styles";

const defaultAvatar = "/images/management/profile.png";

const teamMembers = [
  {
    id: 2,
    name: "MR. SREEKANTH N PILLAI",
    role: "Chief Executive Officer",
    image: defaultAvatar,
  },
  {
    id: 3,
    name: "MR. MIRZAB MANSOOR",
    role: "Executive Director",
    image: defaultAvatar,
  },
  {
    id: 4,
    name: "MR. MAQBOOL MODI",
    role: "Operations Director",
    image: defaultAvatar,
  },
  {
    id: 5,
    name: "MR. NIYAS USMAN",
    role: "Director",
    image: defaultAvatar,
  },
  {
    id: 6,
    name: "MR. SHAFEER",
    role: "Operations Manager - Europe",
    image: defaultAvatar,
  },
  {
    id: 7,
    name: "MR. SAYED",
    role: "Global Franchise Operations Manager",
    image: defaultAvatar,
  },
];

const LeadershipTeamSection = ({ onSelectMember }) => {
  return (
    <Section data-animate="fade-up">
      <Container>
        <SectionHeader>
          <Tag>Chicking Leadership Team</Tag>
          <Title>We Work Together, We Innovate Together</Title>
          <Description>
            From Your Entry-Level Staff To Your Senior Manager, Everyone Has
            Something To Learn And Teach One Another. Make Sure That The Work
            Atmosphere Encourages Collaboration And Creativity That Is Aligned With
            Performance.
          </Description>
        </SectionHeader>

        <GridContainer>
          {teamMembers.map((member) => (
            <Card key={member.id} onClick={() => onSelectMember && onSelectMember(member)}>
              <AvatarBox>
                <AvatarImage src={member.image} alt={member.name} />
              </AvatarBox>
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </Card>
          ))}
        </GridContainer>
      </Container>
    </Section>
  );
};

export default LeadershipTeamSection;
