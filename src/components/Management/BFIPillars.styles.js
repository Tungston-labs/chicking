import styled from "styled-components";

export const Wrapper=styled.section`
padding:80px 6rem;
background:#f4f4f4;

@media(max-width:768px){
padding:60px 20px;
}
`;

export const Container=styled.div`
max-width:1300px;
margin:auto;
`;

export const Heading=styled.h2`
font-size:42px;
font-weight:300;
margin-bottom:20px;

span{
font-weight:700;
}

strong{
font-weight:800;
}

@media(max-width:768px){
font-size:30px;
}
`;

export const Description=styled.p`
max-width:700px;
line-height:1.8;
font-size:14px;
margin-bottom:50px;
`;

export const ContentWrapper=styled.div`
display:flex;
gap:50px;
align-items:flex-start;

@media(max-width:992px){
flex-direction:column;
}
`;

export const ImageSection=styled.div`
width:35%;

@media(max-width:992px){
width:100%;
}
`;

export const StoreImage = styled.img`
width:100%;
height:420px;
object-fit:cover;
border-radius:4px;

opacity:${({ fade }) => (fade ? 1 : 0.7)};

transition:
opacity 0.8s ease,
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
`;

export const SupportItem=styled.div`
display:flex;
gap:20px;
`;

export const IconWrap = styled.div`
width:42px;
height:42px;
min-width:42px;

border:1px solid #af2424;
border-radius:50%;

display:flex;
align-items:center;
justify-content:center;

img{
   width:18px;
   height:18px;
   object-fit:contain;
}

@media(max-width:768px){
   width:38px;
   height:38px;

   img{
      width:16px;
      height:16px;
   }
}
`;

export const ItemContent=styled.div``;

export const ItemTitle=styled.h3`
font-size:18px;
margin-bottom:10px;
`;

export const ItemDescription=styled.p`
line-height:1.9;
font-size:14px;
color:#444;
`;