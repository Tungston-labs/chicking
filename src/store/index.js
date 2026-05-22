import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import blogReducer from "./blog/blogSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogReducer,
  },
});

export default store;
