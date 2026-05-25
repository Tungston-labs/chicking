import { apiRequest } from "../client.js";

export const deleteBlogComment = (blogId, commentId) =>
  apiRequest(`/admin/blogs/${blogId}/comments/${commentId}`, {
    method: "DELETE",
    requiresAuth: true,
  });
