import React, { useEffect } from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { PiInfinityBold } from "react-icons/pi";

import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  ModalImage,
  ModalRole,
  ModalName,
  ModalDescription,
  BottomLink,
  SocialRow,
  IconWrap,
  BottomSection
} from "./LeadershipModal.styles";

const LeadershipModal = ({ member, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>

        <CloseButton onClick={onClose}>
          ✕
        </CloseButton>

        <ModalImage
          src={member.image}
          alt={member.name}
        />

        <ModalRole>
          {member.role}
        </ModalRole>

        <ModalName>
          {member.name}
        </ModalName>

     <ModalDescription>
  {member.description?.map((text, index) => (
    <p key={index}>{text}</p>
  ))}
</ModalDescription>

<BottomSection>

  <BottomLink>
    CHICKING 2019 COMMERCIAL
  </BottomLink>

  <SocialRow>

    <IconWrap>
      <FaTwitter />
    </IconWrap>

    <IconWrap>
      <FaInstagram />
    </IconWrap>

    <IconWrap>
      <PiInfinityBold />
    </IconWrap>

  </SocialRow>

</BottomSection>

      </ModalContent>
    </ModalWrapper>
  );
};

export default LeadershipModal;