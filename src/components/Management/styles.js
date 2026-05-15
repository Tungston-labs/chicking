import styled from "styled-components";

export const Wrapper = styled.section`
  background:black;
  position:relative;
  overflow:hidden;
  padding:60px;

  @media(max-width:768px){
    padding:80px 20px 50px;
  }
`;

export const BrushTop = styled.img`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:50px;
  object-fit:cover;
`;

export const Content = styled.div`
  margin:auto;
  color:white;
`;

export const Heading = styled.h2`
  text-align:center;
font-weight: 400;
font-style: Regular;
font-size: 32px;
line-height: 140%;
letter-spacing: 0%;
text-align: center;
text-transform: capitalize;


  @media(max-width:768px){
      font-size:28px;
  }
`;

export const Description = styled.p`
  text-align:center;
  max-width:760px;
  margin:auto auto 70px;
font-weight: 400;
font-style: Regular;
font-size: 14px;
line-height: 170%;
letter-spacing: 5%;
text-align: center;
text-transform: capitalize;


  @media(max-width:768px){
      margin-bottom:50px;
      font-size:13px;
  }
`;

export const CardContainer=styled.div`
 display:grid;
 grid-template-columns:repeat(3,1fr);
 justify-content: center;
 gap:80px;

 @media(max-width:992px){
   grid-template-columns:1fr;
   gap:40px;
 }
`;

export const Card=styled.div`
 text-align:left;

 @media(max-width:992px){
     text-align:center;
 }
`;

export const IconWrap=styled.div`
 margin-bottom:10px;

 svg{
   color:white;
   width: 48px;
   height: 48px;
 }

 @media(max-width:992px){
    display:flex;
    justify-content:center;
 }
`;

export const CardTitle=styled.div`
font-weight: 600;
font-style: SemiBold;
font-size: 16px;
line-height: 48px;
letter-spacing: 0%;
text-transform: capitalize;

`;

export const CardDescription=styled.div`
font-style: Regular;
font-size: 14px;
line-height: 32px;
letter-spacing: 1%;

`;