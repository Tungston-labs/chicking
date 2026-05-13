import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroFirstContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  flex-direction: column;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  color: #000;
  margin: 0;
  animation: ${slideUp} 0.5s ease;

  strong {
    font-weight: 700;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  max-width: 46rem;
  margin-top: 1rem;
  text-align: center;
  color: #000;
`;

export const HeroButton = styled.a`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  background: #891b1c;
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

  svg {
    pointer-events: none;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 45rem;
  display: flex;
  justify-content: center;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/images/Earth.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    width: 120%;
    height: 120%;

    left: 40%;
    top: 50%;
    transform: translate(-50%, -50%);

    z-index: 0;
    opacity: 0.15;

    animation: floatBg 6s ease-in-out infinite;
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
    top: -30%;
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
      transform: translate(180px, 140px);
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
      transform: translateX(180px) translateY(480px);
    }
    .rightCenter {
      transform: translateX(-960px) translateY(-20%);
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
      right: -180px;
    }

    &.state-1 {
      .rightTop {
        transform: translate(120px, 100px);
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
      left: -60px;
    }

    .rightTop {
      right: 0;
      top: -20%;
    }

    .rightCenter {
      right: -120px;
      top: 50%;
    }
     .star {
    right: -80px;
    top: -10%;
  }
    &.state-1 {
      .left {
        transform: translate(-10px, -30%);
      }
      .rightTop {
        transform: translate(80px, 80px);
      }
      .rightCenter {
        transform: translate(0, -30%);
      }
      .star {
        transform: translate(-20px, -50%);
      }
    }

    &.state-2 {
      .left {
        transform: translate(0, -20%);
      }
      .rightTop {
        transform: translate(80px, 120px);
      }
      .rightCenter {
        transform: translate(-500px, -20%);
      }
      .star {
        transform: translate(20px, -60%);
      }
    }
  }


  @media (max-width: 768px) {
    .left,
    .rightTop,
    .rightCenter,
    .star {
      display: none;
    }
  }
`;

export const MainImage = styled.img`
  position: relative;
  z-index: 2;
  width: 55rem;
  max-width: 100%;
  height: auto;
  animation: ${slideUp} 0.6s ease;

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

  .dotted-item,
  .dotted-item-count {
    position: absolute;
    width: 7rem;
    height: 7rem;
    z-index: 1;
    pointer-events: none;
transition: transform 1.4s cubic-bezier(0.22, 1, 0.36, 1);  }

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
    position: relative;
     
    .dotted-item,
    .dotted-item-count {
      display: none;
    }
  }
`;
