import React, { useEffect, useState } from "react";
import { BrochureImage, Wrapper } from "../UkPackage/Ukpackage.style.js";
import PageLayout from "../../../components/Layout/PageLayout";
import SiteFooter from "../../../components/HomeSections/sections/SiteFooter/index.jsx";
import TopBanner from "../../../components/TopBanner";
import SEO from "../../../components/Common/SEO.jsx";
import sharedBannerImages from "../../../assets/images/sharedBannerImages.js";

const franchiseImg = "/images/proposition/logo.svg";
const brochureImg = "/images/proposition/us.svg";
const brochureImg2 = "/images/proposition/us2.svg";

const Uspackage = () => {
  const titles = ["United States Of America Franchise Package"];
  const [titleIndex] = useState(0);

  return (
    <>
      <SEO
        title="US Franchise Package | Chicking Opportunity"
        description="Explore the United States of America franchise package brochure and market expansion details for Chicking outlets."
        canonicalPath="/us-package"
      />
      <PageLayout />

      <TopBanner
        title={titles[titleIndex]}
        description={
          <>
            Yet with careful planning, focus, a solid Chicking network,
            and the right training and support.
          </>
        }
        image={franchiseImg}
      />

      <Wrapper>
           <BrochureImage
          src={brochureImg}
          alt="UK Franchise Brochure"
        />
    
        <BrochureImage
          src={brochureImg2}
          alt="UK Franchise Brochure"
        />
      </Wrapper>

      <SiteFooter topEdgeImage={sharedBannerImages.edges.footerBlack} />
    </>
  );
};

export default Uspackage;

