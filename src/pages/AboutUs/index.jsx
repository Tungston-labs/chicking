import React, { useEffect, useState } from "react";
import FranchiseBanner from "../../components/TopBanner";
import OperationalExcellence from "../../components/AboutUs/OperationalExcellence";
import PageLayout from "../../components/Layout/PageLayout";
import MissionSection from "../../components/AboutUs/MissionSection";
import PartnerCta from "../../components/HomeSections/sections/PartnerCta";
import SiteFooter from "../../components/HomeSections/sections/SiteFooter";
import sharedBannerImages from "../../assets/images/sharedBannerImages";

const franchiseImg = "/images/franchise/aboutimg.svg";

const AboutUs = () => {
  const titles = [
    "Partner With a Global Franchise Leader",
    "Turn Ambition Into International Success",
    "Scale Your Business With a Proven Global Model",
    "Expanding Opportunities Delivering Global Success",
  ];

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
  <PageLayout>
    <FranchiseBanner
      key={titleIndex}
      title={titles[titleIndex]}
      description={
        <>
          Yet with careful planning, focus, a solid Chicking network, and the
          right training and support, you can position your business for growth and
          success.
        </>
      }
      image={franchiseImg}
    />

    <MissionSection />

    <OperationalExcellence />

    <PartnerCta
      title={
        <>
          Partner With Chicking — Where Proven<strong> Success Meets Global Opportunity</strong>
        </>
      }
      description="BFI doesn't just provide a brand name; we deliver a complete chicking franchise business system backed by 20 years of operational expertise. From day one of your franchise journey through years of growth, our team remains dedicated to your profitability and success."
      action={{
        to: "/contact",
        label: "Franchise With Us",
      }}
    />
    <SiteFooter topEdgeImage={sharedBannerImages.edges.footerBlack}/>
  </PageLayout>
);
}

export default AboutUs;