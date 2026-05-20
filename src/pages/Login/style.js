import styled, { css } from "styled-components";

const foodPositions = {
  burger: css`
    left: -4.9rem;
    top: 50%;
    width: 11rem;
    transform: translateY(-50%);
  `,
  fries1: css`
    left: 50%;
    top: -4.9rem;
    width: 12.4rem;
    transform: translateX(-50%);
  `,
  fries2: css`
    right: -3.4rem;
    top: 50%;
    width: 9.8rem;
    transform: translateY(-50%);
  `,
  chicken: css`
    bottom: -4.7rem;
    left: 50%;
    width: 11.9rem;
    transform: translateX(-50%);
  `,
};

export const LoginContainer = styled.section`
  min-height: 100vh;
  display: flex;
  background: #ffffff;

  @media (max-width: 47.9375rem) {
    flex-direction: column;
  }
`;

export const LeftPanel = styled.div`
  position: relative;
  flex: 0 0 58%;
  display: flex;
  justify-content: center;
  padding: 2rem 1.5rem;
  overflow: hidden;
  background: #891B1C;

  &::before,
  &::after {
    position: absolute;
    border-radius: 50%;
    content: "";
    pointer-events: none;
  }

  &::before {
    left: -10rem;
    bottom: -9rem;
    width: 18rem;
    height: 18rem;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 72%);
  }

  &::after {
    left: -4rem;
    bottom: -4rem;
    width: 10rem;
    height: 10rem;
    border: 1.1rem solid rgba(255, 255, 255, 0.06);
  }

  @media (max-width: 47.9375rem) {
    min-height: 28rem;
  }

  @media (max-width: 36rem) {
    min-height: 23rem;
    padding-inline: 1rem;
  }
`;

export const LeftPanelInner = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 28rem);
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.7rem;

  @media (max-width: 63.9375rem) {
    width: min(100%, 25rem);
    min-height: 34rem;
    gap: 3.25rem;
  }

  @media (max-width: 47.9375rem) {
    min-height: 24rem;
    gap: 2.8rem;
  }

  @media (max-width: 36rem) {
    min-height: 21rem;
    gap: 2rem;
  }
`;

export const TopLogo = styled.img`
  width: 8.25rem;
  height: auto;
  object-fit: contain;

  @media (max-width: 63.9375rem) {
    width: 7.4rem;
  }

  @media (max-width: 36rem) {
    width: 5.8rem;
  }
`;

export const Orbit = styled.div`
  position: relative;
  width: 24rem;
  aspect-ratio: 1;

  @media (max-width: 63.9375rem) {
    width: 20rem;
  }

  @media (max-width: 47.9375rem) {
    width: 18rem;
  }

  @media (max-width: 36rem) {
    width: min(100%, 15.75rem);
  }
`;

export const DottedCircle = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

export const CenterBadge = styled.div`
  position: absolute;
  inset: 50% auto auto 50%;
  width: 9.2rem;
  height: 9.2rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle at 35% 35%, #c92138 50%, #b4172b 78%, #a91126 100%);
  box-shadow: 0 1rem 2rem rgba(117, 10, 27, 0.18);

  &::before,
  &::after {
    position: absolute;
    width: 2.4rem;
    height: 0.8rem;
    border-top: 0.18rem solid #ec6632;
    border-radius: 50%;
    content: "";
  }

  &::before {
    top: 1.2rem;
    right: 1.2rem;
    transform: rotate(26deg);
  }

  &::after {
    bottom: 1.3rem;
    left: 1.1rem;
    transform: rotate(206deg);
  }

  @media (max-width: 63.9375rem) {
    width: 8.2rem;
    height: 8.2rem;
  }

  @media (max-width: 36rem) {
    width: 7rem;
    height: 7rem;

    &::before,
    &::after {
      width: 1.9rem;
      height: 0.65rem;
    }
  }
`;

export const CenterLogo = styled.img`
  width: 7.55rem;
  height: auto;
  object-fit: contain;

  @media (max-width: 63.9375rem) {
    width: 6.75rem;
  }

  @media (max-width: 36rem) {
    width: 5.8rem;
  }
`;

export const FoodItem = styled.img`
  position: absolute;
  height: auto;
  object-fit: contain;
  ${({ $variant }) => foodPositions[$variant] || ""}

  @media (max-width: 63.9375rem) {
    ${({ $variant }) =>
      $variant === "burger" &&
      css`
        left: -3.1rem;
        width: 9rem;
      `}

    ${({ $variant }) =>
      $variant === "fries1" &&
      css`
        top: -3.8rem;
        width: 10.2rem;
      `}

    ${({ $variant }) =>
      $variant === "fries2" &&
      css`
        right: -2.2rem;
        width: 8rem;
      `}

    ${({ $variant }) =>
      $variant === "chicken" &&
      css`
        bottom: -3.6rem;
        width: 9.8rem;
      `}
  }

  @media (max-width: 47.9375rem) {
    ${({ $variant }) =>
      $variant === "burger" &&
      css`
        left: -2rem;
        width: 7.8rem;
      `}

    ${({ $variant }) =>
      $variant === "fries1" &&
      css`
        top: -2.8rem;
        width: 8.8rem;
      `}

    ${({ $variant }) =>
      $variant === "fries2" &&
      css`
        right: -1.5rem;
        width: 6.8rem;
      `}

    ${({ $variant }) =>
      $variant === "chicken" &&
      css`
        bottom: -2.8rem;
        width: 8.6rem;
      `}
  }

  @media (max-width: 36rem) {
    ${({ $variant }) =>
      $variant === "burger" &&
      css`
        left: -0.8rem;
        width: 6.8rem;
      `}

    ${({ $variant }) =>
      $variant === "fries1" &&
      css`
        top: -2rem;
        width: 7.4rem;
      `}

    ${({ $variant }) =>
      $variant === "fries2" &&
      css`
        right: -0.4rem;
        width: 5.9rem;
      `}

    ${({ $variant }) =>
      $variant === "chicken" &&
      css`
        bottom: -2rem;
        width: 7.4rem;
      `}
  }
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  background: #ffffff;

  @media (max-width: 47.9375rem) {
    padding-block: 2.5rem 3rem;
  }
`;

export const Form = styled.form`
  width: min(100%, 18rem);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const HeadingGroup = styled.div`
  margin-bottom: 1.4rem;
`;

export const Title = styled.h1`
  margin: 0;
  color: #252525;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.1;
`;

export const Subtitle = styled.p`
  margin: 0.35rem 0 0;
  color: #000;
  font-size: 0.875rem;
  font-weight: 400;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

export const InputWrap = styled.label`
  position: relative;
  display: block;
`;

export const InputIcon = styled.span`
  position: absolute;
  inset: 50% auto auto 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #c5c5c5;
  font-size: 0.85rem;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.35rem;
  padding: 0.65rem 0.95rem 0.65rem 2.35rem;
  border: 0.0625rem solid #ececec;
  border-radius: 999rem;
  background: #ffffff;
  color: #333333;
  font-size: 0.8rem;
  font-weight: 400;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #b7b7b7;
  }

  &:focus {
    border-color: rgba(181, 21, 43, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(181, 21, 43, 0.08);
  }
`;

export const ErrorText = styled.p`
  margin: 0.2rem 0 0;
  color: #d9394c;
  font-size: 0.75rem;
`;

export const Button = styled.button`
  margin-top: 1rem;
  width: 100%;
  height: 2.4rem;
  border: 0;
  border-radius: 0.2rem;
  background: #891B1C;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #9f1126;
  }

  &:active {
    transform: translateY(0.0625rem);
  }
`;

export const ForgotPassword = styled.button`
  margin-top: 0.7rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: #000;
  font-size: 0.875rem;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: #5f5f5f;
  }
`;
