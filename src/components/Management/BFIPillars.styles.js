import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 90px 0;
  overflow: hidden;

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
  margin-bottom: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.3;
  color: #111111;
  text-transform: capitalize;

  span {
    font-weight: 700;
  }

  strong {
    font-weight: 800;
    color: #891b1c;
  }

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  max-width: 820px;
  margin-bottom: 50px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.75;
  color: #555555;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 35px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 50px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const ImageSection = styled.div`
  width: 38%;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 550px;
  }
`;

export const StoreImage = styled.img`
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);

  opacity: ${({ fade }) => (fade ? 1 : 0.85)};
  transition: opacity 0.7s ease, transform 0.6s ease;

  @media (max-width: 768px) {
    height: 280px;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

export const SupportItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

export const IconWrap = styled.div`
  width: 56px;
  height: 56px;
  min-width: 56px;
  border: 1.5px solid #891b1c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  flex-shrink: 0;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    min-width: 48px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ItemContent = styled.div`
  flex: 1;
`;

export const ItemTitle = styled.h3`
  margin-bottom: 6px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  color: #111111;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ItemDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 13.5px;
  line-height: 1.7;
  color: #555555;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;