import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 90px 6rem;

  @media (max-width:1200px){
    padding: 30px 4rem;
  }

  @media (max-width:992px){
    padding: 30px 3rem;
  }

  @media (max-width:768px){
    padding: 20px 30px;
  }

  @media (max-width:570px){
    padding: 40px 20px;
  }
`;

export const HeaderSection = styled.div`
  position: relative;
  margin-bottom: 50px;
  width: fit-content;

   @media (max-width:1200px){
  margin-bottom: 30px;
  }
   @media (max-width:570px){
  margin-bottom: 10px;
  }
`;

export const TopBgImage = styled.img`
  position: absolute;
  top: -120px;
  left: 0;

  width: 260px;
  max-width: 100%;

  z-index: 0;
  pointer-events: none;

  @media (max-width:992px){
   display: none;
  }

  @media (max-width:768px){
  display: none;
  }

  @media (max-width:480px){
 display: none;
  }
`;

export const Heading = styled.div`
  position: relative;
  z-index: 2;

  font-family: Poppins;
  font-weight: 400;
  font-size: 32px;
  line-height: 1.4;
  letter-spacing: 1%;
  text-transform: capitalize;

  span{
    font-weight:700;
  }

  @media(max-width:992px){
    font-size:28px;
  }

  @media(max-width:768px){
    font-size:24px;
  }

  @media(max-width:480px){
    font-size:20px;
    line-height:1.5;
  }
`;

export const SubHeading = styled.div`
  position: relative;
  z-index: 2;

  margin-top:10px;

  font-family: Poppins;
  font-weight: 300;
  font-size:16px;
  line-height:1.8;
  letter-spacing:1%;

  max-width:700px;

  @media(max-width:768px){
    font-size:15px;
  }

  @media(max-width:480px){
    font-size:14px;
    line-height:1.7;
  }
`;

export const CardsWrapper = styled.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:50px;

  @media(max-width:992px){
    grid-template-columns:repeat(3,1fr);
    gap:35px;
  }

  @media(max-width:570px){
    grid-template-columns:1fr;
    gap:20px;
  }
`;

export const Card = styled.div`
  width:100%;
`;

export const IconBox = styled.div`
  width:80px;
  height:80px;
  border:1px solid #891B1C;
  background:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
  box-shadow:0px 4px 4px rgba(0,0,0,.15);
  margin-bottom:20px;

  img{
    width:45px;
    height:45px;
    object-fit:contain;
  }

    @media(max-width:1200px){
    width:65px;
    height:65px;

    img{
      width:35px;
      height:35px;
    }
  }
  @media(max-width:480px){
    width:65px;
    height:65px;

    img{
      width:35px;
      height:35px;
    }
  }
`;

export const CardTitle = styled.div`
  font-family:Poppins;
  font-weight:400;
  font-size:20px;
  line-height:1.7;
  margin-bottom:4px;

  span{
    font-weight:700;
  }

  @media(max-width:768px){
    font-size:18px;
  }

  @media(max-width:480px){
    font-size:1.2rem;
    line-height:1.5;
  }
`;

export const CardText = styled.div`
  font-family:Poppins;
  font-weight:300;
  font-size:16px;
  line-height:1.9;

    @media(max-width:1200px){
    font-size:1rem;
  }

    @media(max-width:992px){
    font-size:0.85rem;
  }
  @media(max-width:768px){
    font-size:0.8rem;
  }

  @media(max-width:570px){
    font-size:1rem;
    line-height:1.7;
  }
`;