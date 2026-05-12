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
  overflow: hidden;

  img {
    position: absolute;
    object-fit: contain;
  }

  /* Curve image */
  .img-curve {
    left: -10%;
    bottom: 20;
    width: 85%;
    max-height: 32rem;
    z-index: 1;
  }

  /* Ball image */
  .img-ball {
    left: 28%;
    bottom: -10%;
    width: 75%;
    max-height: 26rem;
    z-index: 2;
  }

  @media (max-width: 900px) {
    min-height: 20rem;

    .img-curve {
      width: 90%;
      left: -5%;
    }

    .img-ball {
      width: 60%;
      left: 22%;
    }
  }
`;

export const FaqListWrap = styled.div`
  display: grid;
  gap: 0.65rem;
`;
