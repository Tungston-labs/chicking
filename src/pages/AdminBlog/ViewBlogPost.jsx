import { useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiEdit2,
  FiMessageSquare,
  FiSend,
  FiTag,
  FiThumbsUp,
  FiX,
} from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import AdminBlogLayout from "../../components/AdminBlog/AdminBlogLayout.jsx";
import {
  addCommentToBlogPost,
  findBlogPost,
  loadAdminBlogPosts,
  persistAdminBlogPosts,
} from "../../components/AdminBlog/adminBlogStore.js";
import {
  ActionGroup,
  CommentAuthor,
  CommentBody,
  CommentComposer,
  CommentFooter,
  CommentHeader,
  CommentInput,
  CommentItem,
  CommentList,
  CommentPanel,
  ContentArticle,
  DetailsCard,
  DetailsGrid,
  EmptyState,
  EmptyText,
  EmptyTitle,
  HeroImage,
  IconButton,
  MetaCard,
  MetaRow,
  MetaText,
  MiniAvatar,
  PrimaryButton,
  SecondaryButton,
  SectionHeading,
} from "../../components/AdminBlog/AdminBlog.styles.js";

const ViewBlogPost = () => {
  const { blogId } = useParams();
  const [posts, setPosts] = useState(() => loadAdminBlogPosts());
  const [commentInput, setCommentInput] = useState("");
  const post = findBlogPost(posts, blogId) || null;

  const handleAddComment = () => {
    const nextComment = commentInput.trim();

    if (!nextComment || !post) {
      return;
    }

    const nextPosts = addCommentToBlogPost(posts, post.id, nextComment);

    persistAdminBlogPosts(nextPosts);
    setPosts(nextPosts);
    setCommentInput("");
  };

  return (
    <AdminBlogLayout backTo="/admin/blogs" backLabel="Back to dashboard" title="">
      {post ? (
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
                  <SecondaryButton as={Link} to={`/admin/blogs/${post.id}/edit`}>
                    <FiEdit2 /> Edit Post
                  </SecondaryButton>
                </ActionGroup>
              </ActionGroup>

              <MetaRow>
                <MetaCard>
                  <MiniAvatar>RP</MiniAvatar>
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
                    <span>{[post.category, ...post.tags].join(", ")}</span>
                  </MetaText>
                </MetaCard>
              </MetaRow>

              <ContentArticle>
                <h2>{post.title}</h2>
                <HeroImage alt={post.title} src={post.image} />
                {post.content.map((paragraph, index) => (
                  <p key={`${post.id}-paragraph-${index}`}>{paragraph}</p>
                ))}
              </ContentArticle>

              <ActionGroup style={{ justifyContent: "space-between", marginTop: "1rem" }}>
                <MetaText>
                  <strong>Post Stats</strong>
                  <span>
                    {post.views} views • {post.comments} comments • {post.readTime}
                  </span>
                </MetaText>
                {post.featuredVideo ? (
                  <SecondaryButton as="a" href={post.featuredVideo} rel="noreferrer" target="_blank">
                    <FiClock /> Featured Video
                  </SecondaryButton>
                ) : null}
              </ActionGroup>
            </DetailsCard>

            <CommentPanel>
              <CommentHeader>
                <h3>Comments ({post.comments})</h3>
                <IconButton as={Link} title="Back to blogs" to="/admin/blogs">
                  <FiX />
                </IconButton>
              </CommentHeader>

              <CommentList>
                {post.commentThread.length ? (
                  post.commentThread.map((comment) => (
                    <CommentItem key={comment.id}>
                      <MiniAvatar>{comment.author.slice(0, 1)}</MiniAvatar>
                      <div>
                        <CommentAuthor>
                          <strong>{comment.author}</strong>
                          <span>{comment.age}</span>
                        </CommentAuthor>
                        <CommentBody>{comment.message}</CommentBody>
                        <CommentFooter>
                          <span>
                            <FiThumbsUp /> {comment.likes} Likes
                          </span>
                          <span>
                            <FiMessageSquare /> Reply
                          </span>
                        </CommentFooter>
                      </div>
                    </CommentItem>
                  ))
                ) : (
                  <EmptyText>No comments have been added to this blog post yet.</EmptyText>
                )}
              </CommentList>

              <CommentComposer>
                <CommentInput
                  onChange={(event) => setCommentInput(event.target.value)}
                  placeholder="Type your comment here"
                  value={commentInput}
                />
                <ActionGroup style={{ justifyContent: "flex-end", marginTop: "0.75rem" }}>
                  <PrimaryButton onClick={handleAddComment} type="button">
                    Send <FiSend />
                  </PrimaryButton>
                </ActionGroup>
              </CommentComposer>
            </CommentPanel>
          </DetailsGrid>
        </>
      ) : (
        <EmptyState>
          <EmptyTitle>Blog post not found</EmptyTitle>
          <EmptyText>The selected blog could not be loaded. It may have been removed from the admin list.</EmptyText>
        </EmptyState>
      )}
    </AdminBlogLayout>
  );
};

export default ViewBlogPost;
