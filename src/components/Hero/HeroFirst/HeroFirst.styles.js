import styled, { keyframes } from "styled-components";
import homeImages from "../../../assets/images/homeImages.js";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0,44px,0);
  }

  to {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`;

export const HeroFirstContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
  flex-direction: column;

  @media (max-width: 767px) {
    padding: 1.25rem 1rem 0.75rem;
  }
`;

export const HeroTitle = styled.h1`
  min-height: clamp(2.75rem, 5vw, 3.25rem);
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  color: #000;
  margin: 0;
  animation: ${slideUp} 350ms cubic-bezier(.22,1,.36,1);

  will-change: transform, opacity;
  strong {
    font-weight: 700;
  }
  @media (max-width: 1023px) {
    font-size: 2.5rem;
  }
  @media (max-width: 767px) {
    font-size: 2rem;
    min-height: auto;
  }

  @media (max-width: 480px) {
    font-size: 1.7rem;
    line-height: 1.2;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1rem;
  font-weight: 300;
  max-width: 46rem;
  text-align: center;
  color: #000;
  margin: 0.9rem 0 0;

  @media (max-width: 767px) {
    max-width: 21rem;
    font-size: 0.92rem;
    line-height: 1.6;
  }
`;

export const HeroButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  border: 0;
  border-radius: 0.25rem;
  background: #891b1c;
  position: relative;
  z-index: 4;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;

  transition:
    background 160ms ease,
    transform 160ms ease;

  &:hover {
    background: #751012;
  }

  svg {
    display: block;
    flex: 0 0 auto;
    font-size: 1.05rem;
    pointer-events: none;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 767px) {
    margin-top: 1.1rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 45rem;
  min-height: clamp(26rem, 54vw, 39rem);
  display: flex;
  justify-content: center;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("${homeImages.hero.earth}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    width: 120%;
    height: 120%;

    left: 40%;
    top: 50%;
    transform: translate(-50%, -50%);

    z-index: 0;
    opacity: 0.1;

    animation: ${({ $animate }) =>
      $animate ? "floatBg 6s ease-in-out infinite" : "none"};
  }

  @keyframes floatBg {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    50% {
      transform: translate(-50%, -48%) rotate(2deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }

  .left {
    left: -120px;
    top: 10%;
    transform: translateY(-50%);
  }

  .rightTop {
    right: -80px;
    top: -20%;
  }
  .star {
    right: -80px;
    top: 20%;
  }
  .rightCenter {
    right: -280px;
    top: 50%;
    transform: translateY(-50%);
  }

  .left::after {
    transform: translateX(-50%) rotate(-40deg);
  }
  &.state-0 {
    .left {
      transform: translate(0, -50%);
    }

    .rightTop {
      transform: translate(0, 0);
    }

    .rightCenter {
      transform: translate(0, -50%);
    }

    .star {
      transform: translate(0, 0);
    }
  }
  &.state-1 {
    .left {
      transform: translate(-20px, -30%);
    }
    .rightTop {
    transform: translate(60px, 40px);
}
    .rightCenter {
      transform: translate(0, -20%);
    }
    .star {
      transform: translate(-50px, -80%);
    }
  }

  &.state-2 {
    .left {
      transform: translate(0, -20%);
    }
    .rightTop {
      transform: translate(60px, 80px);
    }
    .rightCenter {
      transform: translate(-180px, -20%);
    }
    .star {
      transform: translate(50px, -100%);
    }
  }

  @media (max-width: 1300px) {
    .left {
      left: -80px;
    }

    .rightCenter {
      right: -140px;
    }

    &.state-1 {
      .rightTop {
        transform: translate(80px, 10px);
      }
      .rightCenter {
        transform: translate(-40px, -10%);
      }
      .star {
        transform: translate(-30px, -60%);
      }
    }

    &.state-2 {
      .rightTop {
        transform: translate(40px, 240px);
      }
      .rightCenter {
        transform: translate(-650px, -20%);
      }
      .star {
        transform: translate(30px, 100%);
      }
    }
  }

  @media (max-width: 1023px) {
    .left {
      left: -2rem;
      top: 16%;
      transform: translateY(-50%);
    }

    .rightTop {
      right: -1rem;
      top: -6%;
    }

    .rightCenter {
      right: -2.5rem;
      top: 48%;
      transform: translateY(-50%);
    }

    .star {
      right: -1.5rem;
      top: 8%;
    }

    &.state-0,
    &.state-1,
    &.state-2 {
      .left {
        transform: translateY(-50%);
      }

      .rightTop {
        transform: none;
      }

      .rightCenter {
        transform: translateY(-50%);
      }

      .star {
        transform: none;
      }
    }
  }

  @media (max-width: 767px) {
    max-width: 22rem;
    min-height: clamp(18rem, 78vw, 23rem);
    margin-top: 0.5rem;

    &::before {
      animation: none;
      width: 105%;
      height: 105%;
      left: 50%;
    }

    .left {
      left: -0.1rem;
      top: 13%;
      transform: none;
    }

    .rightTop {
      right: -0.1rem;
      top: 1%;
      transform: none;
    }

    .rightCenter {
      display: none;
    }

    .star {
      right: 0.65rem;
      top: 22%;
      transform: none;
    }

    &.state-0,
    &.state-1,
    &.state-2 {
      .left,
      .rightTop,
      .rightCenter,
      .star {
        transform: none;
      }
    }
  }
`;

export const MainImage = styled.img`
  position: relative;
  z-index: 2;
  width: 55rem;
  max-width: 100%;
  height: auto;

  @media (max-width: 1300px) {
    width: 50rem;
  }

  @media (max-width: 1024px) {
    width: 50rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FloatingItem = styled.div`
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.2rem;
  transition:
    transform 1.4s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.8s ease;
  span {
    z-index: 2;
    white-space: nowrap;
    font-weight: 500;
  }

  img:not(.dotted-item, .dotted-item-count) {
    width: 5rem;
    height: 5rem;
    z-index: 2;
  }

  @media (max-width: 767px) {
    padding: 0.55rem;

    span {
      font-size: 0.7rem;
    }

    img:not(.dotted-item, .dotted-item-count) {
      width: 3.3rem;
      height: 3.3rem;
    }
  }

  .dotted-item,
  .dotted-item-count {
    position: absolute;
    width: 7rem;
    height: 7rem;
    z-index: 1;
    pointer-events: none;
    transition: transform 1.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &.left .dotted-item-count {
    top: 60%;
    left: 60%;
  }

  &.rightTop .dotted-item,
  &.rightCenter .dotted-item {
    top: 70%;
    right: 60%;
  }

  @media (max-width: 1300px) {
    padding: 1rem;

    img:not(.dotted-item, .dotted-item-count) {
      width: 6rem;
      height: 6rem;
    }

    .dotted-item,
    .dotted-item-count {
      width: 6rem;
      height: 6rem;
    }

    &.left .dotted-item-count {
      left: 55%;
    }

    &.rightTop .dotted-item,
    &.rightCenter .dotted-item {
      right: 55%;
    }
  }

  /* =========================
     ✅ ≤1024px
  ========================= */
  @media (max-width: 1024px) {
    padding: 0.8rem;
    transition: none;

    span {
      font-size: 0.7rem;
    }

    img:not(.dotted-item, .dotted-item-count) {
      width: 5rem;
      height: 5rem;
    }

    .dotted-item,
    .dotted-item-count {
      width: 5rem;
      height: 5rem;
      transition: none;
    }

    &.left .dotted-item-count {
      left: 50%;
      top: 65%;
    }

    &.rightTop .dotted-item,
    &.rightCenter .dotted-item {
      right: 50%;
      top: 75%;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    padding: 0.6rem;

    span {
      font-size: 0.62rem;
      line-height: 1.1;
    }

    img:not(.dotted-item, .dotted-item-count) {
      width: 3.8rem;
      height: 3.8rem;
    }

    .dotted-item,
    .dotted-item-count {
      width: 4.8rem;
      height: 4.8rem;
      display: block;
    }

    &.left .dotted-item-count {
      top: 58%;
      left: 58%;
    }

    &.rightTop .dotted-item,
    &.rightCenter .dotted-item {
      top: 68%;
      right: 58%;
    }
  }
`;
