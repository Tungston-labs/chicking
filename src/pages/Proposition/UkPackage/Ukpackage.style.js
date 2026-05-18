import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const BrochureImage = styled.img`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: block;
  border-radius: 12px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;