import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sharedBannerImages from "../../assets/images/sharedBannerImages.js";
import BlogSection from "./sections/BlogSection/index.jsx";
import FaqSection from "./sections/FaqSection/index.jsx";
import FranchiseStorySection from "./sections/FranchiseStorySection/index.jsx";
import PartnerCta from "./sections/PartnerCta/index.jsx";
import ReasonsSection from "./sections/ReasonsSection/index.jsx";
import SiteFooter from "./sections/SiteFooter/index.jsx";
import { fetchPublicBlogsList, selectHomeBlogPosts } from "../../store/blog/blogSlice.js";

const HomeSections = () => {
  const dispatch = useDispatch();
  const homeBlogPosts = useSelector(selectHomeBlogPosts);

  useEffect(() => {
    dispatch(fetchPublicBlogsList());
  }, [dispatch]);

  return (
    <>
      <div data-animate="fade-up">
        <BlogSection posts={homeBlogPosts} />
      </div>
      <div data-animate="fade-up">
        <FranchiseStorySection />
      </div>
      <div data-animate="fade-up">
        <FaqSection />
      </div>
      <div data-animate="fade-up">
        <ReasonsSection />
      </div>
      <div data-animate="fade-up">
        <PartnerCta />
      </div>
      <SiteFooter topEdgeImage={sharedBannerImages.edges.footerBlack}/>
    </>
  );
};

export default HomeSections;
