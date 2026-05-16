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

import tornGraphic from "../../../public/images/franchise/thinbottom.png";

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
          <BannerImage src={image} alt="banner" />
        </RightSection>
      </BannerContainer>

      <BottomGraphic src={tornGraphic} alt="torn-graphic" />
    </BannerWrapper>
  );
};

export default TopBanner;
