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

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ $active }) => ($active ? "#a11f24" : "#000000")};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  transition: color 160ms ease;

  &:hover {
    color: #891b1c;
  }
`;

export const FindLocationButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
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

  svg {
    font-size: 1rem;
    line-height: 1;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    padding: 0 0.875rem;
    font-size: 0.875rem;
  }

  @media (max-width: 1024px) {
    margin-left: auto;
    padding: 0 1.2rem;
    font-size: 0.92rem;
  }

  @media (max-width: 420px) {
    min-height: 2.35rem;
    padding: 0 0.85rem;
    font-size: 0.82rem;
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

  @media (max-width: 1024px) {
    display: inline-flex;
    margin-left: 0;
  }
`;

export const MobileMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  right: auto;
  width: 100vw;
  min-width: 100vw;
  max-height: calc(100vh - 4.5rem);
  overflow-y: auto;
  border: 0;
  border-radius: 0;
  background: #971b1d;
  box-shadow: 0 0.9rem 2rem rgba(37, 7, 11, 0.2);
  z-index: 999;

  display: flex;
  flex-direction: column;
  padding: 0.9rem 0 1.25rem;
  transform: translateX(-50%);

  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 768px) {
    max-height: calc(100vh - 4.2rem);
    padding: 1rem 0 1.25rem;
  }
`;

export const MobileMenuItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  color: ${({ $active }) => ($active ? "#f7c86f" : "#ffffff")};
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 160ms ease, color 160ms ease;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
  }

  ${(props) =>
    props.$isFindLocation &&
    `
    background: #F39200;
    color: #ffffff;
    margin: 0.5rem 0.5rem;
    border-radius: 0.25rem;
    justify-content: center;

    &:hover {
      background: #dd8200;
      color: #ffffff;
    }

    svg {
      font-size: 1rem;
    }
  `}

  @media (max-width: 1024px) {
    padding: 0.9rem 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.76rem;

    ${({ $isFindLocation }) =>
      $isFindLocation
        ? `
          min-height: 2.6rem;
          margin: 0.9rem 1.5rem 0;
          padding: 0 1rem;
          justify-content: center;
          color: #ffffff;
          font-size: 0.78rem;
          letter-spacing: 0;
          text-transform: none;

          &:hover {
            background: #dd8200;
          }
        `
        : ""}
  }
`;
