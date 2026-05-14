import React, { useEffect, useState } from "react";
import FranchiseBanner from "../../components/TopBanner";
import franchiseImg from "../../../public/images/franchise.svg";

const Propositions = () => {
  const titles = [
    "Partner With A Global Franchise Leader",
    "Expand Your Business Growth",
    "Join Our Franchise Network",
  ];

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <FranchiseBanner
      key={titleIndex}
      title={titles[titleIndex]}
      description="Yet With Careful Planning, Focus, A Solid Chicking Network, And The Right Training And Support, You Can Position Your Business For Growth And Success."
      image={franchiseImg}
    />
  );
};

export default Propositions;