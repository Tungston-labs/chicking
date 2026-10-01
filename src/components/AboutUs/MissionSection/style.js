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
  height: 70%;
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
  width: 55%;
  height: 65%;
  background: radial-gradient(
    ellipse at 95% 95%,
    rgba(243, 146, 0, 0.6) 0%,
    rgba(243, 146, 0, 0.3) 35%,
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
  max-width: 30rem;
  object-fit: contain;
  object-position: left center;
  z-index: 2;
  pointer-events: none;

  @media (max-width: 1300px) {
    max-width: 24rem;
  }

  @media (max-width: 1100px) {
    max-width: 19rem;
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
  top: 0rem;
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
  max-width: 64rem;
  margin-bottom: 2rem;
  margin-top: -40px;
  margin-left: 2rem;
  @media (max-width: 1600px) {
      max-width: 60rem;

    margin-left: 5rem;
  }
  @media (max-width: 1200px) {
      max-width: 45rem;

    margin-left: 6rem;
    max-width: 100%;
  }
  @media (max-width: 992px) {
    margin-left: 0;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.95rem; /* 34px */
  font-weight: 500;
  color: #111111;
  line-height: 1.35;
  margin-bottom: 0.875rem;

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
  max-width: 68rem;
  margin: 0;
  @media (max-width: 1600px) {
      max-width: 60rem;

  }
  @media (max-width: 1200px) {
      max-width: 55rem;

  }
  @media (max-width: 992px) {
    margin-left: 0;
    max-width: 100%;
  }
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
  position: relative;
  z-index: 3;
  border-radius: 1.25rem;
  padding: 1.5rem 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  /* 🪄 PREMIUM GLASSMORPHISM EFFECT */
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.78) 0%,
    rgba(255, 255, 255, 0.48) 50%,
    rgba(255, 255, 255, 0.68) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-top: 1.5px solid rgba(255, 255, 255, 0.98);
  border-left: 1.5px solid rgba(255, 255, 255, 0.98);
  box-shadow:
    0 20px 45px -12px rgba(137, 27, 28, 0.14),
    0 10px 25px -5px rgba(0, 0, 0, 0.08),
    inset 0 1px 2px rgba(255, 255, 255, 0.95),
    inset 0 -1px 2px rgba(255, 255, 255, 0.35);

  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 28px 55px -10px rgba(137, 27, 28, 0.2),
      0 15px 30px -5px rgba(0, 0, 0, 0.1),
      inset 0 1px 2px rgba(255, 255, 255, 1),
      inset 0 -1px 2px rgba(255, 255, 255, 0.4);
  }
  @media (max-width: 1600px) {
    max-width: 50.5rem;
    padding: 1.25rem 2rem;
    gap: 0.85rem;
  }
  @media (max-width: 1300px) {
    max-width: 45.5rem;
    padding: 1.25rem 2rem;
    gap: 0.85rem;
  }

  @media (max-width: 1100px) {
    max-width: 40rem;
    padding: 1.25rem 1.75rem;
    gap: 0.85rem;
  }

  @media (max-width: 992px) {
    max-width: 100%;
    padding: 1.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem 1.25rem;
  }
`;

export const MissionItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.375rem; /* 22px */
  font-weight: 500;
  color: #111111;
  margin-bottom: 0.5rem;

  strong {
    font-weight: 700;
    color: #891b1c;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ItemDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.75;
  color: #333333;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.825rem;
  }
`;
