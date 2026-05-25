import { apiRequest } from "../client.js";

const buildReplyPayloads = (payload) => {
  const variants = [];

  if (payload && typeof payload === "object" && !Array.isArray(payload)) {
    variants.push(payload);
  }

  const message =
    typeof payload === "string"
      ? payload.trim()
      : String(payload?.message || payload?.reply || payload?.content || "").trim();

  if (message) {
    variants.push({ message });
    variants.push({ reply: message });
    variants.push({ content: message });
  }

  return variants.filter(
    (variant, index, currentVariants) =>
      variant &&
      Object.values(variant).some(Boolean) &&
      currentVariants.findIndex((item) => JSON.stringify(item) === JSON.stringify(variant)) === index
  );
};

export const replyBlogComment = async (blogId, commentId, payload) => {
  const replyPayloads = buildReplyPayloads(payload);
  let lastError = null;

  for (const requestBody of replyPayloads) {
    try {
      return await apiRequest(`/admin/blogs/${blogId}/comments/${commentId}/reply`, {
        body: requestBody,
        method: "PATCH",
        requiresAuth: true,
      });
    } catch (error) {
      if (error?.status !== 422) {
        throw error;
      }

      lastError = error;
    }
  }

  throw lastError || new Error("Unable to reply to this comment right now.");
};
