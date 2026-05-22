import { apiRequest } from "../client.js";

const buildQuery = ({ category } = {}) => {
  const params = new URLSearchParams();

  if (category) {
    params.set("category", category);
  }

  const queryString = params.toString();

  return queryString ? `?${queryString}` : "";
};

export const listPublicBlogs = (query = {}) =>
  apiRequest(`/blogs/${buildQuery(query)}`, {
    method: "GET",
    requiresAuth: false,
  });
