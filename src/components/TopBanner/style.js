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
  min-height: 230px;
  display: flex;
  align-items: center;
`;

export const BannerContainer = styled.div`
  width: 100%;
  max-width: 1640px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 20px 30px 20px ;

  @media (max-width: 1100px) {
    padding: 30px 40px 25px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px 60px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 16px 20px;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  max-width: 650px;
  z-index: 2;
  width: 100%;
`;

export const Heading = styled.h1`
  font-size: 42px;
  line-height: 1.1;
  font-weight: 800;
  color: #fff;
  animation: ${jumpAnimation} 0.8s ease;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 992px) {
    font-size: 3rem;
  }

  @media (max-width: 767px) {
    font-size: 1.8rem;
    text-align: left;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
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
  }
  @media (max-width: 768px) {
    font-size: 12px;
    text-align: left;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    line-height: 1.7;
  }
`;

export const RightSection = styled.div`
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
  max-width: 460px;
  object-fit: contain;

  @media (max-width: 1200px) {
    max-width: 300px;
  }

  @media (max-width: 992px) {
    max-width: 280px;
  }
`;

export const BottomGraphic = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;

  object-fit: cover;
  z-index: 1;
  pointer-events: none;
`;