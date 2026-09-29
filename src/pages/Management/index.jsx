import React, { useState } from "react";
import PageLayout from "../../components/Layout/PageLayout";
import ManagementHero from "../../components/Management/ManagementHero";
import ChairmanMessage from "../../components/Management/ChairmanMessage";
import LeadershipTeamSection from "../../components/Management/LeadershipTeamSection";
import LeadershipEffect from "../../components/Management/LeadershipEffect";
import BFICoreTeam from "../../components/Management/BFICoreTeam";
import BFIPillars from "../../components/Management/BFIPillars";
import sharedBannerImages from "../../assets/images/sharedBannerImages.js";
import SiteFooter from "../../components/HomeSections/sections/SiteFooter/index.jsx";
import LeadershipModal from "../../components/Management/modal/LeadershipModal.jsx";
import PartnerCta from "../../components/HomeSections/sections/PartnerCta/index.jsx";
import SEO from "../../components/Common/SEO.jsx";

const managementSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Leadership & Management Team | Chicking",
  "description": "Meet the highly qualified and experienced leadership team behind Chicking's international growth, franchise management, and operational support.",
  "url": "http://178.248.112.5/management",
  "publisher": {
    "@type": "Organization",
    "name": "Chicking",
    "logo": "http://178.248.112.5/images/logo.svg",
  },
};

const ManagementPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      <SEO
        title="Leadership & Management Team | Chicking"
        description="Meet the highly qualified and experienced leadership team behind Chicking's international growth, franchise management, and operational support."
        canonicalPath="/management"
        schema={managementSchema}
      />
      {selectedMember && (
        <LeadershipModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
      <PageLayout />

      {/* 1. Top Red Hero Section with management.svg background */}
      <ManagementHero />

      {/* 2. Message From The Chairman Section */}
      <ChairmanMessage />

      {/* 3. Leadership Team Grid Section */}
      <LeadershipTeamSection onSelectMember={(member) => setSelectedMember(member)} />

      {/* 4. Leadership Effect Section */}
      <div data-animate="fade-up">
        <LeadershipEffect />
      </div>

      {/* 5. BFI Core Team Section */}
      <div data-animate="fade-up">
        <BFICoreTeam />
      </div>

      {/* 6. BFI Pillars Section */}
      <div data-animate="fade-up">
        <BFIPillars />
      </div>

      {/* Partner CTA */}
      <div data-animate="fade-up">
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
              <strong>Success Meets Global Opportunity</strong>
            </>
          }
          topEdgeImage={sharedBannerImages.edges.top}
        />
      </div>
      <SiteFooter />
    </>
  );
};

export default ManagementPage;
