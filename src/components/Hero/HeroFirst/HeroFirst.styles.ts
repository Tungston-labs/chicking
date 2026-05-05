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
  padding: 8rem 2rem;
  height: 200px;
  flex-direction: column;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  color: #000;
  margin-top: 2rem;
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
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  background: #891B1C;
  cursor: pointer;

  display: inline-flex;       
  align-items: center;        
  justify-content: center;
  gap: 0.5rem;                 

  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;

  transition: background 160ms ease, transform 160ms ease;

  svg {
    transition: transform 0.2s ease;
  }

`;