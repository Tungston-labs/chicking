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
  isSmall,
}) => {
  return (
    <MemberCard gridArea={gridArea} isSmall={isSmall}>
      <ImageContainer isSmall={isSmall}>
        <MemberImage src={image} alt={name} isSmall={isSmall}/>
        <Overlay>
          <ArrowButton>
            <FiArrowUpRight />
          </ArrowButton>
        </Overlay>
      </ImageContainer>

   <MemberRole isSmall={isSmall}>
  {role}
</MemberRole>

<MemberName
  isRed={isRed}
  isSmall={isSmall}
>
  {name}
</MemberName>
    </MemberCard>
  );
};

export default LeadershipCard;