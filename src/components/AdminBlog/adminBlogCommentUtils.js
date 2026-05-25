export const ADMIN_COMMENT_STATUS_OPTIONS = ["Pending", "Approved", "Rejected"];

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

const extractSingleComment = (payload) => {
  if (!payload || typeof payload !== "object") {
    return payload;
  }

  if (payload.comment && typeof payload.comment === "object") {
    return payload.comment;
  }

  if (payload.item && typeof payload.item === "object") {
    return payload.item;
  }

  if (payload.data && typeof payload.data === "object") {
    return extractSingleComment(payload.data);
  }

  return payload;
};

const normalizeCommentStatus = (status = "") => {
  const normalizedStatus = String(status || "").trim().toLowerCase();

  if (normalizedStatus === "approved") {
    return "Approved";
  }

  if (normalizedStatus === "pending") {
    return "Pending";
  }

  if (normalizedStatus === "rejected") {
    return "Rejected";
  }

  return typeof status === "string" ? status.trim() : "";
};

const normalizeCommentReply = (reply) => {
  if (!reply) {
    return null;
  }

  if (typeof reply === "string") {
    const message = reply.trim();
    return message ? { adminName: "Admin", message } : null;
  }

  if (typeof reply !== "object") {
    return null;
  }

  const message = String(reply.message || reply.reply || reply.content || "").trim();

  if (!message) {
    return null;
  }

  return {
    ...reply,
    adminName: reply.adminName || reply.admin_name || reply.author || "Admin",
    message,
  };
};

export const normalizeAdminComment = (comment) => {
  if (!comment || typeof comment !== "object") {
    return null;
  }

  return {
    ...comment,
    email: comment.email || "",
    reply: normalizeCommentReply(comment.reply),
    status: normalizeCommentStatus(comment.status),
  };
};

export const normalizeAdminCommentList = (payload) =>
  extractCommentCollection(payload).map(normalizeAdminComment).filter(Boolean);

export const extractAdminComment = (payload) => normalizeAdminComment(extractSingleComment(payload));

export const formatAdminCommentDate = (value) => {
  if (!value) {
    return "Recently";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Recently";
  }

  return date.toLocaleString("en-US", {
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const getAdminCommentSummary = (comments) =>
  comments.reduce(
    (summary, comment) => ({
      approved: summary.approved + (comment.status === "Approved" ? 1 : 0),
      pending: summary.pending + (comment.status === "Pending" ? 1 : 0),
      rejected: summary.rejected + (comment.status === "Rejected" ? 1 : 0),
      total: summary.total + 1,
    }),
    { approved: 0, pending: 0, rejected: 0, total: 0 }
  );
