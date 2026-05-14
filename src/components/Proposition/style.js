

import styled from "styled-components";

export const Wrapper = styled.section`
  width:100%;
  padding:40px 6rem;

  @media(max-width:768px){
    padding:50px 20px;
  }
`;

export const HeaderSection = styled.div`
  position: relative;
  margin-bottom: 40px;
  width: fit-content;

`;

export const TopBgImage = styled.img`
  position: absolute;
  top: -100px;
  left: 0;
  width: 260px;
  z-index: 0;
  pointer-events: none;
 
  filter: brightness(1.5);

  @media (max-width:768px){
    width:180px;
    top:-40px;
  }

  @media (max-width:480px){
    width:130px;
    top:-30px;
  }
`;

export const Heading = styled.div`
  position: relative;
  z-index: 2; 
font-weight: 400;
font-style: Regular;
font-size: 32px;
line-height: 48px;
letter-spacing: 1%;
text-transform: capitalize;
  span{
    font-weight:700;
  }

  @media(max-width:768px){
    font-size:34px;
  }

  @media(max-width:480px){
    font-size:28px;
  }
`;

export const SubHeading = styled.div`
  position:relative;
  z-index:2;
font-weight: 300;
font-style: Light;
font-size: 16px;
line-height: 30px;
letter-spacing: 5%;


  @media(max-width:480px){
      font-size:14px;
  }
`;

export const CardsWrapper = styled.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:60px;

  @media(max-width:992px){
      grid-template-columns:repeat(2,1fr);
  }

  @media(max-width:768px){
      grid-template-columns:1fr;
      gap:35px;
  }
`;

export const Card = styled.div`
  width:100%;
`;

export const IconBox = styled.div`
  width:65px;
  height:65px;
  border:1px solid #b02b2b;
  background:#fff;
  display:flex;
  justify-content:center;
  align-items:center;

box-shadow: 0px 4px 4px 0px #00000040;

  margin-bottom:25px;

  img{
      width:32px;
      height:32px;
  }
`;

export const CardTitle = styled.div`
  font-weight:400;
font-family: Poppins;
font-weight: 400;
font-style: Regular;
font-size: 20px;
line-height: 48px;
letter-spacing: 0%;
text-transform: capitalize;

  span{

font-weight: 700;
font-style: Bold;
font-size: 20px;
line-height: 48px;
letter-spacing: 0%;
text-transform: capitalize;

  }

  @media(max-width:480px){
      font-size:24px;
  }
`;

export const CardText = styled.div`
font-family: Poppins;
font-weight: 300;
font-style: Light;
font-size: 16px;
line-height: 32px;
letter-spacing: 0%;

`;