import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

export const DEFAULT_REGION_ID = "africa";

const MARKER_LOGO_SRC = "/images/logo.svg";

const buildMarkerIcon = (active) =>
  L.divIcon({
    className: "",
    html: `
      <span class="presence-marker${active ? " is-active" : ""}">
        <span class="presence-marker-pin"></span>
        <span class="presence-marker-logo">
          <img src="${MARKER_LOGO_SRC}" alt="" />
        </span>
      </span>
    `,
    iconAnchor: [29, 56],
    iconSize: [58, 72],
    popupAnchor: [0, -48],
  });

export const defaultMarkerIcon = buildMarkerIcon(false);
export const activeMarkerIcon = buildMarkerIcon(true);

export const setActiveLocationForRegion = ({
  locationId,
  regionId,
  setActiveLocationIdsByRegion,
}) => {
  setActiveLocationIdsByRegion((current) => ({
    ...current,
    [regionId]: locationId,
  }));
};

export const getLocationMarkerEventHandlers = ({
  activeRegion,
  location,
  setActiveLocationIdsByRegion,
}) => {
  const activateLocation = (event) => {
    setActiveLocationForRegion({
      locationId: location.id,
      regionId: activeRegion.id,
      setActiveLocationIdsByRegion,
    });

    event.target.openPopup();
  };

  return {
    click: activateLocation,
    mouseover: activateLocation,
  };
};

export const MapViewportController = ({
  activeLocation,
  activeRegion,
  visibleLocations,
}) => {
  const map = useMap();

  useEffect(() => {
    if (!visibleLocations?.length) {
      return;
    }

    const bounds = L.latLngBounds(
      visibleLocations.map((location) => [
        location.coordinates.lat,
        location.coordinates.lng,
      ]),
    );

    map.flyToBounds(bounds, {
      duration: 0.7,
      maxZoom: activeRegion.focusZoom,
      padding: [50, 50],
    });
  }, [activeRegion.focusZoom, map, visibleLocations]);

  useEffect(() => {
    if (!activeLocation || visibleLocations?.length > 1) {
      return;
    }

    map.flyTo(
      [activeLocation.coordinates.lat, activeLocation.coordinates.lng],
      activeRegion.focusZoom,
      {
        duration: 0.65,
      },
    );
  }, [activeLocation, activeRegion.focusZoom, map, visibleLocations?.length]);

  return null;
};
