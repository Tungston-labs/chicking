import React, { useState } from "react";
import {
  VideoSectionWrapper,
  FrameContainer,
  VideoFrameImage,
} from "./HeroVideoSection.styles";
import VideoModal from "../VideoModal/VideoModal";

const frameImg = "/images/about/videoframe1.svg";

const HeroVideoSection = ({ videoUrl }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <VideoSectionWrapper data-animate="fade-up">
        <FrameContainer onClick={() => setIsVideoOpen(true)}>
          <VideoFrameImage src={frameImg} alt="Chicking Showcase Video" />
        </FrameContainer>
      </VideoSectionWrapper>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={videoUrl}
      />
    </>
  );
};

export default HeroVideoSection;
