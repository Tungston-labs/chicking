import { apiRequest } from "../client.js";

export const getPublicBlogComments = (blogId) =>
  apiRequest(`/blogs/${blogId}/comments`, {
    method: "GET",
    requiresAuth: false,
  });
