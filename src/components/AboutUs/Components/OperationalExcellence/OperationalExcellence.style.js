
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background: #f4f0eb;
  padding: 80px 60px;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 70px 40px;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 80px;
  }
`;

export const LeftContent = styled.div`
  flex: 1;
  width: 100%;
`;

export const RightContent = styled.div`
  flex: 1;
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
    min-height: 500px;
  }

  @media (max-width: 768px) {
    min-height: 420px;
  }

  @media (max-width: 480px) {
    min-height: 340px;
  }
`;

export const Heading = styled.h2`
  font-size: 52px;
  font-weight: 400;
  color: #111111;
  margin-bottom: 50px;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 44px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const HeadingBold = styled.span`
  font-weight: 700;
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;

  @media (max-width: 768px) {
    gap: 28px;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 22px;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const IconBox = styled.div`
  width: 74px;
  min-width: 74px;
  height: 74px;
  border: 1.5px solid #ef8d32;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f0eb;
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.08);

  img {
    width: 38px;
    height: 38px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 64px;
    min-width: 64px;
    height: 64px;

    img {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: 480px) {
    width: 56px;
    min-width: 56px;
    height: 56px;

    img {
      width: 28px;
      height: 28px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 32px;
  font-weight: 400;
  color: #111111;
  margin-bottom: 12px;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Highlight = styled.span`
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #3d3d3d;
  line-height: 1.8;
  max-width: 760px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 1.6;
  }
`;

export const HandImage = styled.div`
  width: 520px;
  height: 420px;
  background-image: url("/assets/images/hand-store.png");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;

  @media (max-width: 1024px) {
    width: 440px;
    height: 360px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 380px;
    height: 320px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    height: 250px;
  }
`;

export const BranchCircle = styled.div`
  width: 92px;
  height: 92px;
  border: 2px solid #ef8d32;
  border-radius: 50%;
  background: #f4f0eb;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    width: 72px;
    height: 72px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

export const BranchImage = styled.div`
  width: 70%;
  height: 70%;
  background-image: url("/assets/images/mini-store.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const DashedLine = styled.div`
  position: absolute;
  width: 2px;
  height: 90px;
  border-left: 2px dashed #ef8d32;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    height: 70px;
  }

  @media (max-width: 480px) {
    height: 55px;
  }
`;

export const CircleOne = styled.div`
  position: absolute;
  top: 0;
  left: 18%;

  @media (max-width: 768px) {
    left: 10%;
  }
`;

export const CircleTwo = styled.div`
  position: absolute;
  top: -8%;
  left: 42%;

  @media (max-width: 768px) {
    left: 40%;
  }
`;

export const CircleThree = styled.div`
  position: absolute;
  top: 12%;
  right: 8%;

  @media (max-width: 768px) {
    right: 2%;
  }
`;

export const CircleFour = styled.div`
  position: absolute;
  top: 28%;
  left: 34%;

  @media (max-width: 768px) {
    left: 28%;
  }
`;