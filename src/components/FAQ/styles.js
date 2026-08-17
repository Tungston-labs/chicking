import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4.5rem 6rem 5rem;
  margin: auto;
  background: #ffffff;
  color: #111111;
  text-align: ${({ $isArabic }) => ($isArabic ? "right" : "left")};

    @media (max-width: 1024px) {
     padding: 2.25rem 1.25rem 3rem;}

    @media (max-width: 570px) {
     padding: 2rem 1rem 2.5rem;
    }
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  margin: 0 0 0.7rem;
  font-weight: 400;
  font-size: 1.55rem;
  letter-spacing: 0;
  text-transform: none;
  line-height: 1.4;

  strong {
    font-weight: 700; 
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Description = styled.p`
  max-width: 63rem;
  margin: 0;
  font-family: Poppins;
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 1.75;
  letter-spacing: 0;
  text-transform: capitalize;
  color: #2f2f2f;

 @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const LanguageToggle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-self: end;
  border: 1px solid #f3a33a;
  border-radius: 0.2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    justify-self: start;
  }
`;

export const LanguageButton = styled.button`
  min-width: 4.25rem;
  min-height: 2rem;
  border: 0;
  background: ${({ $active }) => ($active ? "#f79a16" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#111111")};
  cursor: pointer;
  font-size: 0.72rem;
  font-weight: 500;
  text-transform: uppercase;

  &:not(:last-child) {
    border-right: 1px solid #f3a33a;
  }
`;

export const Accordion = styled.div`
  display:flex;
  flex-direction:column;
  gap:0.75rem;
`;

export const Item = styled.div`
  border-radius:0;
  overflow:hidden;
`;

export const Question = styled.button`
  width: 100%;
  border: 0;
  background:${({ active }) =>
        active ? "#991b1b" : "#FBF7E8"};

  color:${({ active }) =>
        active ? "#fff" : "#000"};

  min-height: 2.9rem;
  padding: 0.72rem 1.25rem;
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;
  cursor:pointer;
  font-weight: 600;
  font-size: 0.82rem;
  line-height: 1.4;
  letter-spacing: 0;
  text-align: ${({ $isArabic }) => ($isArabic ? "right" : "left")};

  span {
    flex: 1;
  }
`;

export const Answer = styled.div`
  background:#FBF7E8;
  color:#000000;
  padding:1.35rem 1.25rem;
  font-size: 0.92rem;
  line-height: 1.7;
  letter-spacing: 0;
  text-align: ${({ $isArabic }) => ($isArabic ? "right" : "left")};


    @media (max-width: 1024px) {
     padding: 20px;
     font-size:1rem;
    }
 @media (max-width: 570px) {
     padding: 20px;
     font-size:0.9rem;
    }

`;

export const Pager = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  margin-top: 2rem;
`;

export const PagerButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border: 0;
  background: transparent;
  color: ${({ disabled }) => (disabled ? "#c8c8c8" : "#111111")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 1rem;
  font-weight: 600;
`;

export const PageNumber = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.55rem;
  height: 1.55rem;
  border: 0;
  border-radius: 0.18rem;
  background: ${({ $active }) => ($active ? "#f79a16" : "transparent")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#111111")};
  cursor: pointer;
  font-size: 0.78rem;
  font-weight: 600;
`;
