import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 4.5rem 0 5rem;
  background-image: url("/images/about/background.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  @media (max-width: 992px) {
    padding: 3.5rem 0;
  }

  @media (max-width: 576px) {
    padding: 2.5rem 0;
  }
`;

export const TopLeftGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 45%;
  height: 50%;
  background: radial-gradient(
    ellipse at 5% 5%,
    rgba(243, 146, 0, 0.22) 0%,
    rgba(243, 146, 0, 0.08) 40%,
    rgba(243, 146, 0, 0) 70%
  );
  pointer-events: none;
  z-index: 1;
`;

export const BottomRightGradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 60%;
  background: radial-gradient(
    ellipse at 95% 95%,
    rgba(243, 146, 0, 0.6) 0%,
    rgba(243, 146, 0, 0.28) 35%,
    rgba(243, 146, 0, 0) 70%
  );
  pointer-events: none;
  z-index: 1;
`;

export const LeftAboutImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: auto;
  max-width: 32rem;
  object-fit: contain;
  object-position: left center;
  z-index: 2;
  pointer-events: none;

  @media (max-width: 1400px) {
    max-width: 26rem;
  }

  @media (max-width: 1200px) {
    max-width: 21rem;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Container = styled.div`
  max-width: 82.5rem; /* 1320px */
  margin: 0 auto;
  padding: 0 2.5rem;
  position: relative;
  z-index: 3;

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 0 1rem;
  }
`;

export const DotArrowImage = styled.img`
  position: absolute;
  top: 0.5rem;
  right: 2.5rem;
  width: 8.5rem;
  height: auto;
  pointer-events: none;
  z-index: 4;

  @media (max-width: 1200px) {
    right: 1.5rem;
    width: 7rem;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const SectionHeader = styled.div`
  max-width: 54rem;
  margin-bottom: 2.25rem;
  margin-left: 17.5rem;

  @media (max-width: 1400px) {
    margin-left: 14.5rem;
  }

  @media (max-width: 1200px) {
    margin-left: 11.5rem;
  }

  @media (max-width: 992px) {
    margin-left: 0;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.75rem;
  }
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 2.125rem; /* 34px */
  font-weight: 500;
  color: #111111;
  line-height: 1.35;
  margin-bottom: 1rem;

  strong {
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    font-size: 1.75rem;
  }

  @media (max-width: 768px) {
    font-size: 1.45rem;
  }
`;

export const Subtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 0.84rem; /* ~13.5px */
  font-weight: 300;
  line-height: 1.75;
  color: #555555;
  max-width: 50rem;

  @media (max-width: 768px) {
    font-size: 0.81rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const MissionCard = styled.div`
  width: 100%;
  max-width: 54rem;
  background: linear-gradient(
    145deg,
    #ffffff 60%,
    rgba(255, 255, 255, 0.96) 78%,
    rgba(255, 247, 235, 0.9) 100%
  );
  border-radius: 1.25rem;
  padding: 3.25rem 3.25rem;
  box-shadow: 0 0.75rem 2.5rem rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  position: relative;
  z-index: 3;

  @media (max-width: 1200px) {
    max-width: 48rem;
    padding: 2.75rem 2.25rem;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 2.25rem 1.875rem;
    gap: 1.75rem;
  }

  @media (max-width: 768px) {
    padding: 1.75rem 1.25rem;
  }
`;

export const MissionItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.375rem; /* 22px */
  font-weight: 400;
  color: #111111;
  margin-bottom: 0.75rem;

  strong {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ItemDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 0.84rem;
  font-weight: 300;
  line-height: 1.8;
  color: #444444;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.81rem;
  }
`;
