import React, { useState, useEffect } from 'react'
import TopBanner from '../../components/TopBanner'
import faqImg from "../../../public/images/faq/faq1.svg";
import FAQ from '../../components/FAQ/FAQ';
import PageLayout from '../../components/Layout/PageLayout';
import PartnerCta from '../../components/HomeSections/sections/PartnerCta';
import SiteFooter from '../../components/HomeSections/sections/SiteFooter';
import sharedBannerImages from "../../assets/images/sharedBannerImages.js";
function index() {
    const titles = [
        "Frequently Asked Questions?",
        "Let’s Clear Things Up",
        " Ask Us Anything",
        "Everything You Need to Know",
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
            <PageLayout />
            <TopBanner
                key={titleIndex}
                title={titles[titleIndex]}
                description={
                    <>
                        Yet with careful planning, focus, a solid Chicking network, and the right
                      
                        training and support, you can position your business for growth and success.
                    </>
                }
                image={faqImg}
            />
            <FAQ />
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

export default index
