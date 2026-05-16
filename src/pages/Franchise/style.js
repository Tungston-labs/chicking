
import styled, { keyframes } from "styled-components";

const jumpAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  40% {
    opacity: 1;
    transform: translateY(-10px);
  }

  70% {
    transform: translateY(4px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
  background: #891B1C;
  overflow: hidden;
    /* position: relative; */
`;

export const HeroSection = styled.div`
  max-width: 1740px;
  margin: auto;
  padding: 70px 40px 80px;
  position: relative;

  @media (max-width: 590px) {
    padding: 40px 16px 60px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  min-height: 360px;

  @media (max-width: 1023px) {
  min-height: 260px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
      min-height: 100px;
    align-items: center;
  }

`;

export const SmallTitle = styled.p`
  font-size: 1rem;
  color: #ffffff;
font-weight: 400;

@media (max-width: 1023px) {
    font-size: 1.3rem;
  }
  @media (max-width:992px) {
       font-size: 1.2rem;
    text-align: left;
  }
  @media (max-width: 570px) {
    font-size: 1.2rem;
    text-align: left;
      margin-bottom: 10px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 45px;
  font-weight: 700;
  color: #ffffff;
  margin-top: -15px;
  margin-bottom: 4px;
  min-height: 60px;
  line-height: 1.1;
  letter-spacing: 2%;

  animation: ${jumpAnimation} 0.8s ease;

   @media (max-width: 1023px) {
    font-size: 2.5rem;
    /* min-height: 60px; */
  }
    @media (max-width: 990px) {
    font-size: 30px;
    min-height: 0px;
  }
  @media (max-width: 767px) {
    font-size: 2rem;
    min-height: 0px;
       text-align: left;
  }

   @media (max-width: 570px) {
    font-size: 2rem;
    text-align: left;
    margin-bottom: 10px;
    margin-top: 15px;
  }
`;

export const Description = styled.div`
  max-width: 700px;
  color: #f5f5f5;
  font-size: 1rem;
  line-height: 1.7;
font-weight: 300;
font-style: Light;
letter-spacing: 5%;
text-transform: capitalize;

 @media (max-width: 1023px) {
    font-size: 1rem;
    min-height: 60px;
  }
  @media (max-width: 992px) {
    font-size: 1rem;
    min-height: 60px;
       text-align: left;
  }
   @media (max-width: 570px) {
    font-size: 1rem;
    text-align: left;
    min-height: 60px;
  }
`;

export const HeroImage = styled.img`
  width: 500px;
  object-fit: contain;
  margin-top: -25px;

  @media (max-width: 1023px) {
    width: 320px;
  }
  @media (max-width: 767px) {
   display: none;
  }
`;

export const FormCard = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 28px;
  padding: 4px 70px 58px;
  margin-top: -70px;
  position: relative;
  z-index: 10;


  @media (max-width: 992px) {
    padding: 36px 32px 50px;
   margin-top: -50px;
  }

  @media (max-width: 767px) {
    padding: 28px 20px 40px;
    border-radius:30px;
     margin-top: 10px;
  }

  @media (max-width: 570px) {
    padding: 30px 16px 20px 10px;
    border-radius: 30px;
     margin-top: 10px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 12px;
font-weight: 400;
font-style: Regular;
line-height: 110.00000000000001%;
letter-spacing: 0%;
text-transform: capitalize;


  span {
    font-weight: 700;
  }

  @media (max-width: 767px) {
    font-size: 28px;
  }

  @media (max-width: 570px) {
    font-size: 1.5rem;
  }
`;

export const FormDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  max-width: 700px;
font-weight: 300;
font-style: Light;
line-height: 170%;
letter-spacing: 5%;
text-transform: capitalize;

  @media (max-width: 570px) {
    font-size: 1rem;
    letter-spacing: 5%;
   line-height: 1.5;
  }
`;

export const SectionTitle = styled.h4`
  font-size: 16px;
  color: #333333;
  margin-bottom: 12px;
  font-weight: 600;
font-style: SemiBold;
line-height: 22px;
letter-spacing: -0.25%;

`;

export const LeftSection = styled.div`
  width: 90%;

  @media (max-width: 1024px) {
    width: 100%;
        padding: 0px 16px 50px 10px;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px 36px;
 

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: #333333;
font-weight: 400;
font-style: Regular;
font-size: 14px;
line-height: 100%;
letter-spacing: 0%;
vertical-align: middle;

`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  padding: 0 14px;
  font-size: 14px;
  background: #ffffff;
  border: 1px solid #B1B1B14D;
  &:focus {
    outline: none;
    border-color: #9d1419;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  padding: 0 14px;
  font-size: 14px;
  background: #ffffff;

  &:focus {
    outline: none;
    border-color: #9d1419;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  /* flex-wrap: wrap; */

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const RadioCard = styled.div`
  width: 328px;
  height: 128px;
  border-radius: 14px;
  border: 1px solid
    ${(props) => (props.active ? "#E31E24" : "#E5E5E5")};
  background: #ffffff;
  padding: 20px 22px;
  cursor: pointer;
  transition: 0.3s ease;

  display: flex;
  align-items: flex-start;
  gap: 14px;

  input {
    margin-top: 2px;
    accent-color: #E31E24;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  &:hover {
    border-color: #E31E24;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const RadioContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const RadioTitle = styled.h5`
  font-size: 15px;
  font-weight: 500;
  color: #1f1f1f;
  margin: 0;
  line-height: 22px;
`;

export const RadioText = styled.p`
  font-size: 14px;
  color: #444444;
  margin: 0;
  line-height: 20px;
`;
export const UploadBox = styled.div`
  width: 100%;
  min-height: 160px;
  border: 1px dashed #cfcfcf;
  border-radius: 12px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;

  p {
    color: #777;
    font-size: 14px;
    margin: 0;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  border-radius: 12px;
  border: 1px solid #d9d9d9;
  padding: 14px;
  resize: none;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #9d1419;
  }
`;

export const SubmitButton = styled.button`
  min-width: 240px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background: #9d1419;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 30px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 767px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const BottomShape = styled.div`
  width: 100%;
  height: 90px;
  background: #ffffff;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  margin-top: -30px;

  @media (max-width: 767px) {
    height: 60px;
  }
`;
export const TornBottom = styled.img`
  /* position: absolute; */
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  pointer-events: none;
  user-select: none;
  display: block;
`;

export const FormHeader = styled.div`
  width: 100%;


  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 14px;
  }
`;

export const HeaderLeft = styled.div`
  flex: 1;
`;

export const HeaderImage = styled.img`
  width: 350px;
  object-fit: contain;

  @media (max-width: 1024px) {
   display: none;
  }

  @media (max-width: 480px) {
    width: 130px;
  }
`;

export const ErrorText = styled.span`
  color: #e31e24;
  font-size: 12px;
  margin-top: 6px;
  font-weight: 500;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const FileName = styled.p`
  margin-top: 10px !important;
  color: #891b1c !important;
  font-size: 13px !important;
  font-weight: 500;
  word-break: break-word;
`;