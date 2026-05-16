import React, { useState, useEffect } from 'react'
import TopBanner from '../../components/TopBanner'
import franchiseImg from "../../../public/images/management/topimage.svg";
import FAQ from '../../components/FAQ/FAQ';
import PageLayout from '../../components/Layout/PageLayout';
function index() {
    const titles = [
        "Partner With A Global Franchise Leader",
        "Turn Ambition Into International Success",
        " Scale Your Business With a Proven Global Model",
        "Expanding Opportunities Delivering Global Success",
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
                        Yet with careful planning, focus, a solid Chicking network, and the right
                        <br />
                        training and support, you can position your business for growth and success.
                    </>
                }
                image={franchiseImg}
            />
            <FAQ />
        </>
    )
}

export default index
