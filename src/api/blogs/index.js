import { createBlog } from "./createBlog.js";
import { deleteBlog } from "./deleteBlog.js";
import { getBlog } from "./getBlog.js";
import { getPublicBlog } from "./getPublicBlog.js";
import { listBlogs } from "./listBlogs.js";
import { listPublicBlogs } from "./listPublicBlogs.js";
import { updateBlog } from "./updateBlog.js";

export const blogsApi = {
  createBlog,
  deleteBlog,
  getBlog,
  getPublicBlog,
  listBlogs,
  listPublicBlogs,
  updateBlog,
};

export { createBlog, deleteBlog, getBlog, getPublicBlog, listBlogs, listPublicBlogs, updateBlog };
