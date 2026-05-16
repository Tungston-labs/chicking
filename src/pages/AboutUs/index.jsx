import React, { useEffect, useState } from "react";
import FranchiseBanner from "../../components/TopBanner";
import OperationalExcellence from "../../components/AboutUs/OperationalExcellence";
import PageLayout from "../../components/Layout/PageLayout";
import franchiseImg from "../../../public/images/franchise.svg";
import MissionSection from "../../components/AboutUs/MissionSection";

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
            right
            <br />
            training and support, you can position your business for growth and
            success.
          </>
        }
        image={franchiseImg}
      />
      <MissionSection></MissionSection>
      <OperationalExcellence />
    </PageLayout>
  );
};

export default AboutUs;
