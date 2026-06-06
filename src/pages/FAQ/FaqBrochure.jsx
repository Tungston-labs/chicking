import { useState } from "react";

import PageLayout from "../../components/Layout/PageLayout";
import TopBanner from "../../components/TopBanner";
import SiteFooter from "../../components/HomeSections/sections/SiteFooter";
import { faqBrochurePages } from "./data/faqBrochureData.js";
import {
  BrochureCell,
  BrochureFrame,
  BrochureSection,
  BrochureShell,
  BrochureTable,
  BrochureToolbar,
  Disclaimer,
  PageCount,
  Pager,
  PagerButton,
} from "./FaqBrochure.styles.js";
import sharedBannerImages from "../../assets/images/sharedBannerImages.js";

const faqImg = "/images/faq/faq1.svg";

const FaqBrochure = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const activePage = faqBrochurePages[pageIndex];
  const isFirstPage = pageIndex === 0;
  const isLastPage = pageIndex === faqBrochurePages.length - 1;

  const handlePrevious = () => {
    setPageIndex((current) => Math.max(current - 1, 0));
  };

  const handleNext = () => {
    setPageIndex((current) =>
      Math.min(current + 1, faqBrochurePages.length - 1),
    );
  };

  return (
    <>
      <PageLayout />
      <TopBanner
        description="A bilingual franchise FAQ brochure covering brand, investment, setup, training, operations, agreements, finance, and marketing support."
        image={faqImg}
        title={
          <>
            Chicking Franchise <strong>FAQ </strong>
          </>
        }
      />

      <BrochureSection>
        <BrochureShell>
          <BrochureToolbar>
            <PageCount>
              Table {pageIndex + 1} of {faqBrochurePages.length}
            </PageCount>
            <Pager>
              <PagerButton
                disabled={isFirstPage}
                onClick={handlePrevious}
                type="button"
              >
                Previous
              </PagerButton>
              <PagerButton
                disabled={isLastPage}
                onClick={handleNext}
                type="button"
              >
                Next
              </PagerButton>
            </Pager>
          </BrochureToolbar>

          <BrochureFrame>
            <BrochureTable>
              <tbody>
                {activePage.rows.map((row, index) => (
                  <tr key={`${activePage.id}-${index}`}>
                    <BrochureCell $type={row.type}>{row.english}</BrochureCell>
                    <BrochureCell $align="right" $type={row.type} dir="rtl">
                      {row.arabic}
                    </BrochureCell>
                  </tr>
                ))}
              </tbody>
            </BrochureTable>
          </BrochureFrame>

          {activePage.disclaimer ? (
            <Disclaimer>
              <p>{activePage.disclaimer.english}</p>
              <p dir="rtl">{activePage.disclaimer.arabic}</p>
            </Disclaimer>
          ) : null}
        </BrochureShell>
      </BrochureSection>

      <SiteFooter topEdgeImage={sharedBannerImages.edges.footerBlack} />
    </>
  );
};

export default FaqBrochure;
