import { useNavigate } from "react-router-dom";
import AdminBlogEditor from "../../components/AdminBlog/AdminBlogEditor.jsx";
import AdminBlogLayout from "../../components/AdminBlog/AdminBlogLayout.jsx";
import {
  createBlogPayload,
  loadAdminBlogPosts,
  persistAdminBlogPosts,
  upsertBlogPost,
} from "../../components/AdminBlog/adminBlogStore.js";
import { SectionHeading } from "../../components/AdminBlog/AdminBlog.styles.js";
import { blogCategories } from "../../components/HomeSections/data/homeSectionsData.js";

const CreateBlogPost = () => {
  const navigate = useNavigate();

  const handleSubmit = (formValues, status) => {
    const nextPost = createBlogPayload({
      formValues,
      status,
    });
    const nextPosts = upsertBlogPost(loadAdminBlogPosts(), nextPost);

    persistAdminBlogPosts(nextPosts);
    navigate(status === "Published" ? `/admin/blogs/${nextPost.id}` : `/admin/blogs/${nextPost.id}/edit`);
  };

  return (
    <AdminBlogLayout backTo="/admin/blogs" backLabel="Back to dashboard" title="">
      <SectionHeading>
        <h2>Create New Blog Post</h2>
        <p>Draft content, assign metadata, and publish without leaving the admin workflow.</p>
      </SectionHeading>
      <AdminBlogEditor
        categories={blogCategories}
        key="create-blog-post"
        mode="create"
        onCancel={() => navigate("/admin/blogs")}
        onSubmit={handleSubmit}
      />
    </AdminBlogLayout>
  );
};

export default CreateBlogPost;
