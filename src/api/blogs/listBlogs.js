import { apiRequest } from "../client.js";

const buildQuery = ({ category, page, pageSize, status }) => {
  const params = new URLSearchParams();

  if (status) {
    params.set("status", status);
  }

  if (category) {
    params.set("category", category);
  }

  if (page) {
    params.set("page", String(page));
  }

  if (pageSize) {
    params.set("page_size", String(pageSize));
  }

  const queryString = params.toString();

  return queryString ? `?${queryString}` : "";
};

export const listBlogs = (query = {}) =>
  apiRequest(`/admin/blogs/${buildQuery(query)}`, {
    method: "GET",
    requiresAuth: true,
  });
