import { createAsyncThunk } from "@reduxjs/toolkit";
import { blogsApi } from "../../api/index.js";
import {
  BLOG_FETCH_PAGE_SIZE,
  buildBlogRequestPayload,
  normalizeBlogList,
  unwrapBlogPayload,
} from "./blogUtils.js";

const getErrorMessage = (error, fallbackMessage) => error?.message || fallbackMessage;

export const fetchBlogsList = createAsyncThunk(
  "blogs/fetchBlogsList",
  async ({ category, status } = {}, { rejectWithValue }) => {
    try {
      const response = await blogsApi.listBlogs({
        category,
        page: 1,
        pageSize: BLOG_FETCH_PAGE_SIZE,
        status,
      });

      return normalizeBlogList(response);
    } catch (error) {
      return rejectWithValue(getErrorMessage(error, "Unable to load blogs right now."));
    }
  }
);

export const fetchBlogById = createAsyncThunk(
  "blogs/fetchBlogById",
  async (blogId, { rejectWithValue }) => {
    try {
      const response = await blogsApi.getBlog(blogId);
      return unwrapBlogPayload(response);
    } catch (error) {
      return rejectWithValue(getErrorMessage(error, "Unable to load this blog right now."));
    }
  }
);

export const createBlogPost = createAsyncThunk(
  "blogs/createBlogPost",
  async ({ formValues, status }, { rejectWithValue }) => {
    try {
      const response = await blogsApi.createBlog(buildBlogRequestPayload({ formValues, status }));
      return unwrapBlogPayload(response);
    } catch (error) {
      return rejectWithValue(getErrorMessage(error, "Unable to create this blog right now."));
    }
  }
);

export const updateBlogPost = createAsyncThunk(
  "blogs/updateBlogPost",
  async ({ blogId, formValues, status }, { getState, rejectWithValue }) => {
    try {
      const existingBlog =
        getState().blogs.currentBlog?.id === blogId
          ? getState().blogs.currentBlog
          : getState().blogs.items.find((blog) => blog.id === blogId) || null;

      const response = await blogsApi.updateBlog(
        blogId,
        buildBlogRequestPayload({
          existingBlog,
          formValues,
          status,
        })
      );

      return unwrapBlogPayload(response);
    } catch (error) {
      return rejectWithValue(getErrorMessage(error, "Unable to update this blog right now."));
    }
  }
);

export const deleteBlogPost = createAsyncThunk(
  "blogs/deleteBlogPost",
  async (blogId, { rejectWithValue }) => {
    try {
      await blogsApi.deleteBlog(blogId);
      return blogId;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error, "Unable to delete this blog right now."));
    }
  }
);
