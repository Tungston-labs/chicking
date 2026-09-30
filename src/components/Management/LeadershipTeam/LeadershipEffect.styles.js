import styled from "styled-components";

export const Wrapper = styled.section`
  background: #000000;
  position: relative;
  overflow: hidden;
  padding: 90px 0;
  color: #ffffff;

  @media (max-width: 1024px) {
    padding: 70px 0;
  }

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const BrushTop = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  object-fit: cover;
  z-index: 1;
`;

export const Content = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    padding: 0 24px;
  }

  @media (max-width: 576px) {
    padding: 0 16px;
  }
`;

export const Heading = styled.h2`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.3;
  color: #ffffff;
  margin-bottom: 14px;
  text-transform: capitalize;

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  text-align: center;
  max-width: 760px;
  margin: 0 auto 60px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.85);

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 40px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
  }
`;

export const Card = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 992px) {
    align-items: center;
    text-align: center;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  margin-bottom: 16px;

  svg {
    color: #ffffff;
    width: 40px;
    height: 40px;
  }
`;

export const CardTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.4;
  color: #ffffff;
  margin-bottom: 12px;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 13.5px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;