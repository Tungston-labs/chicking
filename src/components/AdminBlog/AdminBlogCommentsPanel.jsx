import {
  FiCheck,
  FiMessageSquare,
  FiRefreshCw,
  FiSend,
  FiTrash2,
} from "react-icons/fi";
import { EmptyText, SecondaryButton } from "./AdminBlog.styles.js";
import {
  ADMIN_COMMENT_STATUS_OPTIONS,
  formatAdminCommentDate,
  getAdminCommentSummary,
} from "./adminBlogCommentUtils.js";
import {
  CommentActions,
  CommentAuthor,
  CommentBadge,
  CommentButton,
  CommentCard,
  CommentCardHeader,
  CommentCountChip,
  CommentCountGroup,
  CommentDate,
  CommentList,
  CommentMessage,
  CommentMeta,
  CommentsHeader,
  CommentsPanel,
  CommentSelect,
  InlineNotice,
  ReplyBox,
  ReplyForm,
  ReplyTextarea,
} from "./AdminBlogCommentsPanel.styles.js";
import { useAdminBlogComments } from "./useAdminBlogComments.js";

const AdminBlogCommentsPanel = ({ blogId, serverCommentCount = 0, serverPendingCount = 0 }) => {
  const {
    comments,
    commentsError,
    commentsStatus,
    handleDeleteComment,
    handleReplyDraftChange,
    handleReplySubmit,
    handleStatusChange,
    mutationState,
    refreshComments,
    replyDrafts,
  } = useAdminBlogComments(blogId);

  const summary = getAdminCommentSummary(comments);
  const totalComments = commentsStatus === "succeeded" ? summary.total : serverCommentCount;
  const pendingComments = commentsStatus === "succeeded" ? summary.pending : serverPendingCount;

  const handleDelete = async (commentId) => {
    const shouldDelete = window.confirm("Delete this comment permanently?");

    if (!shouldDelete) {
      return;
    }

    await handleDeleteComment(commentId);
  };

  const handleRefresh = () => {
    refreshComments().catch(() => {});
  };

  return (
    <CommentsPanel>
      <CommentsHeader>
        <CommentCountGroup>
          <CommentCountChip>
            <strong>{String(totalComments).padStart(2, "0")}</strong>
            <span>Total Comments</span>
          </CommentCountChip>
          <CommentCountChip>
            <strong>{String(pendingComments).padStart(2, "0")}</strong>
            <span>Pending Review</span>
          </CommentCountChip>
          <CommentCountChip>
            <strong>{String(summary.approved).padStart(2, "0")}</strong>
            <span>Approved</span>
          </CommentCountChip>
          <CommentCountChip>
            <strong>{String(summary.rejected).padStart(2, "0")}</strong>
            <span>Rejected</span>
          </CommentCountChip>
        </CommentCountGroup>

        <SecondaryButton onClick={handleRefresh} type="button">
          <FiRefreshCw /> Refresh
        </SecondaryButton>
      </CommentsHeader>

      {mutationState.status === "failed" && mutationState.error ? (
        <InlineNotice $variant="error">{mutationState.error}</InlineNotice>
      ) : null}
      {mutationState.status === "succeeded" && mutationState.message ? (
        <InlineNotice>{mutationState.message}</InlineNotice>
      ) : null}

      {commentsStatus === "loading" ? (
        <EmptyText>Loading comments and moderation activity for this post.</EmptyText>
      ) : commentsError ? (
        <EmptyText>{commentsError}</EmptyText>
      ) : comments.length ? (
        <CommentList>
          {comments.map((comment) => {
            const isDeleteLoading =
              mutationState.commentId === comment.id &&
              mutationState.action === "delete" &&
              mutationState.status === "loading";
            const isReplyLoading =
              mutationState.commentId === comment.id &&
              mutationState.action === "reply" &&
              mutationState.status === "loading";
            const isStatusLoading =
              mutationState.commentId === comment.id &&
              mutationState.action === "status" &&
              mutationState.status === "loading";

            return (
              <CommentCard key={comment.id}>
                <CommentCardHeader>
                  <CommentAuthor>
                    <strong>{comment.name || "Anonymous"}</strong>
                    <span>{comment.email || "No email provided"}</span>
                  </CommentAuthor>

                  <CommentMeta>
                    <CommentDate>{formatAdminCommentDate(comment.createdAt)}</CommentDate>
                    <CommentBadge $status={comment.status}>{comment.status || "Pending"}</CommentBadge>
                  </CommentMeta>
                </CommentCardHeader>

                <CommentMessage>{comment.message}</CommentMessage>

                <CommentActions>
                  <CommentSelect
                    disabled={isDeleteLoading || isReplyLoading || isStatusLoading}
                    onChange={(event) => handleStatusChange(comment.id, event.target.value)}
                    value={comment.status || "Pending"}
                  >
                    {ADMIN_COMMENT_STATUS_OPTIONS.map((statusOption) => (
                      <option key={statusOption} value={statusOption}>
                        {statusOption}
                      </option>
                    ))}
                  </CommentSelect>

                  {comment.status !== "Approved" ? (
                    <CommentButton
                      disabled={isDeleteLoading || isReplyLoading || isStatusLoading}
                      onClick={() => handleStatusChange(comment.id, "Approved")}
                      type="button"
                    >
                      <FiCheck /> Approve
                    </CommentButton>
                  ) : null}

                  <CommentButton
                    $variant="danger"
                    disabled={isDeleteLoading || isReplyLoading || isStatusLoading}
                    onClick={() => handleDelete(comment.id)}
                    type="button"
                  >
                    <FiTrash2 /> {isDeleteLoading ? "Deleting..." : "Delete"}
                  </CommentButton>
                </CommentActions>

                {comment.reply?.message ? (
                  <ReplyBox>
                    <strong>{comment.reply.adminName || "Admin"} replied</strong>
                    <p>{comment.reply.message}</p>
                  </ReplyBox>
                ) : null}

                <ReplyForm
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleReplySubmit(comment.id);
                  }}
                >
                  <ReplyTextarea
                    disabled={isDeleteLoading || isReplyLoading || isStatusLoading}
                    onChange={(event) => handleReplyDraftChange(comment.id, event.target.value)}
                    placeholder={
                      comment.reply?.message ? "Update the admin reply if needed" : "Write an admin reply"
                    }
                    value={replyDrafts[comment.id] || ""}
                  />

                  <CommentButton
                    $variant="secondary"
                    disabled={isDeleteLoading || isReplyLoading || isStatusLoading}
                    type="submit"
                  >
                    {isReplyLoading ? <FiMessageSquare /> : <FiSend />}
                    {isReplyLoading ? "Sending..." : comment.reply?.message ? "Update Reply" : "Reply"}
                  </CommentButton>
                </ReplyForm>
              </CommentCard>
            );
          })}
        </CommentList>
      ) : (
        <EmptyText>No comments have been submitted for this post yet.</EmptyText>
      )}
    </CommentsPanel>
  );
};

export default AdminBlogCommentsPanel;
