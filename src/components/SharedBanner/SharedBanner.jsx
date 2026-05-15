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
import sharedBannerImages from "../../assets/images/sharedBannerImages.js";

const TOP_EDGE_IMAGE = sharedBannerImages.edges.top;
const BOTTOM_EDGE_IMAGE = sharedBannerImages.edges.bottom;
const WHITE_EDGE_COLORS = new Set(["#fff", "#ffffff", "white"]);
const RASTER_EDGE_BACKGROUNDS = new Set(["#891b1c", "#991b1e"]);

const normalizeColor = (value) =>
  typeof value === "string" ? value.trim().toLowerCase() : "";

const shouldUseRasterEdge = ({ background, edgeColor, edgeImage }) =>
  Boolean(edgeImage) &&
  WHITE_EDGE_COLORS.has(normalizeColor(edgeColor)) &&
  RASTER_EDGE_BACKGROUNDS.has(normalizeColor(background));

const renderEdge = ({ background, edgeColor, edgeImage, position }) => {
  if (shouldUseRasterEdge({ background, edgeColor, edgeImage })) {
    return (
      <PaintEdge
        aria-hidden="true"
        alt=""
        src={edgeImage}
        $position={position}
      />
    );
  }

  return null;
};

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
  contentWidth = "var(--section-max-width)",
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
  topEdgeImage = TOP_EDGE_IMAGE,
  bottomEdgeColor,
  bottomEdgeImage = BOTTOM_EDGE_IMAGE,
}) => {
  const hasHeader = Boolean(eyebrow || title || description || action);
  const resolvedTopEdgeColor = topEdgeColor || edgeColor;
  const resolvedBottomEdgeColor = bottomEdgeColor || edgeColor;

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
        renderEdge({
          background,
          edgeColor: resolvedTopEdgeColor,
          edgeImage: topEdgeImage,
          position: "top",
        })
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
        renderEdge({
          background,
          edgeColor: resolvedBottomEdgeColor,
          edgeImage: bottomEdgeImage,
          position: "bottom",
        })
      )}
    </BannerShell>
  );
};

export default SharedBanner;
