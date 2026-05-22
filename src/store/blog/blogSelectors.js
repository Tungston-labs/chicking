import { BLOG_FETCH_PAGE_SIZE, getFallbackPublishedBlogs } from "./blogUtils.js";

export const selectBlogState = (state) => state.blogs;
export const selectAdminBlogs = (state) => state.blogs.items;
export const selectBlogListStatus = (state) => state.blogs.listStatus;
export const selectBlogListError = (state) => state.blogs.listError;
export const selectCurrentBlog = (state) => state.blogs.currentBlog;
export const selectCurrentBlogStatus = (state) => state.blogs.currentBlogStatus;
export const selectCurrentBlogError = (state) => state.blogs.currentBlogError;
export const selectBlogMutationState = (state) => ({
  createError: state.blogs.createError,
  createStatus: state.blogs.createStatus,
  deleteError: state.blogs.deleteError,
  deleteStatus: state.blogs.deleteStatus,
  updateError: state.blogs.updateError,
  updateStatus: state.blogs.updateStatus,
});
export const selectPublishedBlogs = (state) => {
  const publishedPosts = state.blogs.items.filter((post) => post.status === "Published");
  return publishedPosts.length ? publishedPosts : getFallbackPublishedBlogs(BLOG_FETCH_PAGE_SIZE);
};
export const selectHomeBlogPosts = (state) => {
  const publishedPosts = selectPublishedBlogs(state);
  return publishedPosts.slice(0, 4);
};
