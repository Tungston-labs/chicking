import { useState } from "react";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import bmiImages from "../../../assets/images/bmiImages.js";
import SharedBanner from "../../SharedBanner/index.jsx";
import {
  frontierFilters,
  futureFrontierMarkets,
} from "../data/globalPresenceData.js";
import {
  FrontierAction,
  FrontierCard,
  FrontierContent,
  FrontierFilterButton,
  FrontierFilters,
  FrontierGrid,
  FrontierIcon,
  FrontierMarket,
  FrontierStatus,
} from "./FutureFrontiers.styles.js";

const DEFAULT_FILTER_ID = "all";

const FutureFrontiers = () => {
  const [activeFilterId, setActiveFilterId] = useState(DEFAULT_FILTER_ID);

  const visibleMarkets = futureFrontierMarkets.filter((market) =>
    market.filterIds.includes(activeFilterId),
  );

  return (
    <SharedBanner
      background="#000"
      backgroundImageRepeat="no-repeat"
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
        <FrontierFilters>
          {frontierFilters.map((filter) => (
            <FrontierFilterButton
              key={filter.id}
              type="button"
              $active={filter.id === activeFilterId}
              onClick={() => setActiveFilterId(filter.id)}
            >
              {filter.label}
            </FrontierFilterButton>
          ))}
        </FrontierFilters>

        <FrontierGrid>
          {visibleMarkets.map((market) => (
            <FrontierCard key={market.id}>
              <FrontierIcon aria-hidden="true">
                <FiMapPin />
              </FrontierIcon>
              <FrontierMarket>{market.market}</FrontierMarket>
              <FrontierStatus>{market.status}</FrontierStatus>
              <FrontierAction
                to={`/franchiseform?territory=${encodeURIComponent(market.market)}`}
              >
                Express Interest
                <FiArrowRight aria-hidden="true" />
              </FrontierAction>
            </FrontierCard>
          ))}
        </FrontierGrid>
      </FrontierContent>
    </SharedBanner>
  );
};

export default FutureFrontiers;
