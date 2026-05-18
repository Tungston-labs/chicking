import React, { useState, useEffect } from 'react'
import TopBanner from '../../components/TopBanner'
import franchiseImg from "../../../public/images/blog/blog1.svg";
import PageLayout from '../../components/Layout/PageLayout';
import BlogSection from '../../components/HomeSections/sections/BlogSection';
import sharedBannerImages from "../../assets/images/sharedBannerImages.js";
import PartnerCta from '../../components/HomeSections/sections/PartnerCta/PartnerCta.jsx';
import SiteFooter from '../../components/HomeSections/sections/SiteFooter/SiteFooter.jsx';
function BlogSections() {
    const titles = [
       "Insights, Ideas & Stories from Chicking",
    ];
    const [titleIndex, setTitleIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [titles.length]);
    return (
        <>
        <PageLayout/>
            <TopBanner
                key={titleIndex}
                title={titles[titleIndex]}
                description={
                    <>
                     Stay updated with the latest news, industry insights, franchise
                        <br />
                   updates, and behind-the-scenes stories.
                    </>
                }
                image={franchiseImg}
            />
   <BlogSection/>

 <PartnerCta
      action={{
        to: "/franchiseform",
        label: "Franchise Inquiry",
      }}
      actionBackground="#ffffff"
      actionTextColor="#891B1C"
      background="#891B1C"
      bottomEdgeImage={sharedBannerImages.edges.top}
      description="BFI doesn't just provide a brand name. We deliver a complete Chicking franchise business system backed by 20 years of operational expertise. From day one of your franchise journey through years of growth, our team remains dedicated to your profitability and success."
      textColor="#ffffff"
      title={
        <>
          Partner With Chicking <strong>- Where Proven</strong>
          <br />
          <strong>Success Meets Global Opportunity</strong>,
          
        </>
      }
      topEdgeImage={sharedBannerImages.edges.top}
    />
<SiteFooter topEdgeImage={null} />


        </>
    )
}

export default BlogSections
