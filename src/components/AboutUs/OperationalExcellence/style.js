import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  overflow: hidden;
  font-family: "Poppins", sans-serif;

  @media (max-width: 992px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 576px) {
    padding: 2.5rem 1rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1650px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
  }
`;

export const LeftContent = styled.div`
  flex: 1;
  width: 100%;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  color: #000000;
  line-height: 1.2;
  margin-bottom: 1.3rem;

  span {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 576px) {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    gap: 1.8rem;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  width: 100%;

  img {
    width: 3.1rem;
    height: 3.1rem;
    object-fit: contain;
    flex-shrink: 0;

    /* REMOVE THIS */
    /* margin-top: 0.15rem; */

    /* ADD THIS */
    align-self: flex-start;
  }

  &:nth-child(1),
  &:nth-child(2) {
    max-width: 100%;
  }

  &:nth-child(3),
  &:nth-child(4) {
    max-width: 62%;
  }

  @media (max-width: 1100px) {
    &:nth-child(3),
    &:nth-child(4) {
      max-width: 100%;
    }
  }

  @media (max-width: 576px) {
    gap: 0.8rem;

    img {
      width: 2.8rem;
      height: 2.8rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  color: #000;
  line-height: 1.2;
  margin: 0 0 0.55rem 0;

  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;

  span {
    font-weight: 700;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  color: #2d2d2d;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

export const RightContent = styled.div`
  
`;

export const MainImage = styled.img`
  width: 100%;
  max-width: 29rem;
  object-fit: contain;
  display: block;

  @media (max-width: 992px) {
    max-width: 23rem;
  }

  @media (max-width: 768px) {
    max-width: 20rem;
  }

  @media (max-width: 576px) {
    max-width: 16rem;
  }
`;