import styled from "styled-components";

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
height:auto;
display:block;
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

export const Content = styled.p`
font-family: "Josefin Sans", sans-serif;
font-weight: 300;
font-style: Light;
font-size: 15px;
line-height: 24px;
letter-spacing: 0%;

@media(max-width:768px){
font-size:16px;
line-height:1.8;
}

@media(max-width:570px){
font-size:14px;
}
`;