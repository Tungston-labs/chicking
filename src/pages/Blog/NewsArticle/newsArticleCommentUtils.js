export const EMPTY_COMMENT_FORM = {
  email: "",
  message: "",
  name: "",
};

const extractCommentCollection = (payload) => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (!payload || typeof payload !== "object") {
    return [];
  }

  if (Array.isArray(payload.comments)) {
    return payload.comments;
  }

  if (Array.isArray(payload.data)) {
    return payload.data;
  }

  if (payload.data && typeof payload.data === "object") {
    return extractCommentCollection(payload.data);
  }

  return [];
};

export const normalizePublicComments = (payload) => extractCommentCollection(payload).filter(Boolean);

export const buildCommentPayload = (commentForm) => ({
  email: commentForm.email.trim(),
  message: commentForm.message.trim(),
  name: commentForm.name.trim(),
});

export const formatCommentDate = (value) => {
  if (!value) {
    return "Recently";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Recently";
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const getArticleSourceLabel = (url) =>
  /^https?:\/\//i.test(url || "") ? url : "Open linked media";
