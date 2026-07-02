import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 60px 6rem 90px;

  @media (max-width: 1200px) {
    padding: 40px 4rem 70px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px 70px;
  }

  @media (max-width: 570px) {
    padding: 25px 20px 80px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(90px, 240px)) minmax(420px, 1fr);
  align-items: end;
  justify-content: start;
  gap: clamp(16px, 1.4vw, 24px);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(180px, 254px));
    justify-content: center;
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 254px));
    align-items: stretch;
  }

  @media (max-width: 570px) {
    grid-template-columns: 1fr;
  }
`;

export const SideCard = styled.div`
  width: 100%;
  max-width: 254px;
  background: white;
  overflow: hidden;
  margin: 0;
  box-shadow: 0px 4px 20px rgba(0,0,0,.08);
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 1200px) {
    order: 2;
  }

  @media(max-width:768px){
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const CardTop = styled.div`
  background: #B4172B;
  color: white;
  padding: 32px 14px 24px;
  text-align: center;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media(max-width:570px){
    padding:20px 15px;
  }
`;

export const Country = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
  font-weight:600;
  line-height: 1.35;
  text-align: center;

  @media(max-width:480px){
    font-size:16px;
    line-height:22px;
  }
`;

export const Package = styled.p`
  margin: 0;
  font-size:12px;
  font-weight:600;
  line-height:20px;
`;

export const Button = styled.button`
  background:#F39200;
  border:none;
  padding:12px 24px;
  color:white;
  border-radius:6px;
  cursor:pointer;
  margin-top:auto;
  font-size:14px;
  font-weight:500;
  transition:
    background 0.25s ease,
    transform 0.25s ease;

  &:hover {
    background: #d26900;
    transform: translateY(-1px);
  }

  @media(max-width:480px){
    padding:10px 20px;
    font-size:13px;
  }
`;

export const CardImage = styled.img`
  width:100%;
  aspect-ratio: 2.4/ 3;
  object-fit: cover;
  display:block;

  @media(max-width:1200px){
    aspect-ratio: 4 / 3;
  }

  @media(max-width:480px){
    aspect-ratio: 4 / 3;
  }
`;

export const CenterContent = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:12px;
  min-width: 0;

  @media(max-width:1440px){
    gap:0px
  }

  @media(max-width:1200px){
    grid-column:1/-1;
    order:1;
    margin-bottom:10px;
  }

  @media(max-width:570px){
    grid-column:auto;
    order:1;
    width:100%;
    margin-bottom:30px;
    gap:15px;
  }
`;

export const ContentBox = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  width:100%;
`;

export const BreadTop = styled.img`
  width:340px;
  max-width:100%;
  display:block;

      @media(max-width:1440px){
    width:220px;
  }
    @media(max-width:1200px){
    width:220px;
  }
  @media(max-width:768px){
    width:220px;
  }

  @media(max-width:570px){
    width:150px;
  }
`;

export const BreadBottom = styled.img`
  width:340px;
  max-width:100%;
  display:block;

      @media(max-width:1440px){
    width:220px;
  }
    @media(max-width:1200px){
    width:220px;
  }
  @media(max-width:768px){
    width:220px;
  }

  @media(max-width:570px){
    width:150px;
    margin-top: 10px;
  }
`;

export const Curly = styled.img`
  opacity:.5;

  @media(min-width:1441px){
    width:70px;
  }

  @media(max-width:1200px){
    width:50px;
  }
  @media(max-width:768px){
    display:none;
  }
`;

export const Heading = styled.h2`
  margin-bottom:15px;
  font-size:32px;
  line-height:48px;
  font-weight:400;
  letter-spacing: 0;

  span{
    font-weight:700;
  }
   @media(max-width:1440px){
    font-size:1.8rem;
    
  }
  @media(max-width:992px){
    font-size:28px;
    line-height:40px;
  }

  @media(max-width:768px){
    font-size:24px;
    line-height:34px;
  }

  @media(max-width:570px){
    font-size:1.5rem;
    line-height:30px;
  }
`;

export const Description = styled.p`
  max-width:540px;
  margin:auto;

  font-size:16px;
  line-height:30px;
  font-weight:400;
  color:#444;

   @media(max-width:1440px){
    font-size:0.9rem;
    line-height:25px;
      max-width:400px;
  }

  @media(max-width:768px){
    font-size:14px;
    line-height:26px;
  }

  @media(max-width:570px){
    font-size:0.9rem;
    line-height:24px;
      max-width:300px;
  }
`;
