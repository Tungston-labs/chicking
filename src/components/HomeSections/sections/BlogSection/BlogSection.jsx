import SharedBanner from "../../../SharedBanner/index.jsx";
import BlogCard from "../../components/BlogCard/index.jsx";
import SectionHeader from "../../components/SectionHeader/index.jsx";
import { blogPosts } from "../../data/homeSectionsData.js";
import { BlogGrid } from "./BlogSection.styles.js";

const BlogSection = () => (
  <SharedBanner
    compact
    background="#ffffff"
    textColor="#171717"
  >
    <SectionHeader
      align="left"
      eyebrowAsTitle
      eyebrow={
        <>
          Our <strong>Blog</strong>
        </>
      }
      description="Explore expert tips, brand highlights, and trends shaping our journey and the world of quick-service dining."
    />
    <BlogGrid>
      {blogPosts.map((post) => (
        <BlogCard key={post.title} {...post} />
      ))}
    </BlogGrid>
  </SharedBanner>
);

export default BlogSection;
