import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 5rem 0 5.5rem;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 992px) {
    padding: 3.5rem 0;
  }

  @media (max-width: 576px) {
    padding: 2.5rem 0;
  }
`;

export const Container = styled.div`
  max-width: 82.5rem; /* 1320px */
  margin: 0 auto;
  padding: 0 2.5rem;
  position: relative;

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 0 1rem;
  }
`;

export const HeaderWrapper = styled.div`
  max-width: 51.25rem;
  margin-bottom: 3.125rem;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 2.18rem;
  }
`;

export const Heading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 2.125rem; /* 34px */
  font-weight: 300;
  color: #111111;
  line-height: 1.3;
  margin-bottom: 1rem;

  span {
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
  font-size: 0.84rem;
  font-weight: 300;
  line-height: 1.75;
  color: #555555;
  max-width: 48.75rem;

  @media (max-width: 768px) {
    font-size: 0.81rem;
  }
`;

export const WingsDishImage = styled.img`
  position: absolute;
  top: 1.5rem;
  right: 0;
  width: 22rem;
  height: auto;
  object-fit: contain;
  pointer-events: none;
  z-index: 2;

  @media (max-width: 1600px) {
    top: 2rem;
    width: 20rem;
  }

  @media (max-width: 1300px) {
    top: 2.5rem;
    width: 17rem;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const MainGrid = styled.div`
  display: flex;
  gap: 3.5rem;
  align-items: flex-start;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2.18rem;
  }
`;

export const VideoCardWrapper = styled.div`
  width: calc(29rem + ((100vw - 82.5rem) / 2 + 2.5rem));
  max-width: calc(32rem + ((100vw - 82.5rem) / 2 + 2.5rem));
  position: relative;
  border-radius: 0 0.75rem 0.75rem 0;
  overflow: hidden;
  box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: opacity 0.3s ease;
  margin-left: calc(-1 * ((100vw - 82.5rem) / 2 + 2.5rem));
  flex-shrink: 0;

  &:hover {
    opacity: 0.95;
  }

  @media (max-width: 1380px) {
    margin-left: -2.5rem;
    width: calc(27rem + 2.5rem);
    max-width: 100%;
  }

  @media (max-width: 1024px) {
    margin-left: -1.5rem;
    width: calc(24rem + 1.5rem);
  }

  @media (max-width: 992px) {
    margin-left: 0;
    width: 100%;
    max-width: 100%;
    border-radius: 0.75rem;
  }
`;

export const VideoCardImage = styled.img`
  width: 100%;
  height: 28.75rem;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    height: 18.75rem;
  }
`;

export const FeaturesWrapper = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
`;

export const IconBox = styled.div`
  width: 2.875rem;
  height: 2.875rem;
  min-width: 2.875rem;
  border-radius: 0.375rem;
  border: 1.5px solid #ebac0a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ebac0a;
  font-size: 1.25rem;
  margin-top: 0.125rem;
  background: #ffffff;
`;

export const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FeatureTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #111111;
  letter-spacing: 0.04em;
  margin-bottom: 0.375rem;

  span {
    font-weight: 700;
  }
`;

export const FeatureDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 0.81rem;
  font-weight: 300;
  line-height: 1.75;
  color: #555555;
  margin: 0;
`;
