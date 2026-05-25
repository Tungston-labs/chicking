import { useEffect, useState } from "react";
import { blogsApi } from "../../../api/index.js";
import {
  buildCommentPayload,
  EMPTY_COMMENT_FORM,
  normalizePublicComments,
} from "./newsArticleCommentUtils.js";

export const usePublicBlogComments = (blogId) => {
  const [comments, setComments] = useState([]);
  const [commentsError, setCommentsError] = useState("");
  const [commentsStatus, setCommentsStatus] = useState("idle");
  const [commentSubmitStatus, setCommentSubmitStatus] = useState("idle");
  const [commentSubmitMessage, setCommentSubmitMessage] = useState("");
  const [commentForm, setCommentForm] = useState(EMPTY_COMMENT_FORM);

  const loadComments = async ({ preserveCommentsOnError = false } = {}) => {
    if (!blogId) {
      setComments([]);
      setCommentsError("");
      setCommentsStatus("idle");
      return;
    }

    setCommentsStatus("loading");
    setCommentsError("");

    try {
      const response = await blogsApi.getPublicBlogComments(blogId);
      const nextComments = normalizePublicComments(response);

      setComments(nextComments);
      setCommentsStatus("succeeded");
      return nextComments;
    } catch (error) {
      if (!preserveCommentsOnError) {
        setComments([]);
      }

      setCommentsError(error.message || "Unable to load comments right now.");
      setCommentsStatus("failed");
      throw error;
    }
  };

  useEffect(() => {
    let isMounted = true;

    const fetchComments = async () => {
      if (!blogId) {
        setComments([]);
        setCommentsError("");
        setCommentsStatus("idle");
        return;
      }

      setCommentsStatus("loading");
      setCommentsError("");

      try {
        const response = await blogsApi.getPublicBlogComments(blogId);

        if (!isMounted) {
          return;
        }

        setComments(normalizePublicComments(response));
        setCommentsStatus("succeeded");
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setComments([]);
        setCommentsError(error.message || "Unable to load comments right now.");
        setCommentsStatus("failed");
      }
    };

    fetchComments();

    return () => {
      isMounted = false;
    };
  }, [blogId]);

  const handleCommentFieldChange = (field) => (event) => {
    const nextValue = event.target.value;

    setCommentForm((currentForm) => ({
      ...currentForm,
      [field]: nextValue,
    }));
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    const payload = buildCommentPayload(commentForm);

    if (!payload.name || !payload.email || !payload.message) {
      setCommentSubmitStatus("failed");
      setCommentSubmitMessage("Please fill in your name, email, and comment.");
      return;
    }

    setCommentSubmitStatus("loading");
    setCommentSubmitMessage("");

    try {
      const response = await blogsApi.addPublicBlogComment(blogId, payload);

      setCommentForm(EMPTY_COMMENT_FORM);
      setCommentSubmitStatus("succeeded");
      setCommentSubmitMessage(
        response?.message || "Comment submitted successfully and is pending review."
      );

      try {
        await loadComments({ preserveCommentsOnError: true });
      } catch {
        // Keep the current approved comments list if the refresh fails after a successful submission.
      }
    } catch (error) {
      setCommentSubmitStatus("failed");
      setCommentSubmitMessage(error.message || "Unable to submit your comment right now.");
    }
  };

  return {
    commentForm,
    commentSubmitMessage,
    commentSubmitStatus,
    comments,
    commentsError,
    commentsStatus,
    handleCommentFieldChange,
    handleCommentSubmit,
    refreshComments: loadComments,
  };
};
