import { apiRequest } from "../client.js";

export const addPublicBlogComment = (blogId, payload) =>
  apiRequest(`/blogs/${blogId}/comments`, {
    body: payload,
    method: "POST",
    requiresAuth: false,
  });
