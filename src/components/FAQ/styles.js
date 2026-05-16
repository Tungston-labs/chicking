import styled from "styled-components";

export const Wrapper = styled.div`
  padding:80px 20px;
  max-width:1000px;
  margin:auto;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
font-weight: 400;
font-style: Bold;
font-size: 32px;
letter-spacing: 2%;
text-align: center;
text-transform: capitalize;
  font-weight: 400; 
  line-height: 140%;

  strong {
    font-weight: 700; 
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  text-align:center;
  max-width:950px;
  margin:auto auto 40px;
  font-family: Poppins;
font-weight: 300;
font-style: Light;
font-size: 14px;
line-height: 175%;
letter-spacing: 5%;
text-transform: capitalize;

`;

export const Accordion = styled.div`
  display:flex;
  flex-direction:column;
  gap:15px;
`;

export const Item = styled.div`
  border-radius:6px;
  overflow:hidden;
`;

export const Question = styled.div`
  background:${({ active }) =>
        active ? "#991b1b" : "#FBF7E8"};

  color:${({ active }) =>
        active ? "#fff" : "#000"};

  padding:20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  cursor:pointer;
font-weight: 500;
font-style: Medium;
font-size: 1rem;
line-height: 28px;
letter-spacing: 0px;
vertical-align: middle;

`;

export const Answer = styled.div`
  background:#FBF7E8;
  padding:40px 70px;
/* font-weight: 500; */
font-style: Medium;
font-size: 1rem;
line-height: 28px;
letter-spacing: 0px;
vertical-align: middle;

`;