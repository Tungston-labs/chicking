import PageLayout from "../../components/Layout/PageLayout.jsx";
import PartnerCta from "../../components/HomeSections/sections/PartnerCta/index.jsx";
import SiteFooter from "../../components/HomeSections/sections/SiteFooter/index.jsx";
import TopBanner from "../../components/TopBanner/index.jsx";
import SEO from "../../components/Common/SEO.jsx";
import sharedBannerImages from "../../assets/images/sharedBannerImages.js";
import FutureFrontiers from "../../components/GlobalPresence/frontiers/index.jsx";
import { renderGlobalPresenceBannerTitle } from "../../components/GlobalPresence/globalPresence.helpers.jsx";
import GlobalPresenceMap from "../../components/GlobalPresence/map/index.jsx";
import { globalPresenceBanner } from "../../components/GlobalPresence/data/globalPresenceData.js";

const franchiseImg = "/images/management/topimage.svg";

const globalPresenceSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Global Presence | Chicking Outlets Worldwide",
  "description": "Explore Chicking's global presence across 36+ countries and 400+ locations in the Middle East, Europe, Africa, and Asia-Pacific.",
  "url": "http://178.248.112.5/global-presence",
  "publisher": {
    "@type": "Organization",
    "name": "Chicking",
    "logo": "http://178.248.112.5/images/logo.svg",
  },
};

const GlobalPresence = () => (
  <PageLayout>
    <SEO
      title="Global Presence | Chicking Outlets Worldwide"
      description="Explore Chicking's global presence across 36+ countries and 400+ locations in the Middle East, Europe, Africa, and Asia-Pacific."
      canonicalPath="/global-presence"
      schema={globalPresenceSchema}
    />
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

``