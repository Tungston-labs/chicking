import React from "react";
import FranchiseBanner from "../../components/TopBanner";
import MissionSection from "../../components/AboutUs/MissionSection";
import HeroVideoSection from "../../components/AboutUs/HeroVideoSection/HeroVideoSection";
import OperationalExcellence from "../../components/AboutUs/OperationalExcellence";
import PageLayout from "../../components/Layout/PageLayout";
import PartnerCta from "../../components/HomeSections/sections/PartnerCta/index.jsx";
import SiteFooter from "../../components/HomeSections/sections/SiteFooter/index.jsx";
import SEO from "../../components/Common/SEO.jsx";
import sharedBannerImages from "../../assets/images/sharedBannerImages";

const bannerGraphic = "/images/about/aboutheader.svg";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Us | Chicking Global Franchise",
  "description": "Learn about Chicking's 20-year history, mission, operational excellence, and global quick-service restaurant franchise network.",
  "url": "http://178.248.112.5/about-us",
  "publisher": {
    "@type": "Organization",
    "name": "Chicking",
    "logo": "http://178.248.112.5/images/logo.svg",
  },
};

const AboutUs = () => {
  return (
    <PageLayout>
      <SEO
        title="About Us | Chicking Global Franchise"
        description="Learn about Chicking's 20-year history, mission, operational excellence, and global quick-service restaurant franchise network."
        canonicalPath="/about-us"
        schema={aboutSchema}
      />

      {/* 1. Red Hero Banner matching Image 1 */}
      <FranchiseBanner
        title={
          <>
            <span style={{ fontSize: "14px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "8px", opacity: 0.85 }}>
              FROM OUR KITCHEN TO YOUR MARKET
            </span>
            Your Market, Our Brand.<br />
            One Recipe For Success
          </>
        }
        description="Join Chicking's Global Franchise Network And Build Your Business With A Proven QSR Concept, Innovative Products, Dedicated Support, And Exceptional Customer Appeal."
        image={bannerGraphic}
      />

      {/* 2. Mission & Vision Section matching Image 1 & 2 */}
      <MissionSection />

      {/* 3. Hero Video Showcase Banner matching Image 1 */}
      <HeroVideoSection />

      {/* 4. Operational Excellence Section matching Image 1 & 3 */}
      <div data-animate="fade-up">
        <OperationalExcellence />
      </div>

      {/* 5. Partner CTA & Footer */}
      <div data-animate="fade-up">
        <PartnerCta
        actionBackground="#ffffff"
                    actionTextColor="#891B1C"
                    background="#891B1C"
                    textColor="#ffffff"
          title={
            <>
              Partner With Chicking — Where Proven<strong> <br></br> Success Meets Global Opportunity</strong>
            </>
          }
          description="BFI doesn't just provide a brand name; we deliver a complete chicking franchise business system backed by 20 years of operational expertise. From day one of your franchise journey through years of growth, our team remains dedicated to your profitability and success."
          action={{
            to: "/franchiseform",
            label: "Franchise Inquiry",
          }}
        />
      </div>

      <SiteFooter  />
    </PageLayout>
  );
};

export default AboutUs;
