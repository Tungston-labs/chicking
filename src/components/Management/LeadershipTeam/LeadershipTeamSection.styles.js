import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background: #f7f1eb;
  padding: 80px 0 90px;
  position: relative;

  @media (max-width: 992px) {
    padding: 60px 0;
  }

  @media (max-width: 576px) {
    padding: 40px 0;
  }
`;

export const Container = styled.div`
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

export const SectionHeader = styled.div`
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 35px;
  }
`;

export const Tag = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #333333;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: #111111;
  line-height: 1.3;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.7;
  color: #555555;
  max-width: 820px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -40px;
    right: -40px;
    height: 1px;
    background: rgba(0, 0, 0, 0.06);
    z-index: 1;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 320px;
    margin: 0 auto;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-4px);

    & > div {
      border-color: #c0c5cc;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
    }
  }
  transition: all 0.3s ease;
`;

export const CardInnerFrame = styled.div`
  width: 100%;
  height: 210px;
  background: #ffffff;
  border: 1.5px solid #e2e6ea;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
`;

export const AvatarBox = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  background: #cfd4d9;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

export const MemberName = styled.h4`
  font-family: "Poppins", sans-serif;
  font-size: 14.5px;
  font-weight: 700;
  color: #111111;
  text-transform: uppercase;
  margin-bottom: 6px;
  letter-spacing: 0.02em;
`;

export const MemberRole = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 11.5px;
  font-weight: 600;
  color: #666666;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.4;
  margin: 0;
`;
