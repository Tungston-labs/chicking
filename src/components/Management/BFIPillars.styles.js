import styled from "styled-components";

export const Wrapper=styled.section`
padding:80px 6rem;

@media(max-width:1025px){
padding:20px 20px;
}
`;

export const Container=styled.div`
/* max-width:1300px; */
margin:auto;
`;

export const Heading=styled.h2`
margin-bottom:20px;
font-weight: 400;
font-style: Regular;
font-size: 36px;
line-height: 140%;
letter-spacing: 0%;
text-transform: capitalize;

span{
font-weight:700;
}

strong{
font-weight:800;
}

@media(max-width:768px){
font-size:30px;
}

@media(max-width:570px){
font-size:24px;
}
`;

export const Description=styled.p`
max-width:900px;
line-height:1.8;
margin-bottom:50px;
font-family: Poppins;
font-weight: 300;
font-style: Light;
font-size: 16px;
line-height: 170%;
letter-spacing: 5%;
text-transform: capitalize;


@media(max-width:1024px){
font-size:1rem;
margin-bottom:20px;
}
@media(max-width:570px){
font-size:0.9rem;
}
`;

export const ContentWrapper=styled.div`
display:flex;
gap:50px;
align-items:flex-start;

@media(max-width:1024px){
flex-direction:column;
gap:30px;
}
`;

export const ImageSection=styled.div`
width:35%;

@media(max-width:1024px){
width:50%;
}
@media(max-width:768px){
width:100%;
}
`;

export const StoreImage = styled.img`
width:100%;
height:420px;
object-fit:cover;
border-radius:4px;

opacity:${({ fade }) => (fade ? 1 : 0.9)};

transition:
opacity 0.9s ease,
transform 0.8s ease;

@media(max-width:768px){
height:300px;
}
`;

export const RightSection=styled.div`
flex:1;
display:flex;
flex-direction:column;
gap:35px;

@media(max-width:1024px){
gap:20px;
}
`;

export const SupportItem=styled.div`
display:flex;
gap:20px;
`;

export const IconWrap = styled.div`
width:61px;
height:61px;
min-width:61px;
border:1px solid #891B1C;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;

img{
   width:26px;
   height:26px;
   object-fit:contain;
}

@media(max-width:768px){
   width:61px;
   height:61px;

   img{
      width:26px;
      height:26px;
   }
}
@media(max-width:570px){
   width:61px;
   height:61px;

   img{
      width:26px;
      height:26px;
   }
}
`;

export const ItemContent=styled.div``;

export const ItemTitle=styled.div`
margin-bottom:10px;
font-family: Poppins;
font-weight: 500;
font-style: Medium;
font-size: 16px;
line-height: 140%;
letter-spacing: 0%;
text-transform: capitalize;

@media(max-width:570px){
font-size:1rem;
}

`;

export const ItemDescription=styled.p`
line-height:1.9;
font-size:14px;
font-family: Poppins;
font-weight: 300;
font-style: Light;
font-size: 14px;
leading-trim: NONE;
line-height: 155%;
letter-spacing: 1%;
text-transform: capitalize;

@media(max-width:570px){
font-size:0.9rem;
}
`;