import styled from "styled-components";

export const HeroWrapper = styled.section`
  width: 100%;
  position: relative;
  background-image: url("/images/management/management.svg");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-color: #891b1c;
  color: #ffffff;
  padding: 40px 0 0;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 30px 0 0;
  }

  @media (max-width: 768px) {
    padding: 25px 0 0;
  }
`;

export const HorizontalDividerLine = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: #FFFFFF80;
  margin: 0;
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

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const HeroHeader = styled.div`
  max-width: 720px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    margin-bottom: 14px;
  }
`;

export const Tag = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 4px;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  color: #ffffff;
  margin-bottom: 6px;
    margin-top: -0.2rem;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 13.5px;
  font-weight: 300;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 660px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12.5px;
  }
`;

export const ChairmanSectionWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const ChairmanCardContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 380px;
  position: relative;

  @media (max-width: 992px) {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 0;
  }
`;

export const VerticalDividerLine = styled.div`
  width: 1px;
  background-color: rgba(255, 255, 255, 0.45);
  flex-shrink: 0;

  &.middle-vertical-line {
    height: 100%;
  }

  &.bottom-vertical-line {
    height: 100%;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const ImageCardWrapper = styled.div`
  width: 300px;
  min-width: 300px;
  flex-shrink: 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: stretch;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 280px;
    height: 340px;
    margin: 0 auto;
  }
`;

export const FounderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
`;

export const ChairmanInfoContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 0 15px 45px;
  height: 100%;
  box-sizing: border-box;

  @media (max-width: 992px) {
    width: 100%;
    padding: 0;
    height: auto;
  }
`;

export const InfoTag = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2px;
`;

export const InfoTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.02em;
  margin-bottom: 6px;
  margin-top: -0.2rem;
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 6px;
  }
`;

export const InfoBio = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 13.5px;
  font-weight: 300;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.9);
  text-align: justify;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
    text-align: left;
  }
`;

export const BottomSectionWrapper = styled.div`
  width: 100%;
  padding: 0 0 35px;

  @media (max-width: 992px) {
    padding: 20px 0 30px;
  }
`;

export const BottomSectionRow = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 75px;
  margin-top: 1.5rem;
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    min-height: auto;
  }
`;

export const SocialIconsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 300px;
  min-width: 300px;
  flex-shrink: 0;

  @media (max-width: 992px) {
    width: 100%;
    min-width: 0;
  }

  a {
    color: #ffffff;
    font-size: 18px;
    opacity: 0.9;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);

    &:hover {
      opacity: 1;
      background: rgba(255, 255, 255, 0.25);
      transform: translateY(-2px);
    }
  }
`;

export const StatsGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-left: 45px;
  align-content: center;

  @media (max-width: 992px) {
    padding-left: 0;
    width: 100%;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatNumber = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 28px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const StatLabel = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.3;
`;
