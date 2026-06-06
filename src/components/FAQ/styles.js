import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  padding:80px 6rem;
  /* max-width:1500px; */
  margin:auto;

    @media (max-width: 1024px) {
     padding: 20px;}

    @media (max-width: 570px) {
     padding: 20px;
    }
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
    font-size: 24px;
    text-align: left;
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

 @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: left;
  }
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

font-style: Medium;
font-size: 1rem;
line-height: 28px;
letter-spacing: 0px;
vertical-align: middle;




    @media (max-width: 1024px) {
     padding: 20px;
     font-size:1rem;
    }
 @media (max-width: 570px) {
     padding: 20px;
     font-size:0.9rem;
    }

`;

export const ViewMoreWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.2rem;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const ViewMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.8rem;
  padding: 0 1.4rem;
  border-radius: 0.25rem;
  background: #891b1c;
  color: #ffffff;
  font-size: 0.98rem;
  font-weight: 600;
  text-decoration: none;
  transition:
    filter 160ms ease,
    transform 160ms ease;

  &:visited {
    color: #ffffff;
  }

  &:hover,
  &:focus {
    filter: brightness(0.94);
    transform: translateY(-0.0625rem);
  }
`;
