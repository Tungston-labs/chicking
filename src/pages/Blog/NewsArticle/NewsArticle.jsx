import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Container,
  Title,
  MetaRow,
  AuthorWrap,
  Avatar,
  AuthorInfo,
  Name,
  Role,
  Date,
  BannerWrap,
  BannerImage,
  QuoteBox,
  Content,
} from "./NewsArticle.styles";

import franchiseImg from "../../../../public/images/blog/blog1.svg";
import profileImg from "../../../../public/images/blog/profile.svg";
import bannerImg from "../../../../public/images/blog/banner.svg";

import PageLayout from "../../../components/Layout/PageLayout";
import TopBanner from "../../../components/TopBanner";

function NewsArticle() {
  const titles = ["Insights, Ideas & Stories from Chicking"];

  const [titleIndex, setTitleIndex] = useState(0);

  const [articleData] = useState({
    title:
      "With 21-Store Acquisition and New Flagship, Grace Food Courts Cements Chicking’s Pivot to South India",

    read_time: "4",

    author: "Trzech Nova",

    role: "Author",

    author_image: profileImg,

    date: "Nov 29, 2025",

    banner_image: bannerImg,

    courtesy_link:
      "https://expressnews.asia/2026/01/with-21-store-acquisition",

    content: `
Grace Food Courts Pvt. Ltd. (GFCPL) has made a decisive move in Chennai’s competitive Quick Service Restaurant (QSR) market with the launch of its new flagship Chicking outlet at Shanti Colony, Anna Nagar, signaling a strategic shift toward consolidation-led growth in South India.

The opening marks GFCPL’s first major initiative since acquiring Master Franchise rights for the Dubai-based QSR brand across India, excluding Kerala. As part of this strategy, the company has also taken over operational control of 21 existing Chicking outlets, bringing a previously fragmented store network under a unified management and operating framework.

The inauguration was officiated by Chicking Founder and Chairman, Mr. Mansoor A.K., in the presence of Anna Nagar MLA, Mr. M.K. Mohan. The event highlighted India’s growing importance to the brand, which now counts the country as its largest global market. Of Chicking’s more than 450 outlets across 45 countries, over 125 are located in India.
`,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <PageLayout />

      <TopBanner
        key={titleIndex}
        title={titles[titleIndex]}
        description={
          <>
            Stay updated with the latest news, industry insights,
            franchise
            <br />
            updates, and behind-the-scenes stories.
          </>
        }
        image={franchiseImg}
      />

      <Wrapper>
        <Container>
          <Title>{articleData.title}</Title>

          <MetaRow>
            <div>
              <p>{articleData.read_time} Mins Read</p>

              <AuthorWrap>
                <Avatar src={articleData.author_image} />

                <AuthorInfo>
                  <Name>{articleData.author}</Name>

                  <Role>{articleData.role}</Role>
                </AuthorInfo>
              </AuthorWrap>
            </div>

            <Date>{articleData.date}</Date>
          </MetaRow>

          <BannerWrap>
            <BannerImage src={articleData.banner_image} />
          </BannerWrap>

          <QuoteBox>
            Courtesy: {articleData.courtesy_link}
          </QuoteBox>

          <Content style={{ whiteSpace: "pre-line" }}>
            {articleData.content}
          </Content>
        </Container>
      </Wrapper>
    </>
  );
}

export default NewsArticle;