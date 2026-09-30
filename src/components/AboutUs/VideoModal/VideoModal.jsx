import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import {
  ModalBackdrop,
  ModalContent,
  CloseButton,
  VideoWrapper,
} from "./VideoModal.styles";

const DEFAULT_VIDEO_URL =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const VideoModal = ({ isOpen, onClose, videoUrl = DEFAULT_VIDEO_URL }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close Video Modal">
          <FaTimes />
        </CloseButton>
        <VideoWrapper>
          <video
            src={videoUrl}
            controls
            autoPlay
            playsInline
          />
        </VideoWrapper>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default VideoModal;
