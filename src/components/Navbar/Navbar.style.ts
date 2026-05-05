import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background: #ffffff;
`;

export const NavInner = styled.nav`
  width: 100%;
  min-height: 4.875rem;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  gap: 1.25rem;

  position: relative;
  z-index: 1000;

  @media (max-width: 768px) {
    min-height: 4.5rem;
    padding: 0.75rem 1.25rem;
    gap: 1rem;
  }
`;

export const BrandLink = styled.a`
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;

  img {
    width: 7.75rem;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    img {
      width: 6.5rem;
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-evenly;
  min-width: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #000000;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  transition: color 160ms ease;

  &:hover {
    color: #a11f24;
  }
`;

export const FindLocationButton = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 2.5rem;
  padding: 0 1.375rem;
  border-radius: 0.25rem;
  background: #F39200;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  transition:
    background 160ms ease,
    transform 160ms ease;

  &:hover {
    background: #dd8200;
    transform: translateY(-0.0625rem);
  }

  span {
    font-size: 1rem;
    line-height: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  width: 2.5rem;
  height: 2.5rem;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.3125rem;
  border: 0;
  border-radius: 0.25rem;
  background: #f6f6f6;
  cursor: pointer;

  span {
    width: 1.125rem;
    height: 0.125rem;
    border-radius: 999rem;
    background: #111111;
  }

  @media (max-width: 768px) {
    display: inline-flex;
    margin-left: auto;
  }
`;
