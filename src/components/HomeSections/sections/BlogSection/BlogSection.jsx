import SharedBanner from "../../../SharedBanner/index.jsx";
import BlogCard from "../../components/BlogCard/index.jsx";
import SectionHeader from "../../components/SectionHeader/index.jsx";
import { blogPosts } from "../../data/homeSectionsData.js";
import { BlogGrid } from "./BlogSection.styles.js";

const BlogSection = ({
  background = "#ffffff",
  compact = true,
  description = "Explore expert tips, brand highlights, and trends shaping our journey and the world of quick-service dining.",
  posts = blogPosts,
  textColor = "#171717",
  title = (
    <>
      Our <strong>Blog</strong>
    </>
  ),
}) => (
  <SharedBanner
    compact={compact}
    background={background}
    textColor={textColor}
  >
    <SectionHeader
      align="left"
      eyebrowAsTitle
      eyebrow={title}
      description={description}
    />
    <BlogGrid>
      {posts.map((post) => (
        <BlogCard key={post.id || post.title} {...post} />
      ))}
    </BlogGrid>
  </SharedBanner>
);

export default BlogSection;
