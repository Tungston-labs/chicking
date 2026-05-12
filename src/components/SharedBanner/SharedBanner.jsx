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
      $hasBackgroundImage={Boolean(backgroundImage && !hideBackgroundImage)}
      $hideBackgroundImage={hideBackgroundImage}
      $reverse={reverse}
      $textColor={textColor}
    >
      {hasEdges && (
        <PaintEdge
          aria-hidden="true"
          $edgeColor={topEdgeColor || edgeColor}
          $position="top"
          viewBox="0 0 1440 42"
          preserveAspectRatio="none"
        >
          <path d="M0 0H1440V20L1416 18L1394 21L1375 18L1342 22L1314 19L1288 23L1262 20L1234 22L1204 19L1175 24L1148 20L1118 23L1086 19L1057 22L1028 20L1000 23L970 19L942 21L912 20L884 23L850 19L818 22L786 20L758 23L724 19L695 22L666 20L634 24L603 20L572 22L540 19L512 22L482 20L452 23L418 19L386 22L354 20L324 23L294 20L264 22L232 19L202 22L173 20L142 23L112 20L82 22L52 19L24 21L0 20V0Z" />
          <path opacity="0.86" d="M24 22H82V25H24ZM106 24H138V26H106ZM164 22H238V25H164ZM270 23H318V26H270ZM356 22H444V25H356ZM512 23H570V26H512ZM610 24H652V27H610ZM682 22H758V25H682ZM818 23H884V26H818ZM940 22H1010V25H940ZM1064 24H1118V27H1064ZM1162 22H1244V25H1162ZM1284 23H1338V26H1284ZM1374 22H1430V25H1374Z" />
          <path opacity="0.82" d="M80 27H38V29H8ZM208 27H258V29H208ZM462 26H504V28H462ZM766 27H812V29H766ZM1016 27H1050V29H1016ZM1338 27H1368V29H1338Z" />
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
          viewBox="0 0 1440 42"
          preserveAspectRatio="none"
          $edgeColor={bottomEdgeColor || edgeColor}
          $position="bottom"
        >
          <path d="M0 22L24 21L52 23L82 20L112 22L142 19L173 22L202 20L232 23L264 20L294 22L324 19L354 22L386 20L418 23L452 19L482 22L512 20L540 23L572 20L603 22L634 18L666 22L695 20L724 23L758 19L786 22L818 20L850 23L884 19L912 22L942 21L970 23L1000 19L1028 22L1057 20L1086 23L1118 19L1148 22L1175 18L1204 23L1234 20L1262 22L1288 19L1314 23L1342 20L1375 24L1394 21L1416 24L1440 22V42H0Z" />
          <path opacity="0.86" d="M24 17H82V20H24ZM106 16H138V18H106ZM164 17H238V20H164ZM270 16H318V19H270ZM356 17H444V20H356ZM512 16H570V19H512ZM610 15H652V18H610ZM682 17H758V20H682ZM818 16H884V19H818ZM940 17H1010V20H940ZM1064 15H1118V18H1064ZM1162 17H1244V20H1162ZM1284 16H1338V19H1284ZM1374 17H1430V20H1374Z" />
          <path opacity="0.62" d="M8 13H38V15H8ZM208 13H258V15H208ZM462 14H504V16H462ZM766 13H812V15H766ZM1016 13H1050V15H1016ZM1338 14H1368V16H1338Z" />
        </PaintEdge>
      )}
    </BannerShell>
  );
};

export default SharedBanner;
