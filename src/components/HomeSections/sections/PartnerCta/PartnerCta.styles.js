import styled from "styled-components";

export const CtaPanel = styled.div`
  width: min(100%, 62rem);
  margin: 0 auto;
  text-align: center;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 2.85rem;
  margin-top: 1.4rem;
  padding: 0 1.3rem;
  border-radius: 0.25rem;
  background: #b01f24;
  color: #ffffff;
  font-size: 0.96rem;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    background: #8f181c;
  }
`;
