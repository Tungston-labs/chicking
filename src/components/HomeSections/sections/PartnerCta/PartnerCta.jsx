import SharedBanner from "../../../SharedBanner/SharedBanner.jsx";
import sharedBannerImages from "../../../../assets/images/sharedBannerImages.js";
import {
  PartnerCtaArtwork,
  PartnerCtaDecorImage,
  PartnerCtaWrap,
} from "./PartnerCta.styles.js";

const defaultAction = {
  to: "/franchiseform",
  label: "Franchise With Us",
};

const defaultTitle = (
  <>
    Ready To Partner <strong>With Chicking</strong> Industry Leaders ?
  </>
);

const PartnerCta = ({
  action = defaultAction,
  actionBackground = "#891B1C",
  background = "#ffffff",
  bottomEdgeColor = "#000",
  compact = true,
  darkArrowImage = sharedBannerImages.partnerCta.darkArrow,
  description = "BFI doesn't just provide a brand name; we deliver a complete chicking franchise business system backed by 20 years of operational expertise. From day one of your franchise journey through years of growth, our team remains dedicated to your profitability and success.",
  locationFlagImage = sharedBannerImages.partnerCta.locationFlag,
  showDecorations = true,
  smileyImage = sharedBannerImages.partnerCta.smiley,
  textColor = "#171717",
  title = defaultTitle,
  ...bannerProps
}) => (
  <PartnerCtaWrap>
    <SharedBanner
      compact={compact}
      action={action}
      actionBackground={actionBackground}
      background={background}
      bottomEdgeColor={bottomEdgeColor}
      description={description}
      textColor={textColor}
      title={title}
      {...bannerProps}
    />

    {showDecorations && (
      <PartnerCtaArtwork aria-hidden="true">
        {locationFlagImage && (
          <PartnerCtaDecorImage
            $variant="location"
            src={locationFlagImage}
            alt=""
          />
        )}
        {darkArrowImage && (
          <PartnerCtaDecorImage $variant="arrow" src={darkArrowImage} alt="" />
        )}
        {smileyImage && (
          <PartnerCtaDecorImage $variant="smiley" src={smileyImage} alt="" />
        )}
      </PartnerCtaArtwork>
    )}
  </PartnerCtaWrap>
);

export default PartnerCta;
