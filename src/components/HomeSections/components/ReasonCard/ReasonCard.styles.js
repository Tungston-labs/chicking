import styled from "styled-components";

export const Card = styled.article`
  min-height: 19rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.3rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 0.35rem;
  background: rgba(255, 255, 255, 0.045);
`;

export const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999rem;
  background: rgba(243, 146, 0, 0.18);
  color: #f8d36f;
  font-size: 1.25rem;
`;

export const Title = styled.h3`
  margin: 1rem 0 0;
  color: #ffffff;
  font-size: 1.08rem;
  line-height: 1.45;
`;

export const Text = styled.p`
  margin: 0.7rem 0 0;
  color: rgba(255, 255, 255, 0.74);
  font-size: 0.9rem;
  line-height: 1.7;
`;

export const Image = styled.img`
  width: 12.5rem;
  height: 10.5rem;
  object-fit: contain;
`;
