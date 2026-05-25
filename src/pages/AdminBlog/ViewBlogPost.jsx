import { useEffect } from "react";
import {
  FiCalendar,
  FiClock,
  FiEdit2,
  FiTag,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import AdminBlogCommentsPanel from "../../components/AdminBlog/AdminBlogCommentsPanel.jsx";
import AdminBlogLayout from "../../components/AdminBlog/AdminBlogLayout.jsx";
import {
  ActionGroup,
  ContentArticle,
  DetailsCard,
  DetailsGrid,
  EmptyState,
  EmptyText,
  EmptyTitle,
  HeroImage,
  MetaCard,
  MetaRow,
  MetaText,
  MiniAvatar,
  SecondaryButton,
  SectionHeading,
} from "../../components/AdminBlog/AdminBlog.styles.js";
import {
  clearCurrentBlog,
  fetchBlogById,
  selectCurrentBlog,
  selectCurrentBlogError,
  selectCurrentBlogStatus,
} from "../../store/blog/blogSlice.js";
import { getAvatarInitials } from "../../store/blog/blogUtils.js";

const ViewBlogPost = () => {
  const dispatch = useDispatch();
  const { blogId } = useParams();
  const post = useSelector(selectCurrentBlog);
  const currentBlogError = useSelector(selectCurrentBlogError);
  const currentBlogStatus = useSelector(selectCurrentBlogStatus);

  useEffect(() => {
    dispatch(fetchBlogById(blogId));
    return () => dispatch(clearCurrentBlog());
  }, [blogId, dispatch]);

  return (
    <AdminBlogLayout backTo="/dashboard/blogs" backLabel="Back to dashboard" title="">
      {currentBlogStatus === "loading" ? (
        <EmptyState>
          <EmptyTitle>Loading blog post</EmptyTitle>
          <EmptyText>Fetching the latest blog details from the API.</EmptyText>
        </EmptyState>
      ) : post ? (
        <>
          <SectionHeading>
            <h2>View Blog Post</h2>
            <p>Review post content, metadata, and comment activity for this specific blog entry.</p>
          </SectionHeading>

          <DetailsGrid>
            <DetailsCard>
              <ActionGroup style={{ justifyContent: "space-between", marginBottom: "1rem" }}>
                <ActionGroup>
                  <MetaText>
                    <strong>Status</strong>
                    <span>{post.status}</span>
                  </MetaText>
                </ActionGroup>
                <ActionGroup>
                  <SecondaryButton as={Link} to={`/dashboard/blogs/${post.id}/edit`}>
                    <FiEdit2 /> Edit Post
                  </SecondaryButton>
                </ActionGroup>
              </ActionGroup>

              <MetaRow>
                <MetaCard>
                  <MiniAvatar>{getAvatarInitials(post.author)}</MiniAvatar>
                  <MetaText>
                    <strong>Author</strong>
                    <span>{post.author}</span>
                  </MetaText>
                </MetaCard>
                <MetaCard>
                  <FiCalendar />
                  <MetaText>
                    <strong>Published</strong>
                    <span>{post.publishedAt}</span>
                  </MetaText>
                </MetaCard>
                <MetaCard>
                  <FiTag />
                  <MetaText>
                    <strong>Category & Tags</strong>
                    <span>{[post.category, ...post.tags.filter((tag) => tag !== post.category)].join(", ")}</span>
                  </MetaText>
                </MetaCard>
              </MetaRow>

              <ContentArticle>
                <h2>{post.title}</h2>
                <HeroImage alt={post.title} src={post.image} />
                <div dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }} />
              </ContentArticle>

              <ActionGroup style={{ justifyContent: "space-between", marginTop: "1rem" }}>
                <MetaText>
                  <strong>Post Stats</strong>
                  <span>
                    {post.views} views • {post.comments} comments • {post.readTime}
                  </span>
                </MetaText>
                {post.featuredVideo || post.url ? (
                  <SecondaryButton as="a" href={post.featuredVideo || post.url} rel="noreferrer" target="_blank">
                    <FiClock /> Featured Video
                  </SecondaryButton>
                ) : null}
              </ActionGroup>
            </DetailsCard>

            <DetailsCard>
              <ActionGroup style={{ justifyContent: "space-between", marginBottom: "1rem" }}>
                <MetaText>
                  <strong>Comments</strong>
                  <span>
                    {post.comments} total • {post.pendingComments} pending
                  </span>
                </MetaText>
              </ActionGroup>
              <AdminBlogCommentsPanel
                blogId={post.id}
                serverCommentCount={post.comments}
                serverPendingCount={post.pendingComments}
              />
            </DetailsCard>
          </DetailsGrid>
        </>
      ) : (
        <EmptyState>
          <EmptyTitle>Blog post not found</EmptyTitle>
          <EmptyText>{currentBlogError || "The selected blog could not be loaded."}</EmptyText>
        </EmptyState>
      )}
    </AdminBlogLayout>
  );
};

export default ViewBlogPost;
