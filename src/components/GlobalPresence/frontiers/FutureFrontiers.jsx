import bmiImages from "../../../assets/images/bmiImages.js";
import SharedBanner from "../../SharedBanner/index.jsx";
import {
  FrontierContent,
  FrontierLine,
  FrontierRegion,
  FrontierText,
} from "./FutureFrontiers.styles.js";

const FutureFrontiers = () => {
  return (
    <SharedBanner
      background="#000"
      backgroundImageRepeat="repeat"
      backgroundImageSize="cover"
      bottomEdgeImage={bmiImages.edges.darkBottom}
      compact
      description="Target countries for our next wave of Chicking expansion. Be part of the growth and secure franchise rights in emerging markets with strong urban demand."
      forceEdgeImages
      headerAlign="left"
      headerAlignMobile="left"
      headerWidth="48rem"
      textColor="#ffffff"
      title={
        <>
          Future <strong>Frontiers</strong>
        </>
      }
      topEdgeImage={bmiImages.edges.darkTop}
    >
      <FrontierContent>
        <FrontierLine>
          <FrontierRegion>Africa:</FrontierRegion>
          <FrontierText>
            Democratic Republic of the Congo | Malawi | Mauritius | Reunion |
            Seychelles | Fiji | Tanzania
          </FrontierText>
        </FrontierLine>

        <FrontierLine>
          <FrontierRegion>Asia / Middle East:</FrontierRegion>
          <FrontierText>Jordan | South America / Caribbean: Suriname</FrontierText>
        </FrontierLine>
      </FrontierContent>
    </SharedBanner>
  );
};

export default FutureFrontiers;
