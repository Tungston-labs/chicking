import { useEffect, useState } from "react";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  AuthorInfo,
  AuthorWrap,
  Avatar,
  BackLink,
  BannerImage,
  BannerWrap,
  Container,
  Content,
  Date,
  MetaRow,
  Name,
  QuoteBox,
  Role,
  Title,
  Wrapper,
} from "./NewsArticle.styles";
import franchiseImg from "../../../../public/images/blog/blog1.svg";
import PageLayout from "../../../components/Layout/PageLayout";
import TopBanner from "../../../components/TopBanner";
import {
  clearPublicCurrentBlog,
  fetchPublicBlogById,
  selectPublicCurrentBlog,
  selectPublicCurrentBlogError,
  selectPublicCurrentBlogStatus,
} from "../../../store/blog/blogSlice.js";

function NewsArticle() {
  const dispatch = useDispatch();
  const { blogId } = useParams();
  const post = useSelector(selectPublicCurrentBlog);
  const articleStatus = useSelector(selectPublicCurrentBlogStatus);
  const articleError = useSelector(selectPublicCurrentBlogError);
  const titles = ["Insights, Ideas & Stories from Chicking"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    dispatch(fetchPublicBlogById(blogId));

    return () => {
      dispatch(clearPublicCurrentBlog());
    };
  }, [blogId, dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <>
      <PageLayout />

      <TopBanner
        key={titleIndex}
        title={titles[titleIndex]}
        description={
          <>
            Stay updated with the latest news, industry insights, franchise
            <br />
            updates, and behind-the-scenes stories.
          </>
        }
        image={franchiseImg}
      />

      <Wrapper>
        <Container>
          <BackLink to="/blog">
            <FiArrowLeft /> Back to Blog
          </BackLink>

          {articleStatus === "loading" ? (
            <Title>Loading article...</Title>
          ) : post ? (
            <>
              <Title>{post.title}</Title>

              <MetaRow>
                <div>
                  <p>{post.readTime}</p>

                  <AuthorWrap>
                    <Avatar src="/images/logo.svg" />

                    <AuthorInfo>
                      <Name>{post.author}</Name>

                      <Role>{post.authorRole}</Role>
                    </AuthorInfo>
                  </AuthorWrap>
                </div>

                <Date>{post.date}</Date>
              </MetaRow>

              <BannerWrap>
                {!imageError && post.image ? (
                  <BannerImage 
                    alt={post.title} 
                    loading="lazy" 
                    src={post.image}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div style={{
                    width: "100%",
                    height: "400px",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#999",
                    fontSize: "16px",
                  }}>
                    Image unavailable
                  </div>
                )}
              </BannerWrap>

              {post.url ? (
                <QuoteBox>
                  Source:{" "}
                  <a href={post.url} rel="noreferrer" target="_blank">
                    Open linked media <FiExternalLink style={{ verticalAlign: "middle" }} />
                  </a>
                </QuoteBox>
              ) : null}

              {post.contentHtml ? (
                <Content dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }} />
              ) : (
                <Content>
                  <p>{post.contentText || "No content available for this article."}</p>
                </Content>
              )}
            </>
          ) : (
            <>
              <Title>Article not found</Title>
              <QuoteBox>{articleError || "The article you requested is unavailable right now."}</QuoteBox>
            </>
          )}
        </Container>
      </Wrapper>
    </>
  );
}

export default NewsArticle;
