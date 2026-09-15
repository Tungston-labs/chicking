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

const tornGraphic = "/images/sharedbanner/top.png";

const TopBanner = ({
  title,
  description,
  image,
  imageAlt,
  as = "h1",
}) => {
  const resolvedImageAlt =
    imageAlt || (typeof title === "string" ? title : "Chicking franchise banner");

  return (
    <BannerWrapper>
      <BannerContainer>
        <LeftSection>
          <Heading as={as}>{title}</Heading>
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
