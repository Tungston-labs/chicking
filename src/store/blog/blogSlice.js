import { createSlice } from "@reduxjs/toolkit";
import {
  createBlogPost,
  deleteBlogPost,
  fetchBlogById,
  fetchBlogsList,
  fetchPublicBlogById,
  fetchPublicBlogsList,
  updateBlogPost,
} from "./blogThunks.js";
import {
  selectAdminBlogs,
  selectBlogListError,
  selectBlogListStatus,
  selectBlogMutationState,
  selectBlogState,
  selectCurrentBlog,
  selectCurrentBlogError,
  selectCurrentBlogStatus,
  selectHomeBlogPosts,
  selectPublicBlogListError,
  selectPublicBlogListStatus,
  selectPublicBlogs,
  selectPublicCurrentBlog,
  selectPublicCurrentBlogError,
  selectPublicCurrentBlogStatus,
  selectPublishedBlogs,
} from "./blogSelectors.js";

const initialState = {
  createError: "",
  createStatus: "idle",
  currentBlog: null,
  currentBlogError: "",
  currentBlogStatus: "idle",
  deleteError: "",
  deleteStatus: "idle",
  items: [],
  listError: "",
  listStatus: "idle",
  publicCurrentBlog: null,
  publicCurrentBlogError: "",
  publicCurrentBlogStatus: "idle",
  publicItems: [],
  publicListError: "",
  publicListStatus: "idle",
  updateError: "",
  updateStatus: "idle",
};

const replaceBlog = (blogs, nextBlog) => blogs.map((blog) => (blog.id === nextBlog.id ? nextBlog : blog));

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    clearBlogMutationState: (state) => {
      state.createError = "";
      state.createStatus = "idle";
      state.deleteError = "";
      state.deleteStatus = "idle";
      state.updateError = "";
      state.updateStatus = "idle";
    },
    clearCurrentBlog: (state) => {
      state.currentBlog = null;
      state.currentBlogError = "";
      state.currentBlogStatus = "idle";
    },
    clearPublicCurrentBlog: (state) => {
      state.publicCurrentBlog = null;
      state.publicCurrentBlogError = "";
      state.publicCurrentBlogStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogsList.pending, (state) => {
        state.listError = "";
        state.listStatus = "loading";
      })
      .addCase(fetchBlogsList.fulfilled, (state, action) => {
        state.items = action.payload;
        state.listStatus = "succeeded";
      })
      .addCase(fetchBlogsList.rejected, (state, action) => {
        state.items = [];
        state.listError = action.payload || "Unable to load blogs.";
        state.listStatus = "failed";
      })
      .addCase(fetchPublicBlogsList.pending, (state) => {
        state.publicListError = "";
        state.publicListStatus = "loading";
      })
      .addCase(fetchPublicBlogsList.fulfilled, (state, action) => {
        state.publicItems = action.payload;
        state.publicListStatus = "succeeded";
      })
      .addCase(fetchPublicBlogsList.rejected, (state, action) => {
        state.publicItems = [];
        state.publicListError = action.payload || "Unable to load published blogs.";
        state.publicListStatus = "failed";
      })
      .addCase(fetchBlogById.pending, (state) => {
        state.currentBlogError = "";
        state.currentBlogStatus = "loading";
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.currentBlog = action.payload;
        state.currentBlogStatus = "succeeded";

        const existingBlog = state.items.find((blog) => blog.id === action.payload.id);
        state.items = existingBlog ? replaceBlog(state.items, action.payload) : [action.payload, ...state.items];
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.currentBlog = null;
        state.currentBlogError = action.payload || "Unable to load this blog.";
        state.currentBlogStatus = "failed";
      })
      .addCase(fetchPublicBlogById.pending, (state) => {
        state.publicCurrentBlogError = "";
        state.publicCurrentBlogStatus = "loading";
      })
      .addCase(fetchPublicBlogById.fulfilled, (state, action) => {
        state.publicCurrentBlog = action.payload;
        state.publicCurrentBlogStatus = "succeeded";

        const existingBlog = state.publicItems.find((blog) => blog.id === action.payload.id);
        state.publicItems = existingBlog
          ? replaceBlog(state.publicItems, action.payload)
          : [action.payload, ...state.publicItems];
      })
      .addCase(fetchPublicBlogById.rejected, (state, action) => {
        state.publicCurrentBlog = null;
        state.publicCurrentBlogError = action.payload || "Unable to load this article.";
        state.publicCurrentBlogStatus = "failed";
      })
      .addCase(createBlogPost.pending, (state) => {
        state.createError = "";
        state.createStatus = "loading";
      })
      .addCase(createBlogPost.fulfilled, (state, action) => {
        state.createStatus = "succeeded";
        state.currentBlog = action.payload;
        state.items = [action.payload, ...state.items.filter((blog) => blog.id !== action.payload.id)];
      })
      .addCase(createBlogPost.rejected, (state, action) => {
        state.createError = action.payload || "Unable to create this blog.";
        state.createStatus = "failed";
      })
      .addCase(updateBlogPost.pending, (state) => {
        state.updateError = "";
        state.updateStatus = "loading";
      })
      .addCase(updateBlogPost.fulfilled, (state, action) => {
        state.updateStatus = "succeeded";
        state.currentBlog = action.payload;
        state.items = state.items.some((blog) => blog.id === action.payload.id)
          ? replaceBlog(state.items, action.payload)
          : [action.payload, ...state.items];
      })
      .addCase(updateBlogPost.rejected, (state, action) => {
        state.updateError = action.payload || "Unable to update this blog.";
        state.updateStatus = "failed";
      })
      .addCase(deleteBlogPost.pending, (state) => {
        state.deleteError = "";
        state.deleteStatus = "loading";
      })
      .addCase(deleteBlogPost.fulfilled, (state, action) => {
        state.deleteStatus = "succeeded";
        state.items = state.items.filter((blog) => blog.id !== action.payload);

        if (state.currentBlog?.id === action.payload) {
          state.currentBlog = null;
          state.currentBlogStatus = "idle";
        }
      })
      .addCase(deleteBlogPost.rejected, (state, action) => {
        state.deleteError = action.payload || "Unable to delete this blog.";
        state.deleteStatus = "failed";
      });
  },
});

export const { clearBlogMutationState, clearCurrentBlog, clearPublicCurrentBlog } = blogSlice.actions;

export {
  createBlogPost,
  deleteBlogPost,
  fetchBlogById,
  fetchBlogsList,
  fetchPublicBlogById,
  fetchPublicBlogsList,
  selectAdminBlogs,
  selectBlogListError,
  selectBlogListStatus,
  selectBlogMutationState,
  selectBlogState,
  selectCurrentBlog,
  selectCurrentBlogError,
  selectCurrentBlogStatus,
  selectHomeBlogPosts,
  selectPublicBlogListError,
  selectPublicBlogListStatus,
  selectPublicBlogs,
  selectPublicCurrentBlog,
  selectPublicCurrentBlogError,
  selectPublicCurrentBlogStatus,
  selectPublishedBlogs,
  updateBlogPost,
};

export default blogSlice.reducer;
