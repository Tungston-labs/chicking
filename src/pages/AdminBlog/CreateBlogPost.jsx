import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminBlogEditor from "../../components/AdminBlog/AdminBlogEditor.jsx";
import AdminBlogLayout from "../../components/AdminBlog/AdminBlogLayout.jsx";
import { SectionHeading } from "../../components/AdminBlog/AdminBlog.styles.js";
import { blogCategories } from "../../components/HomeSections/data/homeSectionsData.js";
import {
  clearBlogMutationState,
  createBlogPost,
  selectBlogMutationState,
} from "../../store/blog/blogSlice.js";

const CreateBlogPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createError, createStatus } = useSelector(selectBlogMutationState);

  useEffect(() => () => dispatch(clearBlogMutationState()), [dispatch]);

  const handleSubmit = async (formValues, status) => {
    try {
      const nextPost = await dispatch(createBlogPost({ formValues, status })).unwrap();

      navigate(status === "Published" ? `/admin/blogs/${nextPost.id}` : `/admin/blogs/${nextPost.id}/edit`);
    } catch {
      // Errors are surfaced from Redux state in the editor.
    }
  };

  return (
    <AdminBlogLayout backTo="/admin/blogs" backLabel="Back to dashboard" title="">
      <SectionHeading>
        <h2>Create New Blog Post</h2>
        <p>Draft content, assign metadata, and publish without leaving the admin workflow.</p>
      </SectionHeading>
      <AdminBlogEditor
        categories={blogCategories}
        isSubmitting={createStatus === "loading"}
        key="create-blog-post"
        mode="create"
        onCancel={() => navigate("/admin/blogs")}
        onSubmit={handleSubmit}
        submitError={createError}
      />
    </AdminBlogLayout>
  );
};

export default CreateBlogPost;
