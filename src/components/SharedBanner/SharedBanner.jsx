import { CiLocationArrow1 } from "react-icons/ci";
import {
  BannerAction,
  BannerBody,
  BannerContent,
  BannerEyebrow,
  BannerFeature,
  BannerFeatureContent,
  BannerFeatureGrid,
  BannerFeatureIcon,
  BannerFeatureText,
  BannerFeatureTitle,
  BannerImage,
  BannerLead,
  BannerMedia,
  BannerShell,
  BannerTitle,
  PaintEdge,
} from "./SharedBanner.styles.js";

export const BannerHeader = ({ children, description, eyebrow, title }) => {
  return (
    <BannerBody>
      {eyebrow && <BannerEyebrow>{eyebrow}</BannerEyebrow>}
      {title && <BannerTitle>{title}</BannerTitle>}
      {description && <BannerLead>{description}</BannerLead>}
      {children}
    </BannerBody>
  );
};

export const BannerFeatures = ({ features = [] }) => {
  if (features.length === 0) {
    return null;
  }

  return (
    <BannerFeatureGrid>
      {features.map((feature) => (
        <BannerFeature key={feature.title}>
          {feature.icon && (
            <BannerFeatureIcon>
              <img src={feature.icon} alt="" />
            </BannerFeatureIcon>
          )}
          <BannerFeatureContent>
            <BannerFeatureTitle>{feature.title}</BannerFeatureTitle>
            <BannerFeatureText>{feature.text}</BannerFeatureText>
          </BannerFeatureContent>
        </BannerFeature>
      ))}
    </BannerFeatureGrid>
  );
};

const SharedBanner = ({
  action,
  background = "#891b1c",
  backgroundImage,
  backgroundImageRepeat,
  backgroundImageSize,
  children,
  description,
  edgeColor = "#ffffff",
  eyebrow,
  features = [],
  image,
  hideBackgroundImage = false,
  imageAlt = "",
  reverse = false,
  textColor = "#ffffff",
  title,
}) => {
  return (
    <BannerShell
      $background={background}
      $backgroundImage={backgroundImage}
      $backgroundImageRepeat={backgroundImageRepeat}
      $backgroundImageSize={backgroundImageSize}
      $hideBackgroundImage={hideBackgroundImage}
      $edgeColor={edgeColor}
      $reverse={reverse}
      $textColor={textColor}
    >
      <PaintEdge
        aria-hidden="true"
        $edgeColor={edgeColor}
        $position="top"
        viewBox="0 0 1440 76"
        preserveAspectRatio="none"
      >
        <path d="M0 0H1440V28L102 32L1375 24L140 35L107 27L127 39L1236 30L1197 42L162 34L117 45L109  35L1058 47L1022 38L987 50L952 36L916 45L879 31L842 43L804 33L769 48L733 35L696 44L661 30L624 41L588 33L552 47L517 37L480 51L444 39L408 47L372 35L37 44L300 30L264 41L229 34L193 46L158 32L121 40L87 28L52 36L20 26L0 32V0Z" />
        <path d="M0 0H1440V18L1394 25L1358 17L1313 29L1269 20L1226 31L110 23L1137 34L1090 25L108 35L1001 28L95 39L912 26L87 36L23 27L778 39L734 28L689 37L645 25L601 36L556 27L511 40L466 29L421 38L377 27L333 36L289 24L244 34L199 27L154 37L111 24L67 32L24 22L0 27V0Z" />
      </PaintEdge>
      <BannerContent $reverse={reverse}>
        <BannerHeader description={description} eyebrow={eyebrow} title={title}>
          {children}
          {action && (
            <BannerAction href={action.href || "#"}>
              {action.label}
              <CiLocationArrow1 aria-hidden="true" />
            </BannerAction>
          )}
        </BannerHeader>

        <BannerFeatures features={features} />

        {image && features.length === 0 && (
          <BannerMedia aria-hidden={!imageAlt}>
            <BannerImage src={image} alt={imageAlt} />
          </BannerMedia>
        )}
      </BannerContent>
      <PaintEdge
        aria-hidden="true"
        viewBox="0 0 1440 76"
        preserveAspectRatio="none"
        $edgeColor={edgeColor}
        $position="bottom"
      >
        <path d="M0 45L35 35L72 48L109 38L145 51L181 40L218 54L254 42L291 56L327 45L364 57L400 43L437 54L473 40L510 52L546 37L583 49L619 39L656 53L692 42L729 56L765 41L802 50L838 38L875 53L911 43L948 55L984 39L1021 52L1057 41L1094 55L1130 38L1167 50L1203 39L1240 53L1276 42L1313 56L1349 41L1386 50L1422 38L1440 43V76H0V45Z" />
        <path d="M0 57L44 48L86 60L130 51L174 63L219 53L263 65L307 55L351 66L396 54L440 64L484 52L528 63L573 50L617 61L661 53L705 64L750 52L794 62L838 50L882 63L927 54L971 65L1015 52L1059 63L1104 53L1148 64L1192 51L1236 62L1281 54L1325 66L1369 52L1413 60L1440 54V76H0V57Z" />
      </PaintEdge>
    </BannerShell>
  );
};

export default SharedBanner;
