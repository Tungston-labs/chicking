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
  padding: 60px 0 50px;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 50px 0 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 0 30px;
  }
`;

export const HorizontalDividerLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.25);

  &.top-line {
    position: absolute;
    top: 330px;
    left: 0;
    right: 0;
    z-index: 1;

    @media (max-width: 992px) {
      display: none;
    }
  }

  &.bottom-line {
    margin: 35px 0 25px;
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

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const HeroHeader = styled.div`
  max-width: 720px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 35px;
  }
`;

export const Tag = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 12px;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.25;
  color: #ffffff;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const Subtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  max-width: 640px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const ChairmanCardContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const ImageCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  min-width: 320px;
  flex-shrink: 0;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 417px;
  background: #ffffff;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 2;
`;

export const VerticalTextStrip = styled.div`
  width: 42px;
  background: #891b1c;
  display: flex;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-family: "Poppins", sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #ffffff;
  text-transform: uppercase;
  border-right: 1px solid rgba(255, 255, 255, 0.25);
  user-select: none;
`;

export const FounderImage = styled.img`
  width: calc(100% - 42px);
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
`;

export const ChairmanInfoContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10px;

  @media (max-width: 992px) {
    width: 100%;
    padding-top: 0;
  }
`;

export const InfoTop = styled.div``;

export const InfoTag = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 6px;
`;

export const InfoTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const InfoBio = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 13.5px;
  font-weight: 300;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.9);
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 13px;
    text-align: left;
  }
`;

export const BottomSectionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
`;

export const SocialIconsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  width: 320px;
  min-width: 320px;
  flex-shrink: 0;

  @media (max-width: 992px) {
    width: 100%;
    justify-content: center;
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

export const VerticalDividerLine = styled.div`
  width: 1px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.25);

  @media (max-width: 992px) {
    display: none;
  }
`;

export const StatsGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

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
  font-weight: 700;
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
