
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 60px 6rem;
  overflow: hidden;

    @media (max-width: 1024px) {
     padding:20px  20px;
  }
  
    @media (max-width: 570px) {
     padding: 20px;
  }
`;

export const Container = styled.div`
  max-width: 1080px;
  margin: auto;
  position: relative;
`;

export const CurveShape = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  width: 70%;
  height: 500px;
  border: 1px dashed #e7cfc9;
  border-left: none;
  border-radius: 0 400px 400px 0;
  z-index: 0;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    "text1 founder main main main"
    "ceo exec main main main"
    "text2 opsDir dir opsMgr globalOps";

  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  align-items: center;
  position: relative;
  z-index: 2;

  /* Tablet Layout */
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-areas:
      "main main main main main main"
      "text1 text1 founder founder . ."
      ". ceo ceo exec exec ."
      "dir dir opsMgr opsMgr globalOps globalOps"
      ". . opsDir opsDir text2 text2";

    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    justify-items: center;
  }

  /* Mobile */
  @media (max-width: 767px) {
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:15px;
  }
`;

export const MemberCard = styled.div`
  grid-area:${({ gridArea }) => gridArea || "auto"};
  text-align:center;
  width:100%;
  max-width:${({ isSmall }) =>
    isSmall ? "170px" : "200px"};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 12px;
  z-index: 10;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top left, rgba(141, 47, 35, 0.9) 0%, rgba(141, 47, 35, 0.5) 40%, rgba(141, 47, 35, 0) 70%);
    background-size: 300% 300%;
    background-position: 0% 0%;
    opacity: 0;
    transition: background-position 0.6s ease-out, opacity 0.6s ease-out;
    z-index: -1;
  }

  ${ImageContainer}:hover &::before {
    opacity: 1;
    background-position: 100% 100%;
  }
`;

export const ArrowButton = styled.div`
  width: 32px;
  height: 32px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8d2f23;
  font-size: 18px;
  opacity: 0;
  transform: translate(15px, 15px);
  transition: all 0.6s ease-out;

  ${ImageContainer}:hover & {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export const MemberImage = styled.img`
  width:100%;
  height:${({ isSmall }) =>
    isSmall ? "180px" : "200px"};
  object-fit:cover;

  
`;

export const MemberRole = styled.div`
  font-size: ${({ isSmall }) => (isSmall ? "12px" : "13px")};
  color: #333;
  font-weight: 500;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: ${({ isSmall }) => (isSmall ? "11px" : "12px")};
  }

  @media (max-width: 570px) {
    font-size: ${({ isSmall }) => (isSmall ? "14px" : "15px")};
  }
`;
export const MemberName = styled.div`
  font-size: ${({ isSmall }) => (isSmall ? "16px" : "16px")};
  font-weight: 700;
  color: ${({ isRed }) => (isRed ? "#8d2f23" : "#111")};
  line-height: 1.3;
  text-transform: uppercase;
  margin-bottom: 2px;

  @media (max-width: 768px) {
    font-size: ${({ isSmall }) => (isSmall ? "13px" : "15px")};
  }

  @media (max-width: 570px) {
    font-size: ${({ isSmall }) => (isSmall ? "14px" : "20px")};
  }
`;

export const MainContentArea = styled.div`
  grid-area: main;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;

  @media (max-width: 1200px) {
    padding-left: 0;
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const Tag = styled.h5`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
font-weight: 600;
font-style: SemiBold;
line-height: 110.00000000000001%;
letter-spacing: 2%;

  @media (max-width: 1024px) {
  text-align: left;
  }

`;

export const Heading = styled.div`
font-weight: 400;
font-style: Regular;
font-size: 36px;
line-height: 140%;
letter-spacing: 0%;
text-transform: capitalize;


  span {
    font-weight: 700;
  }


  @media (max-width: 1024px) {
    font-size: 24px;
    text-align: left;
  }
`;

export const Description = styled.p` 
  max-width: 80%;
font-weight: 300;
font-style: Light;
font-size: 14px;
line-height: 180%;
letter-spacing: 6%;
text-transform: capitalize;


  @media (max-width: 1200px) {
    text-align: left;
  font-size: 1rem;
  }
    @media (max-width: 570px) {
  text-align: left;
  font-size: 0.9rem;
  }
`;

const BaseText = styled.p`
  font-size: 15px;
  line-height: 1.6;
  /* color: #666; */
  max-width: 220px;
  margin: 0 auto;

  @media (max-width: 767px) {
    max-width: 100%;
    margin-bottom: 30px;
    text-align: center;
  }
`;

export const LeftText1 = styled(BaseText)`
  grid-area: text1;
  text-align: right;
font-weight: 300;
font-style: Light;
font-size: 14px;
line-height: 170%;
letter-spacing: 5%;
text-transform: capitalize;

  
  @media (max-width: 767px) {
    text-align: center;
    padding-right: 0;
  }
  @media (max-width: 570px) {
   display: none;
  }
`;

export const LeftText2 = styled(BaseText)`
  grid-area: text2;
font-weight: 300;
font-style: Light;
font-size: 14px;
line-height: 170%;
letter-spacing: 5%;
text-align: right;
text-transform: capitalize;


  @media (max-width: 767px) {
    text-align: center;
    padding-right: 0;
  }
    @media (max-width: 570px) {
   display: none;
  }
`;