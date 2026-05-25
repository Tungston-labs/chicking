import { apiRequest } from "../client.js";

export const updateBlogCommentStatus = (blogId, commentId, payload) =>
  apiRequest(`/admin/blogs/${blogId}/comments/${commentId}`, {
    body: payload,
    method: "PATCH",
    requiresAuth: true,
  });
