import styled from "styled-components";

export const Footer = styled.footer`
  background: #080808;
  color: #ffffff;
`;

export const FooterTop = styled.div`
  width: min(100%, 85rem);
  margin: 0 auto;
  padding: 2.2rem 2rem 1.7rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 2rem 1.25rem 1.25rem;
  }
`;

export const FooterInfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.35rem;
  background: rgba(255, 255, 255, 0.035);

  svg {
    color: #f39200;
    font-size: 1.3rem;
    flex: 0 0 auto;
  }

  p {
    margin: 0.25rem 0 0;
    color: rgba(255, 255, 255, 0.62);
    font-size: 0.84rem;
    line-height: 1.5;
  }
`;

export const FooterBottom = styled.div`
  width: min(100%, 85rem);
  margin: 0 auto;
  padding: 1.7rem 2rem 2.2rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.84rem;

  img {
    width: 7rem;
    height: auto;
    filter: brightness(0) invert(1);
  }
`;
