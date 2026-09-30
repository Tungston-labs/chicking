import styled from "styled-components";

export const VideoSectionWrapper = styled.section`
  width: 100%;
  position: relative;
  background: #000000;
  overflow: hidden;
`;

export const FrameContainer = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.95;
  }
`;

export const VideoFrameImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 30rem;
  object-fit: cover;
  display: block;
`;
