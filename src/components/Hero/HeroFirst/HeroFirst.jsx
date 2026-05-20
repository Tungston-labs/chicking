import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import homeImages from "../../../assets/images/homeImages.js";

const texts = [
  <>A <strong>Global</strong> Brand, Built to <strong>Partner</strong>.</>,
  <> <strong>Your </strong>Gateway to a <strong>Global Food Brand</strong>.</>,
  <> <strong>Turn Passion into</strong> Profit with <strong>Chicking</strong>.</>,
  <> <strong>Start Strong </strong>Succeed with <strong>Chicking</strong>.</>,
];

const images = [
  ...homeImages.hero.frames,
];

const HeroFirst = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

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

      <HeroButton onClick={() => navigate("/franchiseform")} type="button">
        Franchise With Us <CiLocationArrow1 aria-hidden="true" />
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
          <img
            src={homeImages.hero.floating.countries}
            width="120"
            height="120"
            alt=""
          />
          <span>Countries</span>
          <img
            src={homeImages.hero.floating.dottedCount}
            alt=""
            className="dotted-item-count"
          />
        </FloatingItem>

        <FloatingItem className="rightTop">
          <img
            src={homeImages.hero.floating.locations}
            width="120"
            height="120"
            alt=""
          />
          <span>Locations</span>
          <img src={homeImages.hero.floating.dotted} alt="" className="dotted-item" />
        </FloatingItem>

        <FloatingItem className="rightCenter">
          <img
            src={homeImages.hero.floating.years}
            width="120"
            height="120"
            alt=""
          />
          <span>Years of excellence</span>
          <img src={homeImages.hero.floating.dotted} alt="" className="dotted-item" />
        </FloatingItem>

        <FloatingItem className="star">
          <img src={homeImages.hero.floating.star} width="120" height="120" alt="" />
        </FloatingItem>


      </ImageWrapper>
    </HeroFirstContainer>
  );
};

export default HeroFirst;
