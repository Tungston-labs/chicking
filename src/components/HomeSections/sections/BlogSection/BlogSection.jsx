import BlogCard from "../../components/BlogCard/index.jsx";
import SectionFrame from "../../components/SectionFrame/index.jsx";
import SectionHeader from "../../components/SectionHeader/index.jsx";
import { blogPosts } from "../../data/homeSectionsData.js";
import { BlogGrid } from "./BlogSection.styles.js";

const BlogSection = () => (
  <SectionFrame compact>
    <SectionHeader
      align="left"
      eyebrowAsTitle
      eyebrow={
        <>        
          Our <strong>Blog</strong>
        </>
      }
      description="Explore Expert Tips, B   rand Highlights, And Trends Shaping Our Journey And The World Of Quick-Service Dining."
    />
    <BlogGrid>
      {blogPosts.map((post) => (
        <BlogCard key={post.title} {...post} />
      ))}
    </BlogGrid>
  </SectionFrame>
);

export default BlogSection;
