import sharedBannerImages from "../../assets/images/sharedBannerImages.js";
import { blogPosts } from "./data/homeSectionsData.js";
import BlogSection from "./sections/BlogSection/index.jsx";
import FaqSection from "./sections/FaqSection/index.jsx";
import FranchiseStorySection from "./sections/FranchiseStorySection/index.jsx";
import PartnerCta from "./sections/PartnerCta/index.jsx";
import ReasonsSection from "./sections/ReasonsSection/index.jsx";
import SiteFooter from "./sections/SiteFooter/index.jsx";

const HomeSections = () => {
  return (
    <>
      <BlogSection posts={blogPosts.slice(0, 3)} />
      <FranchiseStorySection />
      <FaqSection />
      <ReasonsSection />
      <PartnerCta />
      <SiteFooter topEdgeImage={sharedBannerImages.edges.footerBlack}/>
    </>
  );
};

export default HomeSections;
