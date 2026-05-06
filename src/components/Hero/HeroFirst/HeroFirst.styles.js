import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroFirstContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  flex-direction: column;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  color: #000;
  margin: 0;
  animation: ${slideUp} 0.5s ease;

  strong {
    font-weight: 700;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  max-width: 46rem;
  margin-top: 1rem;
  text-align: center;
  color: #000;
`;

export const HeroButton = styled.a`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  background: #891b1c;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;

  transition:
    background 160ms ease,
    transform 160ms ease;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 45rem;
  display: flex;
  justify-content: center;

  /* Positions */
  .left {
    left: -80px;
    top: 50%;
    transform: translateY(-50%);
  }

  .rightTop {
    right: -80px;
    top: -10%;
  }
  .star {
    right: -80px;
    top: 10%;
  }
  .rightCenter {
    right: -140px;
    top: 50%;
    transform: translateY(-50%);
  }

  .left::after {
    transform: translateX(-50%) rotate(-40deg);
  }

  &.state-0 {
    .left {
      transform: translate(-10px, -50%);
    }
    .rightTop {
      transform: translateY(0);
    }
    .rightCenter {
      transform: translate(0, -50%);
    }
    .star {
      transform: translate(0, -50%);
    }
  }

  &.state-1 {
    .left {
      transform: translate(100px, -100%);
    }
    .rightTop {
      transform: translateY(200px);
    }
    .rightCenter {
      transform: translate(-800px, -10%);
    }
    .star {
      transform: translate(150px, -10%);
    }
  }

  &.state-2 {
    .left {
      transform: translate(0, -50%);
    }
    .rightTop {
      transform: translateY(0);
    }
    .rightCenter {
      transform: translate(0, -50%);
    }
    .star {
      transform: translate(0, -50%);
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .left,
    .rightTop,
    .rightCenter {
      display: none;
    }
  }
`;

/* Main Image */
export const MainImage = styled.img`
  width: 55rem;
  max-height: 55rem;
  animation: ${slideUp} 0.6s ease;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FloatingItem = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.4rem;

  padding: 1.2rem;
  border-radius: 6px;
  font-size: 0.75rem;

  img {
    width: 5rem;
    height: 5rem;
  }

  img.dotted-item {
    width: 5rem;
    height: 5rem;

  }

  transition: all 0.6s ease;

  /* Base line */
`;


