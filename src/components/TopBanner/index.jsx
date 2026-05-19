import React from "react";
import {
  BannerWrapper,
  BannerContainer,
  LeftSection,
  RightSection,
  Heading,
  Description,
  BannerImage,
  BottomGraphic,
} from "./style";
import tornGraphic from "../../../public/images/franchise/bottomthin.png";

const TopBanner = ({
  title,
  description,
  image,
}) => {
  return (
    <BannerWrapper>
      <BannerContainer>
        <LeftSection>
          <Heading>{title}</Heading>
          <Description>{description}</Description>
        </LeftSection>
        <RightSection>
          <BannerImage src={image} alt="banner"  loading="eager" />
        </RightSection>
      </BannerContainer>

      <BottomGraphic src={tornGraphic} alt="torn-graphic" />
    </BannerWrapper>
  );
};

export default TopBanner;
