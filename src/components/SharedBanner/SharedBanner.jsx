import { CiLocationArrow1 } from "react-icons/ci";
import { NavLink as RouterLink } from "react-router-dom";
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

const shouldUseRasterEdge = ({
  background,
  edgeColor,
  edgeImage,
  forceEdgeImages,
}) =>
  Boolean(edgeImage) &&
  (forceEdgeImages ||
    (WHITE_EDGE_COLORS.has(normalizeColor(edgeColor)) &&
      RASTER_EDGE_BACKGROUNDS.has(normalizeColor(background))));

const renderEdge = ({
  background,
  edgeColor,
  edgeImage,
  forceEdgeImages,
  position,
}) => {
    if (
    shouldUseRasterEdge({ background, edgeColor, edgeImage, forceEdgeImages })
  ) {
    return (
      <PaintEdge
        aria-hidden="true"
        alt=""
        src={edgeImage}
        loading="lazy"
        decoding="async"
        $edgeColor={edgeColor}
        $position={position}
      />
    );
  }

  return null;
};

export const BannerHeader = ({
  align,
  children,
  description,
  eyebrow,
  leadWidth,
  mobileAlign,
  tabletAlign,
  title,
  width,
}) => {
  return (
    <BannerBody
      data-animate="fade-up"
      $align={align}
      $mobileAlign={mobileAlign}
      $tabletAlign={tabletAlign}
      $width={width}
    >
      {eyebrow && <BannerEyebrow>{eyebrow}</BannerEyebrow>}
      {title && <BannerTitle $mobileAlign={mobileAlign}>{title}</BannerTitle>}
      {description && (
        <BannerLead
          $align={align}
          $mobileAlign={mobileAlign}
          $tabletAlign={tabletAlign}
          $width={leadWidth}
        >
          {description}
        </BannerLead>
      )}
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
      {features.map((feature, index) => (
        <BannerFeature
          data-animate="fade-up"
          key={feature.title}
          style={{ "--animate-delay": `${index * 90}ms` }}
        >
          {feature.icon && (
            <BannerFeatureIcon>
              <img
                src={feature.icon}
                alt={feature.title || ""}
                aria-hidden={feature.title ? undefined : "true"}
                loading="lazy"
                decoding="async"
              />
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
  className,
  compact = false,
  contentWidth = "var(--section-max-width)",
  description,
  edgeColor = "#ffffff",
  eyebrow,
  features = [],
  forceEdgeImages = false,
  headerAlign = "center",
  headerAlignMobile,
  headerAlignTablet,
  headerWidth = "var(--section-max-width)",
  hasEdges = true,
  image,
  hideBackgroundImage = false,
  imageAlt = "",
  leadWidth = "72rem",
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
      className={className}
      $background={background}
      $backgroundImage={backgroundImage}
      $backgroundImageRepeat={backgroundImageRepeat}
      $backgroundImageSize={backgroundImageSize}
      $hasBackgroundImage={Boolean(backgroundImage && !hideBackgroundImage)}
      $hideBackgroundImage={hideBackgroundImage}
      $textColor={textColor}
    >
      {hasEdges &&
        renderEdge({
          background,
          edgeColor: resolvedTopEdgeColor,
          edgeImage: topEdgeImage,
          forceEdgeImages,
          position: "top",
        })}
      <BannerContent
        $compact={compact}
        $contentWidth={contentWidth}
        $reverse={reverse}
      >
        {hasHeader && (
          <BannerHeader
            description={description}
            eyebrow={eyebrow}
            title={title}
            align={headerAlign}
            mobileAlign={headerAlignMobile || headerAlign}
            tabletAlign={headerAlignTablet || headerAlign}
            width={headerWidth}
            leadWidth={leadWidth}
          >
            {action && (
              <BannerAction
                as={action.to ? RouterLink : undefined}
                href={action.to ? undefined : action.href || "#"}
                to={action.to}
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
          <BannerMedia aria-hidden={!imageAlt} data-animate="zoom-in">
            <BannerImage src={image} alt={imageAlt} />
          </BannerMedia>
        )}
        {children && <BannerChildren data-animate="fade-up">{children}</BannerChildren>}
      </BannerContent>
      {hasEdges &&
        renderEdge({
          background,
          edgeColor: resolvedBottomEdgeColor,
          edgeImage: bottomEdgeImage,
          forceEdgeImages,
          position: "bottom",
        })}
    </BannerShell>
  );
};

export default SharedBanner;
