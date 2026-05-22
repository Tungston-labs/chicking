import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sharedBannerImages from "../../assets/images/sharedBannerImages.js";
import BlogSection from "./sections/BlogSection/index.jsx";
import FaqSection from "./sections/FaqSection/index.jsx";
import FranchiseStorySection from "./sections/FranchiseStorySection/index.jsx";
import PartnerCta from "./sections/PartnerCta/index.jsx";
import ReasonsSection from "./sections/ReasonsSection/index.jsx";
import SiteFooter from "./sections/SiteFooter/index.jsx";
import { selectIsAuthenticated } from "../../store/auth/authSlice.js";
import { fetchBlogsList, selectHomeBlogPosts } from "../../store/blog/blogSlice.js";

const HomeSections = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const homeBlogPosts = useSelector(selectHomeBlogPosts);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchBlogsList());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <>
      <BlogSection posts={homeBlogPosts} />
      <FranchiseStorySection />
      <FaqSection />
      <ReasonsSection />
      <PartnerCta />
      <SiteFooter topEdgeImage={sharedBannerImages.edges.footerBlack}/>
    </>
  );
};

export default HomeSections;
