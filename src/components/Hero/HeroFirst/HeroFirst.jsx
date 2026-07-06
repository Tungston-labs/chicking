import { useEffect, useState, memo } from "react";
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
  <>
    A <strong>Global</strong> Brand, Built to <strong>Partner</strong>.
  </>,
  <>
    {" "}
    <strong>Your </strong>Gateway to a <strong>Global Food Brand</strong>.
  </>,
  <>
    {" "}
    <strong>Turn Passion into</strong> Profit with <strong>Chicking</strong>.
  </>,
  <>
    {" "}
    <strong>Start Strong </strong>Succeed with <strong>Chicking</strong>.
  </>,
];

const images = [...homeImages.hero.frames];

const HeroFirst = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!animate) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [animate]);

  const imageIndex = index % images.length;
  const state = index % 3;

  return (
    <HeroFirstContainer>
<HeroTitle key={index}>
  {texts[index]}
</HeroTitle>
      <HeroSubtitle>
        Join Chicking, the world's fastest-growing Halal quick-service
        restaurant chain, and capitalize on a proven business model.
      </HeroSubtitle>

      <HeroButton onClick={() => navigate("/global-presence")} type="button">
        Find Our Locations <CiLocationArrow1 aria-hidden="true" />
      </HeroButton>

<ImageWrapper
  $animate={animate}
  className={animate ? `state-${state}` : "state-0"}
>        {/* Main Image */}
        <MainImage
          src={images[imageIndex]}
          alt="Chicking global franchise hero"
          width={700}
          height={750}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        {/* Floating Items */}
        <FloatingItem className="left">
          <img
            src={homeImages.hero.floating.countries}
            loading="lazy"
            decoding="async"
            width="120"
            height="120"
            alt=""
          />
          <span>Countries</span>
          <img
            src={homeImages.hero.floating.dottedCount}
            alt=""
            loading="lazy"
            decoding="async"
            width="40"
            height="40"
            className="dotted-item-count"
          />
        </FloatingItem>

        <FloatingItem className="rightTop">
          <img
            src={homeImages.hero.floating.locations}
            loading="lazy"
            decoding="async"
            width="120"
            height="120"
            alt=""
          />
          <span>Locations</span>
          <img
            src={homeImages.hero.floating.dotted}
            alt=""
            loading="lazy"
            decoding="async"
            width="30"
            height="30"
            className="dotted-item"
          />
        </FloatingItem>

        <FloatingItem className="rightCenter">
          <img
            src={homeImages.hero.floating.years}
            loading="lazy"
            decoding="async"
            width="120"
            height="120"
            alt=""
          />
          <span>Years of excellence</span>
          <img
            src={homeImages.hero.floating.dotted}
            alt=""
            loading="lazy"
            decoding="async"
            width="30"
            height="30"
            className="dotted-item"
          />
        </FloatingItem>

        <FloatingItem className="star">
          <img
            src={homeImages.hero.floating.star}
            loading="lazy"
            decoding="async"
            width="120"
            height="120"
            alt=""
          />
        </FloatingItem>
      </ImageWrapper>
    </HeroFirstContainer>
  );
};

export default memo(HeroFirst);
