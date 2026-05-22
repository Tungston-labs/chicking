import { apiRequest } from "../client.js";

export const getBlog = (blogId) =>
  apiRequest(`/admin/blogs/${blogId}`, {
    method: "GET",
    requiresAuth: true,
  });
