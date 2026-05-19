import styled from "styled-components";

export const Wrapper = styled.section`
background:#891B1C;
padding:60px;
overflow:hidden;

@media(max-width:768px){
padding:60px 20px;
}
`;

export const Container=styled.div`
max-width:1500px;
margin:auto;
`;

export const Heading=styled.div`
text-align:center;
color:white;
font-weight: 400;
font-style: Regular;
font-size: 32px;
line-height: 48px;
letter-spacing: 1%;
text-align: center;
text-transform: capitalize;


@media(max-width:768px){
font-size:30px;
}
  
  @media(max-width:570px){
text-align:left;
font-size:24px ;
}
`;

export const Description=styled.p`
text-align:center;
color: white;
max-width:650px;
margin:auto;
line-height:1.8;
margin-bottom:50px;
font-weight: 300;
font-style: Light;
font-size: 16px;
line-height: 30px;
letter-spacing: 5%;
text-align: center;

  @media(max-width:570px){
text-align:left;
font-size:0.9rem ;
}
`;

export const MainSection=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
gap:60px;


  @media(max-width:767px){
    gap: 20px;
    flex-direction:column;
}
`;

export const SideWrapper=styled.div`
display:flex;
flex-direction:column;
gap:20px;
width:440px;
padding:25px;
border:1px solid rgba(255, 255, 255, 0.25);
/* border-radius:20px; */
background:linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%);
backdrop-filter:blur(8px);
box-shadow:0 8px 32px 0 rgba(0, 0, 0, 0.05);

@media(max-width:992px){
width:100%;
}

  @media(max-width:767px){
border-radius: 10px;
}
`;

export const TeamCard=styled.div`
padding: 20px 30px ;
border:1px solid rgba(255, 255, 255, 0.4);
border-radius:10px;
background:#891B1C;
color:white;
`;

export const CardTitle=styled.div`
font-weight: 400;
margin-bottom: 20px;
font-style: Regular;
font-size: 20px;
line-height: 24px;
letter-spacing: 0%;
text-transform: capitalize;


  @media(max-width:767px){
font-size:1.2rem ;
margin-bottom: 10px;
}
`;

export const CardName=styled.div`
margin-bottom:8px;
font-family: Poppins;
font-weight: 600;
font-style: SemiBold;
font-size: 16px;
line-height: 24px;
letter-spacing: 0%;

  @media(max-width:570px){
font-size:1rem ;
margin-bottom: 1px;
}

`;

export const CardRole=styled.div`
opacity:.85;
font-weight: 300;
font-style: Light;
font-size: 14px;
line-height: 24px;
letter-spacing: 0%;

  @media(max-width:570px){
font-size:1rem ;
}

`;

export const CenterLogo=styled.div`
display:flex;
align-items:center;
justify-content:center;

  @media(max-width:1024px){
display: none;
}
`;

export const LogoCircle=styled.div`
width:230px;
height:230px;
border-radius:50%;
background:transparent;
box-shadow: -40px -40px 50px 10px rgba(255, 255, 255, 0.7), 40px 30px 50px 20px rgba(255, 255, 255, 0.5), 0 0 40px 10px rgba(255, 255, 255, 0.5);

display:flex;
align-items:center;
justify-content:center;
position:relative;

img{
  width:230px;
  height:230px;
  border-radius:50%;
  position:relative;
  z-index:2;
}

@media(max-width:768px){
  width:160px;
  height:160px;
  box-shadow: -20px -20px 50px 10px rgba(255, 255, 255, 0.7), 20px 20px 60px 15px rgba(255, 255, 255, 0.5), 0 0 20px 10px rgba(255, 255, 255, 0.5);

  img{
    width:160px;
    height:160px;
  }
}
`;