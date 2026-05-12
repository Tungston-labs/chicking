import styled from "styled-components";

export const FaqLayout = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FaqImagePanel = styled.div`
  position: relative;
  min-height: 24rem;
  border-radius: 0.5rem;
  background:
    radial-gradient(circle at 12% 24%, rgba(243, 146, 0, 0.22), transparent 9rem),
    #fff7ed;
  overflow: hidden;

  img {
    position: absolute;
    left: 7%;
    bottom: 0;
    width: 92%;
    max-height: 22rem;
    object-fit: contain;
  }
`;

export const FaqListWrap = styled.div`
  display: grid;
  gap: 0.65rem;
`;
