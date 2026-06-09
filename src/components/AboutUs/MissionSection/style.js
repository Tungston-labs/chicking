// src/components/AboutUs/MissionSection/style.js

import styled, { css } from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 100px 20px;
  background: #FFFFFF;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 70px 16px;
  }
`;

export const Container = styled.div`
  max-width: 1320px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  position: relative;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const SideImage = styled.div`
  width: 256px;
  min-width: 256px;
  height: 463px;
  border-radius: 10px;
  overflow: hidden;

  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  flex-shrink: 0;
  transition:
    box-shadow 0.4s ease,
    transform 0.4s ease;
  position: relative;
  display: flex;
  align-items: flex-end;

  &[data-animate] {
    opacity: 1;
    filter: none;
  }

  &:hover {
    transform: translateY(-0.4rem);
    box-shadow: 0 1.125rem 2rem rgba(0, 0, 0, 0.14);
  }

  > div {
    width: 100%;
    padding: 14px 14px 16px;
    background: #9d1414;
    color: #ffffff;
  }

  @media (max-width: 992px) {
    width: min(100%, 380px);
    max-width: 380px;
    min-width: 0;
    height: 320px;
    align-self: center;
    margin: 0 auto;

    ${({ $hideOnMobile }) =>
      $hideOnMobile &&
      css`
        display: none;
      `}
  }

  @media (max-width: 576px) {
    width: min(100%, 340px);
    height: 260px;

    &[data-animate] {
      transform: none;
    }
  }
`;

export const ContentCard = styled.div`
  width: 100%;
  max-width: 610px;
  min-height: 470px;

  background: #ffffff;

  padding: 70px 55px;

  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);

  text-align: center;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  transition:
    opacity 680ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 680ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 260ms ease,
    box-shadow 260ms ease;

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0px 18px 38px rgba(0, 0, 0, 0.11);
  }

  @media (max-width: 992px) {
    min-height: auto;
    padding: 50px 24px;
  }
`;

export const Crown = styled.div`
  width: 120px;
  height: 45px;

  background-image: url("/images/crown.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;

  font-size: 1.7rem;

  line-height: 2rem;

  letter-spacing: -0.03em;

  text-align: center;

  text-transform: capitalize;

  font-weight: 400;

  color: #111111;

  margin-bottom: 28px;

  span {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-family: "Poppins", sans-serif;

  font-weight: 300;

  font-size: 0.875rem;

  line-height: 30px;

  letter-spacing: 0.02em;

  text-align: center;

  color: #000;

  max-width: 470px;

  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 28px;
  }
`;

export const ChairmanQuoteAuthor = styled.h3`
  margin: 0 0 9px;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.01em;
  text-transform: uppercase;
`;

export const ChairmanQuoteText = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 0.78rem;
  line-height: 1.65;
  font-weight: 400;
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  left: -42px;
  right: -42px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
  z-index: 2;

  @media (max-width: 992px) {
    position: static;
    transform: none;
    margin-top: 12px;
    gap: 18px;
    justify-content: center;
  }
`;

export const ArrowButton = styled.button`
  width: 62px;
  height: 62px;

  border-radius: 50%;

  border: none;

  background: #9d1414;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  pointer-events: auto;

  transition: 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 576px) {
    width: 54px;
    height: 54px;
  }
`;

export const ArrowIcon = styled.span`
  color: #ffffff;

  font-size: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s ease;

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;
