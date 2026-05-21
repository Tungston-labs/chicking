import { useNavigate, useParams } from "react-router-dom";
import AdminBlogEditor from "../../components/AdminBlog/AdminBlogEditor.jsx";
import AdminBlogLayout from "../../components/AdminBlog/AdminBlogLayout.jsx";
import {
  createBlogPayload,
  findBlogPost,
  loadAdminBlogPosts,
  persistAdminBlogPosts,
  upsertBlogPost,
} from "../../components/AdminBlog/adminBlogStore.js";
import {
  EmptyState,
  EmptyText,
  EmptyTitle,
  SectionHeading,
} from "../../components/AdminBlog/AdminBlog.styles.js";
import { blogCategories } from "../../components/HomeSections/data/homeSectionsData.js";

const EditBlogPost = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const storedPosts = loadAdminBlogPosts();
  const post = findBlogPost(storedPosts, blogId) || null;

  const handleSubmit = (formValues, status) => {
    if (!post) {
      return;
    }

    const nextPost = createBlogPayload({
      existingPost: post,
      formValues,
      status,
    });
    const nextPosts = upsertBlogPost(loadAdminBlogPosts(), nextPost);

    persistAdminBlogPosts(nextPosts);
    navigate(`/admin/blogs/${nextPost.id}`);
  };

  return (
    <AdminBlogLayout backTo="/admin/blogs" backLabel="Back to dashboard" title="">
      {post ? (
        <>
          <SectionHeading>
            <h2>Edit Blog Post</h2>
            <p>Update your article content, tags, settings, and publish status from the same editor.</p>
          </SectionHeading>
          <AdminBlogEditor
            categories={blogCategories}
            key={post.id}
            mode="edit"
            onCancel={() => navigate(`/admin/blogs/${post.id}`)}
            onSubmit={handleSubmit}
            post={post}
          />
        </>
      ) : (
        <EmptyState>
          <EmptyTitle>Blog post not found</EmptyTitle>
          <EmptyText>The post you tried to edit is unavailable or may have been removed from local storage.</EmptyText>
        </EmptyState>
      )}
    </AdminBlogLayout>
  );
};

export default EditBlogPost;
