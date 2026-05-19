import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.4);
  display: flex;
  justify-content: flex-end;
  z-index: 999999;
  overflow: hidden;
`;


export const ModalContent = styled.div`
  width: 40%;
  max-width: 580px;
  min-width: 420px;
  height: 100vh;

  background:#891B1C;

  padding:60px 40px 40px;

  display:flex;
  flex-direction:column;

  position:relative;

  overflow-y:auto;
  overflow-x:hidden;

  animation:slideIn .7s ease;

  scrollbar-width:none;

  &::-webkit-scrollbar{
    width:0;
    display:none;
  }

  @media(max-width:768px){
    width:100%;
    min-width:100%;
  }
`;

export const CloseButton = styled.button`
  position:absolute;
  right:30px;
  top:25px;

  width:48px;
  height:48px;

  border-radius:50%;
  border:1px solid white;

  background:transparent;
  color:white;

  font-size:22px;
  cursor:pointer;
`;

export const ModalImage = styled.img`
  width:210px;
  height:180px;
  border-radius:12px;
  object-fit:cover;
  /* margin-top:50px; */
`;

export const ModalRole = styled.p`
  color:white;
  margin-top:8px;
  font-size:14px;
`;

export const ModalName = styled.h2`
  color:white;
  font-size:24px;
  margin: 0px 0 0px;
`;

export const ModalDescription = styled.div`
  color:white;
  word-break: break-word;
  overflow-wrap: break-word;
  p{
    font-size: 14px;
    font-weight: 300;
   line-height: 170%;
   letter-spacing: 5%;
    margin-bottom:22px;
    word-break:break-word;
text-transform: capitalize;
  }

`;
export const BottomSection = styled.div`
  margin-top:auto;
  padding-top:30px;
`;
export const BottomLink = styled.div`
  margin-top:20px;
  color:white;
  width:fit-content;
  padding-bottom:4px;
  cursor:pointer;
font-weight: 400;
font-style: Regular;
font-size: 16px;
line-height: 140%;
letter-spacing: 0%;
text-transform: capitalize;
text-decoration: underline;
text-decoration-style: solid;
text-decoration-thickness: 0%;
text-decoration-skip-ink: auto;

`;
export const SocialRow = styled.div`
  display:flex;
  gap:18px;
  margin-top:10px;
`;

export const IconWrap = styled.div`
  color:white;
  font-size:22px;
  cursor:pointer;
  transition:.3s;
  &:hover{
      transform:translateY(-4px);
  }
`;