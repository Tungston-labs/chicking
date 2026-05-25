import { apiRequest } from "../client.js";

export const listAdminBlogComments = (blogId) =>
  apiRequest(`/admin/blogs/${blogId}/comments`, {
    method: "GET",
    requiresAuth: true,
  });
