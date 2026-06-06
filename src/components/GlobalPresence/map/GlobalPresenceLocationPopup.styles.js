import { NavLink as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const PopupCard = styled.div`
  min-width: 16rem;
  padding: 1rem 1rem 1.05rem;
  background: #ffffff;
`;

export const PopupTitle = styled.h4`
  margin: 0;
  color: #161616;
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 700;
`;

export const PopupDetail = styled.p`
  margin: 0.45rem 0 0;
  color: #242424;
  font-size: 1rem;
  line-height: 1.45;

  strong {
    font-weight: 600;
  }
`;

export const PopupStoreList = styled.div`
  display: grid;
  gap: 0.35rem;
  margin-top: 0.55rem;
`;

export const PopupInlineLink = styled(RouterLink)`
  color: #891b1c !important;
  font-size: 1rem;
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
  color: #891b1c !important;
  font-size: 1rem;
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

