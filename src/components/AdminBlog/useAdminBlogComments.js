import { useEffect, useState } from "react";
import { blogsApi } from "../../api/index.js";
import {
  extractAdminComment,
  normalizeAdminCommentList,
} from "./adminBlogCommentUtils.js";

const idleMutationState = {
  action: "",
  commentId: "",
  error: "",
  message: "",
  status: "idle",
};

export const useAdminBlogComments = (blogId) => {
  const [comments, setComments] = useState([]);
  const [commentsError, setCommentsError] = useState("");
  const [commentsStatus, setCommentsStatus] = useState("idle");
  const [mutationState, setMutationState] = useState(idleMutationState);
  const [replyDrafts, setReplyDrafts] = useState({});

  const upsertComment = (nextComment) => {
    if (!nextComment?.id) {
      return;
    }

    setComments((currentComments) => {
      if (currentComments.some((comment) => comment.id === nextComment.id)) {
        return currentComments.map((comment) => (comment.id === nextComment.id ? nextComment : comment));
      }

      return [nextComment, ...currentComments];
    });
  };

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
      const response = await blogsApi.listAdminBlogComments(blogId);
      const nextComments = normalizeAdminCommentList(response);

      setComments(nextComments);
      setCommentsStatus("succeeded");
      return nextComments;
    } catch (error) {
      if (!preserveCommentsOnError) {
        setComments([]);
      }

      setCommentsError(error.message || "Unable to load blog comments right now.");
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
        const response = await blogsApi.listAdminBlogComments(blogId);

        if (!isMounted) {
          return;
        }

        setComments(normalizeAdminCommentList(response));
        setCommentsStatus("succeeded");
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setComments([]);
        setCommentsError(error.message || "Unable to load blog comments right now.");
        setCommentsStatus("failed");
      }
    };

    fetchComments();

    return () => {
      isMounted = false;
    };
  }, [blogId]);

  const handleReplyDraftChange = (commentId, value) => {
    setReplyDrafts((currentDrafts) => ({
      ...currentDrafts,
      [commentId]: value,
    }));
  };

  const handleStatusChange = async (commentId, status) => {
    setMutationState({
      action: "status",
      commentId,
      error: "",
      message: "",
      status: "loading",
    });

    try {
      const response = await blogsApi.updateBlogCommentStatus(blogId, commentId, { status });
      const nextComment = extractAdminComment(response);

      if (nextComment) {
        upsertComment(nextComment);
      } else {
        await loadComments({ preserveCommentsOnError: true });
      }

      setMutationState({
        action: "status",
        commentId,
        error: "",
        message: response?.message || "Comment status updated successfully.",
        status: "succeeded",
      });
    } catch (error) {
      setMutationState({
        action: "status",
        commentId,
        error: error.message || "Unable to update this comment right now.",
        message: "",
        status: "failed",
      });
    }
  };

  const handleDeleteComment = async (commentId) => {
    setMutationState({
      action: "delete",
      commentId,
      error: "",
      message: "",
      status: "loading",
    });

    try {
      const response = await blogsApi.deleteBlogComment(blogId, commentId);

      setComments((currentComments) => currentComments.filter((comment) => comment.id !== commentId));
      setReplyDrafts((currentDrafts) => {
        const nextDrafts = { ...currentDrafts };
        delete nextDrafts[commentId];
        return nextDrafts;
      });
      setMutationState({
        action: "delete",
        commentId,
        error: "",
        message: response?.message || "Comment deleted successfully.",
        status: "succeeded",
      });
    } catch (error) {
      setMutationState({
        action: "delete",
        commentId,
        error: error.message || "Unable to delete this comment right now.",
        message: "",
        status: "failed",
      });
    }
  };

  const handleReplySubmit = async (commentId) => {
    const message = String(replyDrafts[commentId] || "").trim();

    if (!message) {
      setMutationState({
        action: "reply",
        commentId,
        error: "Please enter a reply before sending it.",
        message: "",
        status: "failed",
      });
      return;
    }

    setMutationState({
      action: "reply",
      commentId,
      error: "",
      message: "",
      status: "loading",
    });

    try {
      const response = await blogsApi.replyBlogComment(blogId, commentId, { message });
      const nextComment = extractAdminComment(response);

      if (nextComment) {
        upsertComment(nextComment);
      } else {
        await loadComments({ preserveCommentsOnError: true });
      }

      setReplyDrafts((currentDrafts) => ({
        ...currentDrafts,
        [commentId]: "",
      }));
      setMutationState({
        action: "reply",
        commentId,
        error: "",
        message: response?.message || "Reply sent successfully.",
        status: "succeeded",
      });
    } catch (error) {
      setMutationState({
        action: "reply",
        commentId,
        error: error.message || "Unable to reply to this comment right now.",
        message: "",
        status: "failed",
      });
    }
  };

  return {
    comments,
    commentsError,
    commentsStatus,
    handleDeleteComment,
    handleReplyDraftChange,
    handleReplySubmit,
    handleStatusChange,
    mutationState,
    refreshComments: loadComments,
    replyDrafts,
  };
};
