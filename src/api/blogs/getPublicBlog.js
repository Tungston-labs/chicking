import { apiRequest } from "../client.js";

export const getPublicBlog = (blogId) =>
  apiRequest(`/blogs/${blogId}`, {
    method: "GET",
    requiresAuth: false,
  });
