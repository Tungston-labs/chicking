import { useEffect, useState } from "react";
import {
  HeroButton,
  HeroFirstContainer,
  HeroSubtitle,
  HeroTitle,
  ImageWrapper,
  MainImage,
  FloatingItem,
} from "./HeroFirst.styles.js";
import { CiLocationArrow1 } from "react-icons/ci";

const texts = [
  <>A <strong>Global</strong> Brand, Built to <strong>Partner</strong>.</>,
  <> <strong>Your </strong>Gateway to a <strong>Global Food Brand</strong>.</>,
  <> <strong>Turn Passion into</strong> Profit with <strong>Chicking</strong>.</>,
  <> <strong>Start Strong </strong>Succeed with <strong>Chicking</strong>.</>,
];

const images = [
  "/images/frame6.svg",
  "/images/frame5.svg",
  "/images/frame1.svg",
];

const HeroFirst = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const imageIndex = index % images.length;
  const state = index % 3; 

  return (
    <HeroFirstContainer>
      <HeroTitle>
        {texts[index]}
      </HeroTitle>

      <HeroSubtitle>
        Join Chicking, the world's fastest-growing Halal quick-service
        restaurant chain, and capitalize on a proven business model.
      </HeroSubtitle>

      <HeroButton href="#">
        Franchise Inquiry <CiLocationArrow1 />
      </HeroButton>

      <ImageWrapper className={`state-${state}`}>
        {/* Main Image */}
        <MainImage
          src={images[imageIndex]}
          alt="hero visual"
          width="700"
          height="750"
        />

        {/* Floating Items */}
        <FloatingItem className="left">
          <img src="/images/countries.svg" width="120" height="120" alt="" />
          <span>Countries</span>
          <img src="/images/dotted1.svg" alt="" className="dotted-item-count" />
        </FloatingItem>

        <FloatingItem className="rightTop">
          <img src="/images/locations.svg" width="120" height="120" alt="" />
          <span>Locations</span>
          <img src="/images/dotted.svg" alt="" className="dotted-item" />
        </FloatingItem>

        <FloatingItem className="rightCenter">
          <img src="/images/Years.svg" width="120" height="120" alt="" />
          <span>Years of excellence</span>
          <img src="/images/dotted.svg" alt="" className="dotted-item" />
        </FloatingItem>

        <FloatingItem className="star">
          <img src="/images/star.svg" width="120" height="120" alt="" />
        </FloatingItem>


      </ImageWrapper>
    </HeroFirstContainer>
  );
};

export default HeroFirst;
