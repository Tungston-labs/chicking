import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AdminBlogEditor from "../../components/AdminBlog/AdminBlogEditor.jsx";
import AdminBlogLayout from "../../components/AdminBlog/AdminBlogLayout.jsx";
import {
  EmptyState,
  EmptyText,
  EmptyTitle,
  SectionHeading,
} from "../../components/AdminBlog/AdminBlog.styles.js";
import { blogCategories } from "../../components/HomeSections/data/homeSectionsData.js";
import {
  clearBlogMutationState,
  clearCurrentBlog,
  fetchBlogById,
  selectBlogMutationState,
  selectCurrentBlog,
  selectCurrentBlogError,
  selectCurrentBlogStatus,
  updateBlogPost,
} from "../../store/blog/blogSlice.js";

const EditBlogPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogId } = useParams();
  const post = useSelector(selectCurrentBlog);
  const currentBlogError = useSelector(selectCurrentBlogError);
  const currentBlogStatus = useSelector(selectCurrentBlogStatus);
  const { updateError, updateStatus } = useSelector(selectBlogMutationState);

  useEffect(() => {
    dispatch(fetchBlogById(blogId));

    return () => {
      dispatch(clearBlogMutationState());
      dispatch(clearCurrentBlog());
    };
  }, [blogId, dispatch]);

  const handleSubmit = async (formValues, status) => {
    if (!post) {
      return;
    }

    try {
      const nextPost = await dispatch(updateBlogPost({ blogId: post.id, formValues, status })).unwrap();
      navigate(`/admin/blogs/${nextPost.id}`);
    } catch {
      // Errors are surfaced from Redux state in the editor.
    }
  };

  return (
    <AdminBlogLayout backTo="/admin/blogs" backLabel="Back to dashboard" title="">
      {currentBlogStatus === "loading" ? (
        <EmptyState>
          <EmptyTitle>Loading blog post</EmptyTitle>
          <EmptyText>Pulling the latest details from the API so you can edit safely.</EmptyText>
        </EmptyState>
      ) : post ? (
        <>
          <SectionHeading>
            <h2>Edit Blog Post</h2>
            <p>Update your article content, tags, settings, and publish status from the same editor.</p>
          </SectionHeading>
          <AdminBlogEditor
            categories={blogCategories}
            isSubmitting={updateStatus === "loading"}
            key={post.id}
            mode="edit"
            onCancel={() => navigate(`/admin/blogs/${post.id}`)}
            onSubmit={handleSubmit}
            post={post}
            submitError={updateError}
          />
        </>
      ) : (
        <EmptyState>
          <EmptyTitle>Blog post not found</EmptyTitle>
          <EmptyText>{currentBlogError || "The post you tried to edit is unavailable."}</EmptyText>
        </EmptyState>
      )}
    </AdminBlogLayout>
  );
};

export default EditBlogPost;
