import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const authRed = "#891b1c";
const authRedHover = "#751012";
const authBorder = "#d6d6d6";
const authText = "#000000";
const authMuted = "#6c6c6c";
const authOrange = "#ec6632";

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

export const AuthPage = styled.section`
  min-height: 100vh;
  display: flex;
  background: #ffffff;

  @media (max-width: 47.9375rem) {
    display: block;
  }
`;

export const AuthLeftPanel = styled.div`
  flex: 0 0 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  background: ${authRed};

  @media (min-width: 64rem) {
    flex-basis: 58%;
    padding: 2.5rem 2rem;
  }

  @media (max-width: 47.9375rem) {
    display: none;
  }
`;

export const AuthRightPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  background: #ffffff;

  @media (max-width: 47.9375rem) {
    min-height: 100vh;
    width: 100%;
    padding: 1.5rem 1rem;
  }
`;

export const LeftPanelInner = styled.div`
  position: relative;
  width: min(100%, 28rem);
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.7rem;

  @media (min-width: 64rem) {
    width: min(100%, 31rem);
    min-height: 44rem;
    gap: 5.4rem;
  }

  @media (max-width: 63.9375rem) {
    width: min(100%, 25rem);
    min-height: 34rem;
    gap: 3.25rem;
  }

  @media (max-width: 47.9375rem) {
    min-height: 18rem;
    gap: 2.4rem;
  }
`;

export const TopLogo = styled.img`
  width: 8.25rem;
  height: auto;
  object-fit: contain;

  @media (min-width: 64rem) {
    width: 9.2rem;
  }

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

  @media (min-width: 64rem) {
    width: 27rem;
  }

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

  @media (min-width: 64rem) {
    width: 10.15rem;
    height: 10.15rem;
  }

  &::before,
  &::after {
    position: absolute;
    width: 2.4rem;
    height: 0.8rem;
    border-top: 0.18rem solid ${authOrange};
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

  @media (min-width: 64rem) {
    width: 8.35rem;
  }

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

  @media (min-width: 64rem) {
    ${({ $variant }) =>
      $variant === "burger" &&
      css`
        left: -5.7rem;
        width: 12.2rem;
      `}

    ${({ $variant }) =>
      $variant === "fries1" &&
      css`
        top: -5.7rem;
        width: 13.6rem;
      `}

    ${({ $variant }) =>
      $variant === "fries2" &&
      css`
        right: -4.2rem;
        width: 10.7rem;
      `}

    ${({ $variant }) =>
      $variant === "chicken" &&
      css`
        bottom: -5.4rem;
        width: 13rem;
      `}
  }

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

export const LockArtwork = styled.img`
  width: min(100%, 35rem);
  height: auto;
  object-fit: contain;

  @media (max-width: 47.9375rem) {
    width: min(100%, 15rem);
  }
`;

export const FormCard = styled.form`
  width: min(100%, ${({ $maxWidth = "18rem" }) => $maxWidth});
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 1rem;
  color: ${authText};
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    color: ${authRed};
  }
`;

export const HeadingGroup = styled.div`
  margin-bottom: 1.25rem;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${authText};
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.15;
`;

export const Subtitle = styled.p`
  margin: 0.45rem 0 0;
  color: ${authMuted};
  font-size: 0.875rem;
  line-height: 1.5;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const FieldLabel = styled.label`
  color: ${authMuted};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const InputWrap = styled.label`
  position: relative;
  display: block;
  gap: 0.4rem;
`;

export const InputIcon = styled.span`
  position: absolute;
  inset: 50% auto auto 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #b3b3b3;
  font-size: 0.85rem;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const InputAction = styled.button`
  position: absolute;
  inset: 50% 0.75rem auto auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: #7e7e7e;
  font-size: 0.85rem;
  cursor: pointer;
  transform: translateY(-50%);
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding-top: 0.65rem;
  padding-right: ${({ $hasAction }) => ($hasAction ? "2.45rem" : "0.95rem")};
  padding-bottom: 0.65rem;
  padding-left: ${({ $hasIcon }) => ($hasIcon ? "2.35rem" : "0.95rem")};
  border: 0.0625rem solid ${authBorder};
  border-radius: ${({ $rounded = false }) => ($rounded ? "0.2rem" : "0.2rem")};
  background: #ffffff;
  color: ${authText};
  font-size: 0.8rem;
  font-weight: 400;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #a4a4a4;
  }

  &:focus {
    border-color: rgba(137, 27, 28, 0.45);
    box-shadow: 0 0 0 0.16rem rgba(137, 27, 28, 0.08);
  }
`;

export const HelperText = styled.p`
  margin: 0.2rem 0 0;
  color: ${authMuted};
  font-size: 0.75rem;
`;

export const ErrorText = styled.p`
  margin: 0.3rem 0 0;
  color: #d9394c;
  font-size: 0.75rem;
`;

export const SuccessText = styled.p`
  margin: 0.3rem 0 0;
  color: #218a4d;
  font-size: 0.75rem;
`;

export const PrimaryButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  height: 2.5rem;
  border: 0;
  border-radius: 0.2rem;
  background: ${authRed};
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${authRedHover};
  }

  &:active {
    transform: translateY(0.0625rem);
  }

  &:disabled {
    background: #b77172;
    cursor: not-allowed;
    transform: none;
  }
`;

export const TextButton = styled.button`
  margin-top: 0.7rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${authText};
  font-size: 0.875rem;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${authRed};
  }
`;

export const InlineText = styled.p`
  margin: 0.4rem 0 0;
  color: ${authMuted};
  font-size: 0.75rem;
`;

export const InlineLink = styled(Link)`
  color: ${authOrange};
  text-decoration: none;

  &:hover {
    color: ${authRed};
  }
`;
