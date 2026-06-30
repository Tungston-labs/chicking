import styled, { keyframes } from "styled-components";

const imageFloat = keyframes`
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(10deg) scale(1);
  }

  50% {
    transform: translate3d(0, -0.45rem, 0) rotate(-1deg) scale(1.025);
  }
`;

export const Card = styled.article`
  min-height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 0.35rem;
  background: rgba(255, 255, 255, 0.045);
  @media (max-width: 767px) {
    min-height: 20rem;
  }
`;

export const Title = styled.h3`
  margin: 1rem 0 0;
  color: #ffffff;
  font-size: 1.08rem;
  line-height: 1.45;
`;

export const Text = styled.p`
  margin: 0.7rem 0 0;
  color: rgba(255, 255, 255, 0.74);
  font-size: 0.875rem;
  line-height: 1.7;
`;

export const ImageStage = styled.div`
  width: 15rem;
  height: 10.5rem;
  flex-shrink: 0;
  display: inline-flex;
  margin-left:2rem;
  align-items: center;
  justify-content: center;
  transition:
    filter 220ms ease,
    transform 220ms ease;

  ${Card}:hover & {
    transform: translate3d(0, -0.35rem, 0) rotate(1deg) scale(1.03);
    filter: drop-shadow(0 1rem 1.25rem rgba(0, 0, 0, 0.22));
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    ${Card}:hover & {
      transform: none;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center  ;
  animation: ${imageFloat} 2.8s ease-in-out infinite;
  filter: drop-shadow(0 0.7rem 1rem rgba(0, 0, 0, 0.16));
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    will-change: auto;
  }
`;
