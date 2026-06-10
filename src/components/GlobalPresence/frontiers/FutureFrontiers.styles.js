import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

export const FrontierContent = styled.div`
  width: 100%;
`;

export const FrontierFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.35rem;
  margin-top: 0.55rem;
`;

export const FrontierFilterButton = styled.button`
  min-height: 2rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ $active }) => ($active ? "#ed1c24" : "rgba(255, 255, 255, 0.86)")};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 160ms ease;

  &:hover {
    color: #ed1c24;
  }
`;

export const FrontierGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 1.65rem;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FrontierCard = styled.article`
  min-height: 9.7rem;
  padding: 1.55rem 1.45rem 1.25rem;
  border-radius: 0.5rem;
  background: #ffffff;
  color: #151515;
  box-shadow: 0 1.1rem 2.2rem rgba(0, 0, 0, 0.13);
`;

export const FrontierIcon = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  display: inline-grid;
  place-items: center;
  color: #891b1c;

  svg {
    width: 1rem;
    height: 1rem;
    stroke-width: 1.8;
  }
`;

export const FrontierMarket = styled.h3`
  margin: 1.05rem 0 0;
  color: #111111;
  font-size: 0.9rem;
  line-height: 1.3;
  font-weight: 700;
`;

export const FrontierStatus = styled.p`
  margin: 0.28rem 0 0;
  color: #222222;
  font-size: 0.72rem;
  line-height: 1.45;
`;

export const FrontierAction = styled(RouterLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.42rem;
  margin-top: 0.35rem;
  color: #891b1c;
  font-size: 0.74rem;
  font-weight: 700;
  text-decoration: none;
  transition:
    color 160ms ease,
    transform 160ms ease;

  &:hover {
    color: #ed1c24;
    transform: translateX(0.125rem);
  }

  svg {
    width: 0.85rem;
    height: 0.85rem;
  }
`;
