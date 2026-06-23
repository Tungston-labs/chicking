import SharedBanner from "../../../SharedBanner/index.jsx";
import BlogCard from "../../components/BlogCard/index.jsx";
import SectionHeader from "../../components/SectionHeader/index.jsx";
import {
  BlogGrid,
  BlogSkeletonBlock,
  BlogSkeletonBody,
  BlogSkeletonCard,
  BlogStatus,
} from "./BlogSection.styles.js";

const SKELETON_COUNT = 4;

const BlogCardSkeleton = () => (
  <BlogSkeletonCard aria-hidden="true">
    <BlogSkeletonBlock $height="19.2rem" />
    <BlogSkeletonBody>
      <BlogSkeletonBlock $height="2.35rem" $width="68%" />
      <BlogSkeletonBlock $height="1rem" $margin="1.35rem 0 0" />
      <BlogSkeletonBlock $height="1rem" $margin="0.65rem 0 0" $width="88%" />
      <BlogSkeletonBlock $height="0.85rem" $margin="1.2rem 0 0" />
      <BlogSkeletonBlock $height="0.85rem" $margin="0.55rem 0 0" $width="74%" />
    </BlogSkeletonBody>
  </BlogSkeletonCard>
);

const BlogSection = ({
  background = "#ffffff",
  compact = true,
  description = "Explore expert tips, brand highlights, and trends shaping our journey and the world of quick-service dining.",
  error = "",
  isLoading = false,
  posts = [],
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
      {posts.length > 0
        ? posts.map((post) => (
            <BlogCard key={post.id || post.title} {...post} />
          ))
        : null}

      {isLoading && posts.length === 0
        ? Array.from({ length: SKELETON_COUNT }, (_, index) => (
            <BlogCardSkeleton key={index} />
          ))
        : null}

      {!isLoading && error && posts.length === 0 ? (
        <BlogStatus>{error}</BlogStatus>
      ) : null}
    </BlogGrid>
  </SharedBanner>
);

export default BlogSection;
