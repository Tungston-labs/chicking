import { apiRequest } from "../client.js";

export const createBlog = (payload) =>
  apiRequest("/admin/blogs/", {
    body: payload,
    method: "POST",
    requiresAuth: true,
  });
