import { normalizeBlogStatus } from "./blogUtils.js";

export const selectBlogState = (state) => state.blogs;
export const selectAdminBlogs = (state) => state.blogs.items;
export const selectPublicBlogs = (state) => state.blogs.publicItems;
export const selectBlogListStatus = (state) => state.blogs.listStatus;
export const selectBlogListError = (state) => state.blogs.listError;
export const selectCurrentBlog = (state) => state.blogs.currentBlog;
export const selectCurrentBlogStatus = (state) => state.blogs.currentBlogStatus;
export const selectCurrentBlogError = (state) => state.blogs.currentBlogError;
export const selectPublicBlogListStatus = (state) => state.blogs.publicListStatus;
export const selectPublicBlogListError = (state) => state.blogs.publicListError;
export const selectPublicCurrentBlog = (state) => state.blogs.publicCurrentBlog;
export const selectPublicCurrentBlogStatus = (state) => state.blogs.publicCurrentBlogStatus;
export const selectPublicCurrentBlogError = (state) => state.blogs.publicCurrentBlogError;
export const selectBlogMutationState = (state) => ({
  createError: state.blogs.createError,
  createStatus: state.blogs.createStatus,
  deleteError: state.blogs.deleteError,
  deleteStatus: state.blogs.deleteStatus,
  updateError: state.blogs.updateError,
  updateStatus: state.blogs.updateStatus,
});
export const selectPublishedBlogs = (state) => {
  return state.blogs.publicItems.filter((post) => {
    const normalizedStatus = normalizeBlogStatus(post.status);
    return normalizedStatus !== "Draft" && normalizedStatus !== "Trash";
  });
};
export const selectHomeBlogPosts = (state) => {
  const publishedPosts = selectPublishedBlogs(state);
  return publishedPosts.slice(0, 4);
};
