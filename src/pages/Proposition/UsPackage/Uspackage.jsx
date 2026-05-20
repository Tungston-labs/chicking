import React, { useEffect, useState } from "react";
import { BrochureImage, Wrapper } from "../UkPackage/Ukpackage.style.js";
import franchiseImg from "/images/proposition/logo.svg";
import brochureImg from "../../../../public/images/proposition/us.svg";
import brochureImg2 from "../../../../public/images/proposition/us2.svg";
import PageLayout from "../../../components/Layout/PageLayout";
import SiteFooter from "../../../components/HomeSections/sections/SiteFooter";
import TopBanner from "../../../components/TopBanner";
import sharedBannerImages from "../../../assets/images/sharedBannerImages.js";

const Uspackage = () => {
  const titles = ["United States Of America Franchise Package"];
  const [titleIndex] = useState(0);

  return (
    <>
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