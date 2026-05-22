import { createBlog } from "./createBlog.js";
import { deleteBlog } from "./deleteBlog.js";
import { getBlog } from "./getBlog.js";
import { listBlogs } from "./listBlogs.js";
import { updateBlog } from "./updateBlog.js";

export const blogsApi = {
  createBlog,
  deleteBlog,
  getBlog,
  listBlogs,
  updateBlog,
};

export { createBlog, deleteBlog, getBlog, listBlogs, updateBlog };
