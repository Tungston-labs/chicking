import styled from "styled-components";

export const Wrapper = styled.section`
  background: #891b1c;
  padding: 90px 0;
  overflow: hidden;
  color: #ffffff;

  @media (max-width: 1024px) {
    padding: 70px 0;
  }

  @media (max-width: 768px) {
    padding: 50px 0;
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

export const Heading = styled.h2`
  text-align: center;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.3;
  margin-bottom: 12px;
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
  color: rgba(255, 255, 255, 0.9);
  max-width: 680px;
  margin: 0 auto 50px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.75;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 35px;
  }
`;

export const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 420px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 500px;
  }

  @media (max-width: 576px) {
    padding: 16px;
  }
`;

export const TeamCard = styled.div`
  padding: 18px 24px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  background: #891b1c;
  color: #ffffff;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const CardTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.4;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

export const CardName = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 4px;
  letter-spacing: 0.02em;
`;

export const CardRole = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 12.5px;
  line-height: 1.4;
  opacity: 0.85;
`;

export const CenterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    margin: 10px 0;
  }
`;

export const LogoCircle = styled.div`
  width: 210px;
  height: 210px;
  border-radius: 50%;
  background: transparent;
  box-shadow: -30px -30px 40px 10px rgba(255, 255, 255, 0.6),
    30px 30px 40px 15px rgba(255, 255, 255, 0.4),
    0 0 35px 10px rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 210px;
    height: 210px;
    border-radius: 50%;
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;

    img {
      width: 150px;
      height: 150px;
    }
  }
`;