import { useState } from "react";
import { BrochureImage, Wrapper } from "./ThaiPackage.styles.js";
import PageLayout from "../../../components/Layout/PageLayout";
import SiteFooter from "../../../components/HomeSections/sections/SiteFooter/index.jsx";
import TopBanner from "../../../components/TopBanner";
import SEO from "../../../components/Common/SEO.jsx";
import sharedBannerImages from "../../../assets/images/sharedBannerImages.js";

const franchiseImg = "/images/proposition/logo.svg";
const brochureImg = "/images/proposition/Thai1.png";
const brochureImg2 = "/images/proposition/Thai2.png";

const ThaiPackage = () => {
  const titles = ["Thailand Franchise Package"];
  const [titleIndex] = useState(0);

  return (
    <>
      <SEO
        title="Thailand Franchise Package | Chicking Opportunity"
        description="Explore the Thailand franchise package brochure and market opportunity details for Chicking QSR outlets."
        canonicalPath="/thai-package"
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
          alt="Thailand Franchise Brochure Page 1"
        />

        <BrochureImage
          src={brochureImg2}
          alt="Thailand Franchise Brochure Page 2"
        />
      </Wrapper>

      <SiteFooter topEdgeImage={sharedBannerImages.edges.footerBlack} />
    </>
  );
};

export default ThaiPackage;

