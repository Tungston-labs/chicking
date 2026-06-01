import PageLayout from "../../components/Layout/PageLayout.jsx";
import PartnerCta from "../../components/HomeSections/sections/PartnerCta/PartnerCta.jsx";
import SiteFooter from "../../components/HomeSections/sections/SiteFooter/index.jsx";
import TopBanner from "../../components/TopBanner/index.jsx";
import sharedBannerImages from "../../assets/images/sharedBannerImages.js";
import FutureFrontiers from "../../components/GlobalPresence/frontiers/index.jsx";
import { renderGlobalPresenceBannerTitle } from "../../components/GlobalPresence/globalPresence.helpers.jsx";
import GlobalPresenceMap from "../../components/GlobalPresence/map/index.jsx";
import { globalPresenceBanner } from "../../components/GlobalPresence/data/globalPresenceData.js";

const franchiseImg = "/images/management/topimage.svg";

const GlobalPresence = () => (
  <PageLayout>
    <TopBanner
      title={renderGlobalPresenceBannerTitle(globalPresenceBanner.titleLines)}
      description={globalPresenceBanner.description}
      image={franchiseImg}
    />

    <div data-animate="fade-up">
      <GlobalPresenceMap />
    </div>
    <div data-animate="fade-up">
      <FutureFrontiers />
    </div>

    <div data-animate="fade-up">
      <PartnerCta
        action={{
          to: "/franchiseform",
          label: "Franchise Inquiry",
        }}
        actionBackground="#891B1C"
        background="#ffffff"
        bottomEdgeColor="#000000"
        description="Ready to take the next step in a priority market? Our team can guide you through territory availability, market fit, and the right franchise model for your region."
        textColor="#171717"
        title={
          <>
            Partner With Chicking <strong>- Where Proven</strong>
            <br />
            <strong>Success Meets Global Opportunity</strong>
          </>
        }
        topEdgeImage={sharedBannerImages.edges.top}
      />
    </div>

    <SiteFooter topEdgeImage={sharedBannerImages.edges.footerBlack} />
  </PageLayout>
);

export default GlobalPresence;
