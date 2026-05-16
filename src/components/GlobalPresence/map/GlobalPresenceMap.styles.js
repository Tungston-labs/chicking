import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

export const PresenceShell = styled.div`
  width: min(100%, var(--section-max-width));
  margin: 0 auto;
`;

export const RegionTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 2rem 0 2rem;

  @media (max-width: 640px) {
    flex-wrap: nowrap;
    margin: 1.5rem 0 1.5rem;
    overflow-x: auto;
    padding-bottom: 0.2rem;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const RegionTab = styled.button`
  flex: 0 0 auto;
  min-height: 2.85rem;
  padding: 0 1.1rem;
  border: 1px solid ${({ $active }) => ($active ? "#891b1c" : "rgba(137, 27, 28, 0.38)")};
  background: ${({ $active }) => ($active ? "#891b1c" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#2b2b2b")};
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 160ms ease,
    color 160ms ease,
    border-color 160ms ease,
    transform 160ms ease;

  &:hover {
    transform: translateY(-0.0625rem);
    border-color: #891b1c;
  }
`;

export const PresencePanel = styled.div`
  display: grid;
  grid-template-columns: minmax(16rem, 20rem) minmax(0, 1fr);
  border: 1px solid rgba(17, 17, 17, 0.08);
  background: #ffffff;
  overflow: hidden;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const LocationSidebar = styled.aside`
  padding: 2rem 1.5rem 2.2rem;
  background: linear-gradient(180deg, #ffffff 0%, #faf9f6 100%);
  border-right: 1px solid rgba(17, 17, 17, 0.08);

  @media (max-width: 980px) {
    border-right: 0;
    border-bottom: 1px solid rgba(17, 17, 17, 0.08);
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.1rem;
  }
`;

export const LocationSidebarHeading = styled.h3`
  margin: 0;
  color: #171717;
  font-size: clamp(1.35rem, 2vw, 1.7rem);
  line-height: 1.2;
  font-weight: 500;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);
`;

export const LocationList = styled.div`
  display: grid;
  gap: 1.35rem;
  margin-top: 1.6rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem 1.25rem;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 0.95rem;
  }
`;

export const LocationButton = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.8rem;
  align-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
  transition: transform 160ms ease;

  &:hover {
    transform: translateY(-0.0625rem);
  }
`;

export const LocationIconWrap = styled.span`
  width: 1rem;
  height: 1.25rem;
  display: grid;
  place-items: center;
`;

export const LocationIconPin = styled.span`
  position: relative;
  width: 0.82rem;
  height: 0.82rem;
  display: inline-block;
  box-sizing: border-box;
  border: 1.7px solid ${({ $active }) => ($active ? "#a11f24" : "#171717")};
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  transition: border-color 160ms ease;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.18rem;
    height: 0.18rem;
    border-radius: 999rem;
    background: ${({ $active }) => ($active ? "#a11f24" : "#171717")};
    transform: translate(-50%, -50%) rotate(45deg);
    transition: background 160ms ease;
  }
`;

export const LocationButtonLabel = styled.span`
  min-width: 0;
`;

export const LocationName = styled.span`
  display: block;
  color: ${({ $active }) => ($active ? "#a11f24" : "#1b1b1b")};
  font-size: 0.96rem;
  line-height: 1.4;
  font-weight: 500;
  transition: color 160ms ease;
`;

export const MapCard = styled.div`
  min-width: 0;
  background: #ffffff;
`;

export const MapSurface = styled.div`
  position: relative;
  min-height: 35rem;

  .leaflet-container {
    width: 100%;
    min-height: 35rem;
    background: #efe9dd;
    font-family: inherit;
  }

  .leaflet-control-attribution {
    font-size: 0.68rem;
  }

  .leaflet-popup-content-wrapper {
    border-radius: 1.4rem;
    padding: 0;
    box-shadow: 0 1rem 3rem rgba(15, 12, 8, 0.16);
  }

  .leaflet-popup-content {
    margin: 0;
  }

  .leaflet-popup-tip {
    background: #ffffff;
  }

  .leaflet-popup-close-button {
    display: none;
  }

  .presence-marker {
    position: relative;
    display: block;
    width: 3.65rem;
    height: 4.35rem;
    transform-origin: center bottom;
    transition: transform 180ms ease;
  }

  .presence-marker-pin {
    position: absolute;
    inset: 0.45rem 0.2rem 0 auto;
    width: 3.15rem;
    height: 3.15rem;
    border-radius: 50% 50% 50% 0;
    background: #b8202a;
    box-shadow: 0 0.9rem 1.8rem rgba(137, 27, 28, 0.24);
    transform: rotate(-45deg);
  }

  .presence-marker-logo {
    position: absolute;
    top: 1.18rem;
    left: 50%;
    z-index: 1;
    width: 2.15rem;
    height: 1.1rem;
    border-radius: 999rem;
    background: #ffffff;
    box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1);
    display: grid;
    place-items: center;
    overflow: hidden;
    transform: translateX(-50%);
  }

  .presence-marker-logo img {
    width: 1.55rem;
    height: auto;
    display: block;
  }

  .presence-marker.is-active .presence-marker-pin {
    background: #8f1820;
    box-shadow: 0 1rem 2rem rgba(137, 27, 28, 0.32);
  }

  .presence-marker.is-active {
    transform: scale(1.03);
  }

  @media (max-width: 980px) {
    min-height: 31rem;

    .leaflet-container {
      min-height: 31rem;
    }
  }

  @media (max-width: 768px) {
    min-height: 28rem;

    .leaflet-container {
      min-height: 28rem;
    }

    .presence-marker {
      width: 3rem;
      height: 3.65rem;
    }

    .presence-marker-pin {
      width: 2.55rem;
      height: 2.55rem;
    }

    .presence-marker-logo {
      top: 0.98rem;
      width: 1.8rem;
      height: 0.96rem;
    }

    .presence-marker-logo img {
      width: 1.32rem;
    }
  }
`;

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

export const PopupInlineLink = styled(RouterLink)`
  color: #d92921;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 160ms ease;

  &:hover {
    color: #a61d18;
  }
`;
