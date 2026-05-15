import Hero from "../../components/Hero/index.jsx";
import HomeSections from "../../components/HomeSections/index.jsx";
import PageLayout from "../../components/Layout/PageLayout.jsx";
import SharedBanner from "../../components/SharedBanner/index.jsx";
import { homeBanners } from "../../components/HomeSections/data/homeSectionsData.js";

const renderLines = (lines) => (
  <>
    {lines.map((line, lineIndex) => (
      <span key={lineIndex}>
        {line.map((part, partIndex) =>
          part.strong ? <strong key={partIndex}>{part.strong}</strong> : part.text
        )}
        {lineIndex < lines.length - 1 && <br />}
      </span>
    ))}
  </>
);

const renderBannerTitle = (title) => {
  if (title?.desktopLines && title?.mobileLines) {
    return (
      <>
        <span className="desktop-only">
          {renderLines(title.desktopLines)}
        </span>
        <span className="mobile-only">
          {renderLines(title.mobileLines)}
        </span>
      </>
    );
  }

  if (!title?.lines?.length) {
    return title || null;
  }

  return renderLines(title.lines);
};

const Home = () => {
  return (
    <PageLayout>
      <Hero />
      {homeBanners.map((banner) => (
        <SharedBanner
          key={banner.id}
          {...banner}
          title={renderBannerTitle(banner.title)}
        />
      ))}
      <HomeSections />
    </PageLayout>
  );
};

export default Home;
