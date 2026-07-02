import { FaComment, FaEye, FaHeart, FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  AuthorName,
  AuthorRow,
  Avatar,
  Body,
  Card,
  ContentPreview,
  MediaLink,
  MetaLine,
  PlayButton,
  Stats,
  Text,
  Title,
} from "./BlogCard.styles.js";

const getContentPreview = (value = "") =>
  value
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const BlogCard = ({
  author,
  comments = 10,
  contentText,
  date,
  excerpt,
  id,
  image,
  isVideo,
  readTime,
  title,
  views = 135,
}) => {
  const navigate = useNavigate();
  const contentPreview = getContentPreview(contentText || "");
  const articlePath = `/new-articles/${id}`;

  return (
  <Card>
    <MediaLink
      onClick={(event) => event.stopPropagation()}
      to={articlePath}
    >
      <img src={image} alt={title || excerpt || "Article image"} />
      {isVideo && (
        <PlayButton>
          <FaPlay aria-hidden="true" />
        </PlayButton>
      )}
    </MediaLink>
    <Body
      onClick={() => navigate(articlePath)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          navigate(articlePath);
        }
      }}
      role="link"
      tabIndex={0}
    >
      <AuthorRow>
        <Avatar src="/images/logo.svg" alt={author ? `${author} avatar` : "Author avatar"} />
        <div>
          <AuthorName>{author}</AuthorName>
          <MetaLine>{date} / {readTime}</MetaLine>
        </div>
      </AuthorRow>
      <Title>{title}</Title>
      <Text>{excerpt}</Text>
      {contentPreview && contentPreview !== excerpt ? <ContentPreview>{contentPreview}</ContentPreview> : null}
      <Stats>
        <span><FaEye aria-hidden="true" /> {views}</span>
        <span><FaComment aria-hidden="true" /> {comments}</span>
        <span><FaHeart aria-hidden="true" /></span>
      </Stats>
    </Body>
  </Card>
  );
};

export default BlogCard;
