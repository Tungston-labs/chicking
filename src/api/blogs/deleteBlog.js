import { apiRequest } from "../client.js";

export const deleteBlog = (blogId) =>
  apiRequest(`/admin/blogs/${blogId}`, {
    method: "DELETE",
    requiresAuth: true,
  });
