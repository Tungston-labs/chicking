import React, { useEffect, useState } from "react";
import CompetitiveAdvantage from "../../components/Proposition/CompetitiveAdvantage/CompetitiveAdvantage";
import PageLayout from "../../components/Layout/PageLayout";
import MajorMarkets from "../../components/Proposition/MajorMarkets/MajorMarkets";
import SiteFooter from "../../components/HomeSections/sections/SiteFooter";
import TopBanner from "../../components/TopBanner";
import sharedBannerImages from "../../assets/images/sharedBannerImages.js";
import { useNavigate } from "react-router-dom";
import PartnerCta from "../../components/HomeSections/sections/PartnerCta/PartnerCta.jsx";

const franchiseImg = "/images/proposition/logo.svg";
const Propositions = () => {
      const navigate = useNavigate();
    const titles = [
        "Partner With A Global Franchise Leader",
        "Turn Ambition Into International Success",
        " Scale Your Business With a Proven Global Model",
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
        <>
        <PageLayout/>
        <TopBanner
            key={titleIndex}
            title={titles[titleIndex]}
            description={
                <>
                    Yet with careful planning, focus, a solid Chicking network, and the right
                  
                    training and support, you can position your business for growth and success.
                </>
            }
            image={franchiseImg}
        />
        <CompetitiveAdvantage/>
        <MajorMarkets/>
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

export default Propositions;
