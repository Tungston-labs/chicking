import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

export const FrontierContent = styled.div`
  width: 100%;
`;

export const FrontierFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const FrontierFilterButton = styled.button`
  min-height: 2.35rem;
  padding: 0 0.25rem;
  border: 0;
  background: transparent;
  color: ${({ $active }) => ($active ? "#f39200" : "rgba(255, 255, 255, 0.82)")};
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 160ms ease;

  &:hover {
    color: #f39200;
  }
`;

export const FrontierGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.6rem;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FrontierCard = styled.article`
  min-height: 10.5rem;
  padding: 1.55rem 1.35rem 1.25rem;
  border-radius: 1rem;
  background: #ffffff;
  color: #151515;
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.12);
`;

export const FrontierIcon = styled.span`
  width: 2rem;
  height: 2rem;
  display: inline-grid;
  place-items: center;
  border-radius: 999rem;
  background: rgba(137, 27, 28, 0.08);
  color: #891b1c;
`;

export const FrontierMarket = styled.h3`
  margin: 1rem 0 0;
  color: #111111;
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 700;
`;

export const FrontierStatus = styled.p`
  margin: 0.35rem 0 0;
  color: #474747;
  font-size: 0.84rem;
  line-height: 1.55;
`;

export const FrontierNote = styled.p`
  margin: 0.2rem 0 0;
  color: #6a6a6a;
  font-size: 0.8rem;
  line-height: 1.5;
`;

export const FrontierAction = styled(RouterLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.95rem;
  color: #891b1c;
  font-size: 0.84rem;
  font-weight: 700;
  text-decoration: none;
  transition:
    color 160ms ease,
    transform 160ms ease;

  &:hover {
    color: #f39200;
    transform: translateX(0.125rem);
  }
`;
