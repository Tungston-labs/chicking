import { CiLocationArrow1 } from "react-icons/ci";
import {
  BannerAction,
  BannerBody,
  BannerChildren,
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
  actionBackground,
  actionTextColor,
  background = "#891b1c",
  backgroundImage,
  backgroundImageRepeat,
  backgroundImageSize,
  children,
  compact = false,
  contentWidth = "85rem",
  description,
  edgeColor = "#ffffff",
  eyebrow,
  features = [],
  hasEdges = true,
  image,
  hideBackgroundImage = false,
  imageAlt = "",
  reverse = false,
  textColor = "#ffffff",
  title,
  topEdgeColor,
  bottomEdgeColor,
}) => {
  const hasHeader = Boolean(eyebrow || title || description || action);

  return (
    <BannerShell
      $background={background}
      $backgroundImage={backgroundImage}
      $backgroundImageRepeat={backgroundImageRepeat}
      $backgroundImageSize={backgroundImageSize}
      $hideBackgroundImage={hideBackgroundImage}
      $reverse={reverse}
      $textColor={textColor}
    >
      {hasEdges && (
        <PaintEdge
          aria-hidden="true"
          $edgeColor={topEdgeColor || edgeColor}
          $position="top"
          viewBox="0 0 1440 76"
          preserveAspectRatio="none"
        >
          <path d="M0 0H1440V21C1401 27 1372 18 1334 25C1297 32 1265 22 1232 29C1191 38 1159 27 1121 33C1082 40 1047 29 1009 36C969 43 936 32 897 38C859 44 824 33 786 39C748 45 714 35 676 41C638 47 604 36 566 42C527 48 493 37 455 43C417 49 382 38 345 44C306 50 272 39 235 45C196 51 162 40 125 46C84 53 47 43 0 50V0Z" />
          <path d="M0 0H1440V13C1395 19 1360 12 1318 18C1276 24 1240 15 1200 22C1158 29 1122 20 1080 26C1038 33 1000 24 959 30C918 36 879 27 838 33C797 39 758 30 717 36C676 42 637 33 596 39C555 45 516 36 475 42C434 48 394 39 353 45C312 51 272 42 231 48C190 54 149 45 108 51C68 57 34 49 0 55V0Z" />
        </PaintEdge>
      )}
      <BannerContent
        $compact={compact}
        $contentWidth={contentWidth}
        $reverse={reverse}
      >
        {hasHeader && (
          <BannerHeader description={description} eyebrow={eyebrow} title={title}>
            {action && (
              <BannerAction
                href={action.href || "#"}
                $background={actionBackground || action.background}
                $textColor={actionTextColor || action.textColor}
              >
                {action.label}
                <CiLocationArrow1 aria-hidden="true" />
              </BannerAction>
            )}
          </BannerHeader>
        )}

        <BannerFeatures features={features} />

        {image && features.length === 0 && (
          <BannerMedia aria-hidden={!imageAlt}>
            <BannerImage src={image} alt={imageAlt} />
          </BannerMedia>
        )}
        {children && <BannerChildren>{children}</BannerChildren>}
      </BannerContent>
      {hasEdges && (
        <PaintEdge
          aria-hidden="true"
          viewBox="0 0 1440 76"
          preserveAspectRatio="none"
          $edgeColor={bottomEdgeColor || edgeColor}
          $position="bottom"
        >
          <path d="M0 41C38 35 72 45 111 38C150 31 184 43 222 36C260 29 296 41 335 34C374 27 409 39 448 32C486 25 522 37 560 30C599 23 635 35 673 28C712 21 748 33 786 26C825 19 861 31 899 24C938 17 973 29 1012 22C1050 15 1086 27 1124 20C1163 13 1199 25 1237 18C1276 11 1311 23 1350 16C1388 10 1418 20 1440 15V76H0V41Z" />
          <path d="M0 55C40 48 76 58 116 51C156 44 193 56 233 49C273 42 309 54 349 47C389 40 426 52 466 45C506 38 543 50 583 43C623 36 660 48 700 41C740 34 777 46 817 39C857 32 894 44 934 37C974 30 1011 42 1051 35C1091 28 1128 40 1168 33C1208 26 1245 38 1285 31C1325 24 1362 36 1402 29C1418 26 1431 25 1440 25V76H0V55Z" />
        </PaintEdge>
      )}
    </BannerShell>
  );
};

export default SharedBanner;
