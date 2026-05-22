import { apiRequest } from "../client.js";

export const updateBlog = (blogId, payload) =>
  apiRequest(`/admin/blogs/${blogId}`, {
    body: payload,
    method: "PUT",
    requiresAuth: true,
  });
