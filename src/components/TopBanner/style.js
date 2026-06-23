import styled, { keyframes } from "styled-components";

const jumpAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  40% {
    opacity: 1;
    transform: translateY(-10px);
  }

  70% {
    transform: translateY(4px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const BannerWrapper = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #891B1C;
  min-height: 250px;
  display: flex;
  align-items: center;
`;

export const BannerContainer = styled.div`
  width: 100%;
  max-width: 1640px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin: 0 5rem;
  padding: 40px 30px 40px ;

  @media (max-width: 1100px) {
    padding: 30px 40px 25px;
      margin: 0 2rem;

  }

  @media (max-width: 768px) {
    padding: 40px 20px 60px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin: 0 2rem;

  }

  @media (max-width: 480px) {
    padding: 30px 0 20px;
  }
`;

export const LeftSection = styled.div.attrs({ "data-animate": "fade-right" })`
  flex: 1;
  max-width: 650px;
  z-index: 2;
  width: 100%;
   @media (max-width: 1024px) {
      max-width: 450px;

  }
`;

export const Heading = styled.h1`
  font-size: 42px;
  line-height: 1.1;
  font-weight: 800;
  color: #fff;
  animation: ${jumpAnimation} 0.8s ease;
  margin-bottom: -10px;

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 992px) {
    font-size: 2rem;
  }

  @media (max-width: 767px) {
    font-size: 1.8rem;
    text-align: left;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    line-height: 1.3;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255,255,255,0.9);
  max-width: 620px;


  @media (max-width: 1200px) {
    font-size: 12px;
    max-width: 420px;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
    text-align: left;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.7;
  }
`;

export const RightSection = styled.div.attrs({ "data-animate": "fade-left" })`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  max-width: 400px;
  object-fit: contain;
  animation: soft-float 4.8s ease-in-out infinite;
  transition:
    transform 240ms ease,
    filter 240ms ease;

  &:hover {
    filter: drop-shadow(0 1.125rem 1.25rem rgba(0, 0, 0, 0.16));
    transform: scale(1.025);
  }

  @media (max-width: 1200px) {
    max-width: 300px;
  }

  @media (max-width: 992px) {
    max-width: 280px;
  }
`;

export const BottomGraphic = styled.img`
  position: absolute;
  bottom: -1px;
  left: -0.2rem;
  width: calc(100% + 0.4rem);
  height: clamp(2.65rem, 2.1vw, 3.7rem);
  background: #ffffff;
  object-fit: fill;
  z-index: 1;
  pointer-events: none;
  user-select: none;
`;
