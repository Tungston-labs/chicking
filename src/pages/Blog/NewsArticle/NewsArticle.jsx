import React,{useState,useEffect} from "react";
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
  PlayButton,
  QuoteBox,
  Content,
} from "./NewsArticle.styles";
import franchiseImg from "../../../../public/images/blog/blog1.svg";
import profileImg from "../../../../public/images/blog/profile.svg";
import bannerImg from "../../../../public/images/blog/banner.svg";
import PageLayout from "../../../components/Layout/PageLayout";
import TopBanner from "../../../components/TopBanner";
// import playIcon from "../../../public/images/play.png";

function NewsArticle() {
       const titles = [
           "Insights, Ideas & Stories from Chicking",
        ];
        const [titleIndex, setTitleIndex] = useState(0);
        useEffect(() => {
            const interval = setInterval(() => {
                setTitleIndex((prev) => (prev + 1) % titles.length);
            }, 3000);
    
            return () => clearInterval(interval);
        }, [titles.length]);
  return (
    <>
    <PageLayout/>
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
        <Title>
          with 21-Store Acquisition and New Flagship,
          Grace Food Courts Cements Chicking’s
          Pivot to South India
        </Title>

        <MetaRow>
          <div>
            <p>4 Mins Read</p>

            <AuthorWrap>
              <Avatar src={profileImg} />

              <AuthorInfo>
                <Name>Trzech Nova</Name>
                <Role>Author</Role>
              </AuthorInfo>
            </AuthorWrap>
          </div>

          <Date>Nov 29, 2025</Date>
        </MetaRow>

        <BannerWrap>
          <BannerImage src={bannerImg} />

          {/* <PlayButton src={playIcon} /> */}
        </BannerWrap>

        <QuoteBox>
          Courtesy:
          https://expressnews.asia/2026/01/with-21-store-acquisition
        </QuoteBox>

        <Content>
          Grace Food Courts Pvt. Ltd. (GFCPL) has made a decisive
          move in Chennai's competitive Quick Service Restaurant
          market with the launch of its new flagship Chicking outlet.

          <br />
          <br />

          The opening marks GFCPL’s first major initiative since
          acquiring Master Franchise rights for the Dubai-based QSR
          brand.
        </Content>
      </Container>
    </Wrapper>
    </>
  );
}

export default NewsArticle;