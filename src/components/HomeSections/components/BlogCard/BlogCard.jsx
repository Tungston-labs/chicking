import { FaComment, FaEye, FaHeart, FaPlay } from "react-icons/fa";
import {
  AuthorName,
  AuthorRow,
  Avatar,
  Body,
  Card,
  MediaLink,
  MetaLine,
  PlayButton,
  Stats,
  Text,
  Title,
} from "./BlogCard.styles.js";

const BlogCard = ({ author, date, excerpt, image, isVideo, readTime, title, url }) => (
  <Card>
    <MediaLink href={url || "#"} target={url ? "_blank" : undefined} rel="noreferrer">
      <img src={image} alt="" />
      {isVideo && (
        <PlayButton>
          <FaPlay aria-hidden="true" />
        </PlayButton>
      )}
    </MediaLink>
    <Body>
      <AuthorRow>
        <Avatar src="/images/logo.svg" alt="" />
        <div>
          <AuthorName>{author}</AuthorName>
          <MetaLine>{date} / {readTime}</MetaLine>
        </div>
      </AuthorRow>
      <Title>{title}</Title>
      <Text>{excerpt}</Text>
      <Stats>
        <span><FaEye aria-hidden="true" /> 135</span>
        <span><FaComment aria-hidden="true" /> 10</span>
        <span><FaHeart aria-hidden="true" /></span>
      </Stats>
    </Body>
  </Card>
);

export default BlogCard;
