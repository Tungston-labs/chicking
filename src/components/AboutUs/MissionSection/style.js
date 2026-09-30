import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 5rem 0 5.5rem;
  background: linear-gradient(180deg, #fffbf6 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 992px) {
    padding: 3.5rem 0;
  }

  @media (max-width: 576px) {
    padding: 2.5rem 0;
  }
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

  @media (max-width: 1300px) {
    max-width: 26rem;
  }

  @media (max-width: 1100px) {
    max-width: 22rem;
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

export const SectionHeader = styled.div`
  max-width: 52rem;
  margin-bottom: 3rem;
  margin-left: 18rem;

  @media (max-width: 1300px) {
    margin-left: 15rem;
  }

  @media (max-width: 1100px) {
    margin-left: 12rem;
  }

  @media (max-width: 992px) {
    margin-left: 0;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 2.125rem; /* 34px */
  font-weight: 700;
  color: #111111;
  line-height: 1.35;
  margin-bottom: 1rem;

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
  max-width: 48.75rem;

  @media (max-width: 768px) {
    font-size: 0.81rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  margin-top: 1.25rem;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const DotArrowImage = styled.img`
  position: absolute;
  top: -4rem;
  right: 0;
  width: 8.75rem;
  height: auto;
  pointer-events: none;
  z-index: 1;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const MissionCard = styled.div`
  width: 100%;
  max-width: 41rem;
  background: #ffffff;
  border-radius: 1rem;
  padding: 3.125rem 2.8rem;
  box-shadow: 0 0.75rem 2.5rem rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  position: relative;
  z-index: 3;

  @media (max-width: 1024px) {
    padding: 2.25rem 1.875rem;
    gap: 1.75rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
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
