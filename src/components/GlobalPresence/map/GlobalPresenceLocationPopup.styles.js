import { NavLink as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const PopupCard = styled.div`
  position: relative;
  min-width: 11rem;
  max-width: 16rem;
  padding: 0.75rem 0.9rem;
  background: #ffffff;
  border-radius: 0.6rem;
  box-shadow: 0 0.6rem 2rem rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(0, 0, 0, 0.08);
  z-index: 100;
  pointer-events: auto;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.4rem;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 0.7rem;
    height: 0.7rem;
    background: #ffffff;
    border-right: 1px solid rgba(0, 0, 0, 0.08);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
`;

export const PopupHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const PopupCloseButton = styled.button`
  background: transparent;
  border: 0;
  color: #666666;
  cursor: pointer;
  padding: 0.1rem;
  display: grid;
  place-items: center;
  border-radius: 0.2rem;
  transition:
    color 140ms ease,
    background 140ms ease;

  &:hover {
    color: #891b1c;
    background: rgba(137, 27, 28, 0.08);
  }
`;

export const PopupTitle = styled.h4`
  margin: 0;
  color: #161616;
  font-size: 0.84rem;
  line-height: 1.35;
  font-weight: 600;
  flex: 1;
`;


export const PopupDetail = styled.p`
  margin: 0.3rem 0 0;
  color: #242424;
  font-size: 0.78rem;
  line-height: 1.35;

  strong {
    font-weight: 600;
  }
`;

export const PopupStoreList = styled.div`
  display: grid;
  gap: 0.25rem;
  margin-top: 0.35rem;
`;

export const PopupInlineLink = styled(RouterLink)`
  color: #891b1c !important;
  font-size: 0.78rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 160ms ease;

  &:visited {
    color: #891b1c !important;
  }

  &:hover,
  &:focus {
    color: #a61d18 !important;
  }
`;

export const PopupExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.4rem;
  color: #891b1c !important;
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 160ms ease;

  &:visited {
    color: #891b1c !important;
  }

  &:hover,
  &:focus {
    color: #a61d18 !important;
    text-decoration: underline;
  }
`;



