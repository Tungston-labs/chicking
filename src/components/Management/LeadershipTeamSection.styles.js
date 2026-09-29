import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background: #f9f8f6;
  padding: 80px 0 90px;

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
  background: #ffffff;
  border-radius: 8px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #eaeaea;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    border-color: #dcdcdc;
  }
`;

export const AvatarBox = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  background: #eef0f2;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #f4f4f4;

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
