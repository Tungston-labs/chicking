import React,{useState,useEffect} from "react";
import {
  Section,
  Container,
  LeftText1,
  LeftText2,
  MainContentArea,
  Tag,
  Heading,
  Description,
  GridContainer,
} from "./styles";
import PageLayout from "../../components/Layout/PageLayout";
import TopBanner from "../../components/TopBanner";
import LeadershipCard from "../../components/Management/LeadershipCard";
import { leadershipMembers } from "../../components/Management/leadershipData";
import LeadershipEffect from "../../components/Management/LeadershipEffect";
import BFICoreTeam from "../../components/Management/BFICoreTeam";
import BFIPillars from "../../components/Management/BFIPillars";
import sharedBannerImages from "../../assets/images/sharedBannerImages.js";
import SiteFooter from "../../components/HomeSections/sections/SiteFooter/SiteFooter.jsx";
import LeadershipModal from "../../components/Management/modal/LeadershipModal.jsx";
import PartnerCta from "../../components/HomeSections/sections/PartnerCta/PartnerCta.jsx";

const franchiseImg = "/images/management/topimage.svg";

const sectionContent = {
  tag: "Chicking Leadership Team",

  heading: {
    first: "We",
    highlight: "Work Together",
    last: ", We Innovate Together",
  },

  description:
    "From Your Entry-Level Staff To Your Senior Manager, Everyone Has Something To Learn And Teach One Another. Make Sure That The Work Atmosphere Encourages Collaboration And Creativity That Is Aligned With Performance.",

  leftText1:
    "Keep An Eye Out For Good Leaders Who Cultivate A Mentality Of Success In The Workplace.",

  leftText2:
    "The Best Leaders Are Authentic; They Do What They Say And Are Consistent In Their Actions",
};

const LeadershipSection = () => {
   const [selectedMember, setSelectedMember] = useState(null);
      const titles = [ "highly qualified & experienced individuals"];
      const [titleIndex, setTitleIndex] = useState(0);
      useEffect(() => {
          const interval = setInterval(() => {
              setTitleIndex((prev) => (prev + 1) % titles.length);
          }, 3000);
  
          return () => clearInterval(interval);
      }, [titles.length]);
  return (
    <>
        {selectedMember && (
        <LeadershipModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
      <PageLayout />

  <TopBanner
            key={titleIndex}
            title={titles[titleIndex]}
            description={
                <>
        In order to support the Chicking franchise system along every step of the way, 
                   
           a dedicated team is comprised of highly qualified and experienced individuals.
                </>
            }
            image={franchiseImg}
        />

      <Section>
        <Container>
          <GridContainer>

            <LeftText1>
              {sectionContent.leftText1}
            </LeftText1>

            <MainContentArea>
              <Tag>
                {sectionContent.tag}
              </Tag>

              <Heading>
                {sectionContent.heading.first}{" "}
                <span>
                  {sectionContent.heading.highlight}
                </span>
                {sectionContent.heading.last}
              </Heading>

              <Description>
                {sectionContent.description}
              </Description>

            </MainContentArea>

            <LeftText2>
              {sectionContent.leftText2}
            </LeftText2>

            {leadershipMembers.map((member) => (
              <LeadershipCard
                key={member.id}
                {...member}
                onClick={() =>setSelectedMember(member)}
              />
            ))}

          </GridContainer>
        </Container>
      </Section>

  

      <LeadershipEffect/>
      <BFICoreTeam/>
      <BFIPillars/>
    <PartnerCta
      action={{
        to: "/franchiseform",
        label: "Franchise Inquiry",
      }}
      actionBackground="#ffffff"
      actionTextColor="#891B1C"
      background="#891B1C"
      bottomEdgeImage={sharedBannerImages.edges.top}
      description="BFI doesn't just provide a brand name. We deliver a complete Chicking franchise business system backed by 20 years of operational expertise. From day one of your franchise journey through years of growth, our team remains dedicated to your profitability and success."
      textColor="#ffffff"
      title={
        <>
          Partner With Chicking <strong>- Where Proven</strong>
          <br />
          <strong>Success Meets Global Opportunity</strong>,
          
        </>
      }
      topEdgeImage={sharedBannerImages.edges.top}
    />            
    <SiteFooter />
    </>
  );
};

export default LeadershipSection;
