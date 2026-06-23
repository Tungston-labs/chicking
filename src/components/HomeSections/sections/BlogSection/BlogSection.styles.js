import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(1rem, 4vw, 2rem);

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }

  /* Mobile */
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const BlogSkeletonCard = styled.div`
  min-height: 39.5rem;
  overflow: hidden;
  border: 1px solid #dddddd;
  background: #ffffff;

  @media (min-width: 600px) and (max-width: 1000px) {
    min-height: 34rem;
  }
`;

export const BlogSkeletonBlock = styled.div`
  position: relative;
  overflow: hidden;
  height: ${({ $height }) => $height || "1rem"};
  margin: ${({ $margin }) => $margin || "0"};
  width: ${({ $width }) => $width || "100%"};
  background: #eee7dd;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.72),
      transparent
    );
    animation: ${shimmer} 1.25s infinite;
  }
`;

export const BlogSkeletonBody = styled.div`
  padding: 1rem 1.2rem;
`;

export const BlogStatus = styled.p`
  grid-column: 1 / -1;
  min-height: 8rem;
  margin: 0;
  display: flex;
  align-items: center;
  color: #891b1c;
  font-size: 0.95rem;
  line-height: 1.6;
`;
