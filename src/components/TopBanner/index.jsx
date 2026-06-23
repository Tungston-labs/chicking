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

const tornGraphic = "/images/franchise/bottomthin.png";

const TopBanner = ({
  title,
  description,
  image,
  imageAlt,
}) => {
  const resolvedImageAlt =
    imageAlt || (typeof title === "string" ? title : "Chicking franchise banner");

  return (
    <BannerWrapper>
      <BannerContainer>
        <LeftSection>
          <Heading>{title}</Heading>
          <Description>{description}</Description>
        </LeftSection>
        <RightSection>
          <BannerImage
            src={image}
            alt={resolvedImageAlt}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </RightSection>
      </BannerContainer>

      <BottomGraphic src={tornGraphic} alt="" aria-hidden="true" />
    </BannerWrapper>
  );
};

export default TopBanner;
