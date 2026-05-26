import {
  CommentCard,
  CommentDate,
  CommentForm,
  CommentFormButton,
  CommentFormGrid,
  CommentInput,
  CommentList,
  CommentMessage,
  CommentMeta,
  CommentReply,
  CommentSection,
  CommentTextarea,
  EmptyComments,
  FieldLabel,
  FormFeedback,
  SectionTitle,
} from "./NewsArticle.styles.js";
import { formatCommentDate } from "./newsArticleCommentUtils.js";

const NewsArticleComments = ({
  commentForm,
  commentSubmitMessage,
  commentSubmitStatus,
  comments,
  commentsError,
  commentsStatus,
  onCommentFieldChange,
  onCommentSubmit,
  onRefreshComments,
}) => {
  return (
    <CommentSection>
      <SectionTitle style={{ marginTop: "2.5rem" }}>Comments ({comments.length})</SectionTitle>
      {commentsStatus === "loading" ? (
        <EmptyComments>Loading comments...</EmptyComments>
      ) : commentsError ? (
        <>
          <EmptyComments>{commentsError}</EmptyComments>
          <CommentFormButton onClick={() => onRefreshComments?.().catch(() => {})} type="button">
            Retry Comments
          </CommentFormButton>
        </>
      ) : comments.length ? (
        <CommentList>
          {comments.map((comment) => (
            <CommentCard key={comment.id}>
              <CommentMeta>
                <div>
                  <strong>{comment.name}</strong>
                  <CommentDate>{formatCommentDate(comment.createdAt)}</CommentDate>
                </div>
              </CommentMeta>
              <CommentMessage>{comment.message}</CommentMessage>
              {comment.reply?.message ? (
                <CommentReply>
                  <strong>{comment.reply.adminName || "Admin"} replied</strong>
                  <p>{comment.reply.message}</p>
                </CommentReply>
              ) : null}
            </CommentCard>
          ))}
        </CommentList>
      ) : (
        <EmptyComments>No approved comments yet. Be the first to share your thoughts.</EmptyComments>
      )}
      <SectionTitle>Leave a Comment</SectionTitle>
      <CommentForm onSubmit={onCommentSubmit}>
        <CommentFormGrid>
          <div>
            <FieldLabel htmlFor="comment-name">Name</FieldLabel>
            <CommentInput
              id="comment-name"
              onChange={onCommentFieldChange("name")}
              placeholder="Your name"
              required
              value={commentForm.name}
            />
          </div>
          <div>
            <FieldLabel htmlFor="comment-email">Email</FieldLabel>
            <CommentInput
              id="comment-email"
              onChange={onCommentFieldChange("email")}
              placeholder="you@example.com"
              required
              type="email"
              value={commentForm.email}
            />
          </div>
        </CommentFormGrid>
        <div>
          <FieldLabel htmlFor="comment-message">Comment</FieldLabel>
          <CommentTextarea
            id="comment-message"
            onChange={onCommentFieldChange("message")}
            placeholder="Share your thoughts about this article"
            required
            rows={5}
            value={commentForm.message}
          />
        </div>
        {commentSubmitMessage ? (
          <FormFeedback $variant={commentSubmitStatus === "failed" ? "error" : "success"}>
            {commentSubmitMessage}
          </FormFeedback>
        ) : null}
        <CommentFormButton disabled={commentSubmitStatus === "loading"} type="submit">
          {commentSubmitStatus === "loading" ? "Submitting..." : "Post Comment"}
        </CommentFormButton>
      </CommentForm>

      
    </CommentSection>
  );
};

export default NewsArticleComments;
