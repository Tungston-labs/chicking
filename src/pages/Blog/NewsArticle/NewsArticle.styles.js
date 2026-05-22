import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
  padding: 40px 6rem;

  @media (max-width:1024px){
    padding:20px 3rem;
  }

  @media (max-width:768px){
    padding:40px 20px;
  }

  @media (max-width:570px){
    padding:30px 16px;
  }
`;

export const Container = styled.div`
 width: 50%;
  
 @media (max-width:1440px){
   width:100%;
  max-width:920px;
  margin:auto;
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1.4rem;
  color: #891b1c;
  font-family: "Josefin Sans", sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
`;

export const Title = styled.h1`
  font-family: "Josefin Sans", sans-serif;
font-weight: 500;
font-style: Medium;
font-size: 32px;
line-height: 34px;
letter-spacing: 0%;


  @media (max-width:1024px){
    font-size:30px;
  }

  @media (max-width:768px){
    font-size:26px;
    line-height:1.5;
  }

  @media (max-width:570px){
    font-size:22px;
    line-height:1.4;
  }
`;

export const MetaRow = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  margin-bottom:40px;

  p{
    color:#777;
    margin-bottom:15px;
  }

  @media(max-width:768px){
    flex-direction:column;
    align-items:flex-start;
    gap:20px;
  }
`;

export const AuthorWrap = styled.div`
display:flex;
align-items:center;
gap:12px;
`;

export const Avatar = styled.img`
width:55px;
height:55px;
border-radius:50%;
object-fit:cover;

@media(max-width:570px){
 width:45px;
 height:45px;
}
`;

export const AuthorInfo = styled.div``;

export const Name = styled.h4`
margin:0;
font-family: "Josefin Sans", sans-serif;
font-weight: 400;
font-style: Regular;
font-size: 18px;
line-height: 24px;
letter-spacing: 0%;


@media(max-width:570px){
font-size:18px;
}
`;

export const Role = styled.p`
margin:0;
color:#757575;
font-family: "Josefin Sans", sans-serif;
font-weight: 400;
font-style: Regular;
font-size: 16px;
line-height: 24px;
letter-spacing: 0%;

`;

export const Date = styled.div`
color:#757575;
font-weight: 400;
font-style: Regular;
font-size: 14px;
line-height: 24px;
letter-spacing: 0%;
font-family: "Josefin Sans", sans-serif;

@media(max-width:570px){
font-size:14px;
}
`;

export const BannerWrap = styled.div`
position:relative;
margin-bottom:40px;
`;

export const BannerImage = styled.img`
width:100%;
aspect-ratio:16 / 9;
object-fit:contain;
display:block;
background:#f7f2eb;
`;

export const PlayButton = styled.img`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:90px;

@media(max-width:768px){
width:70px;
}

@media(max-width:570px){
width:50px;
}
`;

export const QuoteBox = styled.div`
border-left:4px solid #ddd;
padding-left:10px;
word-break:break-word;
font-weight: 300;
font-style: Light;
font-size: 15px;
line-height: 24px;
letter-spacing: 0%;
font-family: "Josefin Sans", sans-serif;

@media(max-width:570px){
font-size:14px;
padding-left:15px;
}
`;

export const Content = styled.div`
font-family: "Josefin Sans", sans-serif;
font-weight: 300;
font-style: Light;
font-size: 15px;
line-height: 24px;
letter-spacing: 0%;

  p {
    margin: 0 0 1rem;
  }

  p:last-child {
    margin-bottom: 0;
  }

  ul,
  ol {
    margin: 0 0 1rem 1.25rem;
    padding: 0;
  }

  img,
  video {
    width: 100%;
    max-height: 34rem;
    display: block;
    object-fit: contain;
    background: #f7f2eb;
    margin: 1rem 0;
  }

  a {
    color: #891b1c;
  }

@media(max-width:768px){
font-size:16px;
line-height:1.8;
}

@media(max-width:570px){
font-size:14px;
}
`;
