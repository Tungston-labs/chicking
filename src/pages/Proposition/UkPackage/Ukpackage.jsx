import React, { useEffect, useState } from "react";
import { BrochureImage, Wrapper } from "./Ukpackage.style.js";
import PageLayout from "../../../components/Layout/PageLayout";
import SiteFooter from "../../../components/HomeSections/sections/SiteFooter/index.jsx";
import TopBanner from "../../../components/TopBanner";
import SEO from "../../../components/Common/SEO.jsx";
import sharedBannerImages from "../../../assets/images/sharedBannerImages.js";

const franchiseImg = "/images/proposition/logo.svg";
const brochureImg = "/images/proposition/uk.svg";

const Ukpackage = () => {
  const titles = ["United Kingdom Franchise Package"];
  const [titleIndex] = useState(0);

  return (
    <>
      <SEO
        title="UK Franchise Package | Chicking Opportunity"
        description="Explore the United Kingdom franchise package brochure and investment details for Chicking QSR outlets."
        canonicalPath="/uk-package"
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
      </Wrapper>

      <SiteFooter topEdgeImage={sharedBannerImages.edges.footerBlack} />
    </>
  );
};

export default Ukpackage;

