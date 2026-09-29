import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 80px 0;
  border-bottom: 1px solid #f0f0f0;

  @media (max-width: 992px) {
    padding: 60px 0;
  }

  @media (max-width: 576px) {
    padding: 40px 0;
  }
`;

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  gap: 60px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    gap: 40px;
    padding: 0 24px;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 30px;
    padding: 0 16px;
  }
`;

export const LeftSidebar = styled.div`
  width: 260px;
  min-width: 260px;
  flex-shrink: 0;
  padding-top: 10px;

  @media (max-width: 850px) {
    width: 100%;
    min-width: 0;
    padding-top: 0;
  }
`;

export const SidebarTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #111111;
  line-height: 1.4;
`;

export const RightContent = styled.div`
  flex: 1;
  border-left: 1px solid #eeeeee;
  padding-left: 50px;

  @media (max-width: 1024px) {
    padding-left: 30px;
  }

  @media (max-width: 850px) {
    border-left: none;
    padding-left: 0;
  }
`;

export const QuoteSymbol = styled.div`
  font-family: "Georgia", "Times New Roman", serif;
  font-size: 54px;
  line-height: 1;
  font-weight: 700;
  color: #891b1c;
  margin-bottom: 16px;
`;

export const QuoteText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 13.5px;
  font-weight: 300;
  line-height: 1.8;
  color: #444444;
  margin-bottom: 20px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 13px;
    text-align: left;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e5e5e5;
  margin: 30px 0 20px;
`;

export const AuthorName = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #111111;
  letter-spacing: 0.03em;
  margin-bottom: 2px;
`;

export const AuthorTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 11.5px;
  font-weight: 500;
  color: #777777;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;
