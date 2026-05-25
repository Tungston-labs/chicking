import styled from "styled-components";

export const CommentsPanel = styled.div`
  display: grid;
  gap: 1rem;
`;

export const CommentsHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;
`;

export const CommentCountGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

export const CommentCountChip = styled.div`
  min-width: 5.75rem;
  padding: 0.7rem 0.85rem;
  border: 0.0625rem solid #ece6de;
  border-radius: 0.8rem;
  background: #fbf8f4;

  strong {
    display: block;
    color: #1f1f1f;
    font-size: 0.95rem;
  }

  span {
    color: #7a7a7a;
    font-size: 0.72rem;
  }
`;

export const CommentList = styled.div`
  display: grid;
  gap: 1rem;
`;

export const CommentCard = styled.article`
  padding: 1rem;
  border: 0.0625rem solid #efe7de;
  border-radius: 0.95rem;
  background: #fffdfb;
`;

export const CommentCardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.85rem;
  margin-bottom: 0.8rem;
`;

export const CommentAuthor = styled.div`
  min-width: 0;

  strong {
    display: block;
    color: #202020;
    font-size: 0.95rem;
  }

  span {
    display: block;
    color: #7f7f7f;
    font-size: 0.74rem;
    line-height: 1.5;
    word-break: break-word;
  }
`;

export const CommentMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const CommentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 5.5rem;
  padding: 0.38rem 0.75rem;
  border-radius: 999px;
  background: ${({ $status }) =>
    $status === "Approved"
      ? "rgba(51, 183, 111, 0.12)"
      : $status === "Rejected"
        ? "rgba(255, 97, 97, 0.14)"
        : "rgba(255, 173, 72, 0.15)"};
  color: ${({ $status }) =>
    $status === "Approved" ? "#228352" : $status === "Rejected" ? "#cb4d4d" : "#d68120"};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  text-transform: uppercase;
`;

export const CommentDate = styled.span`
  color: #7d7d7d;
  font-size: 0.74rem;
  white-space: nowrap;
`;

export const CommentMessage = styled.p`
  margin: 0 0 1rem;
  color: #313131;
  font-size: 0.86rem;
  line-height: 1.7;
  white-space: pre-wrap;
`;

export const CommentActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.9rem;
`;

export const CommentSelect = styled.select`
  min-width: 9rem;
  height: 2.4rem;
  padding: 0 0.75rem;
  border: 0.0625rem solid #e5ddd5;
  border-radius: 0.75rem;
  background: #ffffff;
  color: #292929;
  font-size: 0.78rem;
  outline: none;
`;

export const CommentButton = styled.button`
  height: 2.4rem;
  padding: 0 0.95rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  border: 0;
  border-radius: 0.75rem;
  background: ${({ $variant }) =>
    $variant === "danger" ? "#fff0ec" : $variant === "secondary" ? "#f7f2eb" : "#891b1c"};
  color: ${({ $variant }) =>
    $variant === "danger" ? "#cb4d4d" : $variant === "secondary" ? "#6b5a4f" : "#ffffff"};
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    cursor: wait;
    opacity: 0.72;
  }
`;

export const ReplyBox = styled.div`
  margin-bottom: 0.9rem;
  padding: 0.85rem 0.95rem;
  border-left: 0.25rem solid #891b1c;
  border-radius: 0.75rem;
  background: rgba(137, 27, 28, 0.05);

  strong {
    display: block;
    margin-bottom: 0.25rem;
    color: #891b1c;
    font-size: 0.8rem;
  }

  p {
    margin: 0;
    color: #3a3a3a;
    font-size: 0.82rem;
    line-height: 1.65;
    white-space: pre-wrap;
  }
`;

export const ReplyForm = styled.form`
  display: grid;
  gap: 0.7rem;
`;

export const ReplyTextarea = styled.textarea`
  width: 100%;
  min-height: 6.5rem;
  padding: 0.8rem 0.9rem;
  border: 0.0625rem solid #e5ddd5;
  border-radius: 0.85rem;
  background: #fffaf6;
  color: #252525;
  font-size: 0.84rem;
  line-height: 1.6;
  resize: vertical;
  outline: none;

  &:focus {
    border-color: #891b1c;
    box-shadow: 0 0 0 0.1875rem rgba(137, 27, 28, 0.08);
  }
`;

export const InlineNotice = styled.p`
  margin: 0;
  color: ${({ $variant }) => ($variant === "error" ? "#b42318" : "#1f7a45")};
  font-size: 0.78rem;
  line-height: 1.5;
`;
