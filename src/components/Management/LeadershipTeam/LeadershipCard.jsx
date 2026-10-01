import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {
  MemberCard,
  ImageContainer,
  Overlay,
  ArrowButton,
  MemberImage,
  MemberRole,
  MemberName,
} from "../../pages/Management/styles";

const LeadershipCard = ({
  image,
  role,
  name,
  gridArea,
  isRed,
  onClick
}) => {
  return (
    <MemberCard gridArea={gridArea} onClick={onClick}>
      <ImageContainer>
        <MemberImage src={image} alt={name} />
        <Overlay>
          <ArrowButton>
            <FiArrowUpRight />
          </ArrowButton>
        </Overlay>
      </ImageContainer>

      <MemberRole>
        {role}
      </MemberRole>

      <MemberName isRed={isRed}>
        {name}
      </MemberName>
    </MemberCard>
  );
};

export default LeadershipCard;