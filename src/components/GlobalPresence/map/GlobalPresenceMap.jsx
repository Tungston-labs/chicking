import "leaflet/dist/leaflet.css";

import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import SectionHeader from "../../HomeSections/components/SectionHeader/index.jsx";
import { PageSection } from "../../Layout/PageLayout.jsx";
import { globalPresenceRegions } from "../data/globalPresenceData.js";
import {
  activeMarkerIcon,
  defaultMarkerIcon,
  DEFAULT_REGION_ID,
  getLocationMarkerEventHandlers,
  MapViewportController,
  setActiveLocationForRegion,
} from "./globalPresenceMap.helpers.js";
import GlobalPresenceLocationPopup from "./GlobalPresenceLocationPopup.jsx";
import {
  LocationButton,
  LocationButtonLabel,
  LocationIconPin,
  LocationIconWrap,
  LocationList,
  LocationName,
  LocationSidebar,
  LocationSidebarHeading,
  MapCard,
  MapSurface,
  PresencePanel,
  PresenceShell,
  RegionTab,
  RegionTabs,
} from "./GlobalPresenceMap.styles.js";

const GlobalPresenceMap = () => {
  const [activeRegionId, setActiveRegionId] = useState(DEFAULT_REGION_ID);
  const [activeLocationIdsByRegion, setActiveLocationIdsByRegion] = useState(() =>
    Object.fromEntries(
      globalPresenceRegions.map((region) => [region.id, region.locations[0]?.id || ""]),
    ),
  );
  const markerRefs = useRef({});

  const activeRegion =
    globalPresenceRegions.find((region) => region.id === activeRegionId) ||
    globalPresenceRegions[0];

  const activeLocationId =
    activeLocationIdsByRegion[activeRegion.id] || activeRegion.locations[0]?.id || "";

  const activeLocation =
    activeRegion.locations.find((location) => location.id === activeLocationId) ||
    activeRegion.locations[0];
  const activeCountry = activeLocation?.country || activeRegion.locations[0]?.country || "";
  const activeRegionCountries = useMemo(() => {
    const countriesByName = new Map();

    activeRegion.locations.forEach((location) => {
      if (!countriesByName.has(location.country)) {
        countriesByName.set(location.country, location);
      }
    });

    return Array.from(countriesByName.values());
  }, [activeRegion.locations]);
  const activeCountryLocations = useMemo(
    () =>
      activeRegion.locations.filter(
        (location) => location.country === activeCountry,
      ),
    [activeCountry, activeRegion.locations],
  );

  useEffect(() => {
    if (!activeLocation) {
      return;
    }

    const marker = markerRefs.current[activeLocation.id];

    if (marker) {
      marker.openPopup();
    }
  }, [activeLocation]);

  return (
    <PageSection spacing="4rem 2rem 4.5rem">
      <PresenceShell>
        <SectionHeader
          align="left"
          description="Growth Has Been Steady For A K Mansoor Who Opened His First Store In Dubai's Deira Area In 2000. The Home-Grown QSR Chain Aims To Have At Least, 600 Stores Globally By 2025."
          title={
            <>
              Find Our <strong>Locations</strong>
            </>
          }
        />

        <RegionTabs>
          {globalPresenceRegions.map((region) => (
            <RegionTab
              key={region.id}
              type="button"
              $active={region.id === activeRegion.id}
              onClick={() => setActiveRegionId(region.id)}
            >
              {region.label}
            </RegionTab>
          ))}
        </RegionTabs>

        <PresencePanel>
          <LocationSidebar>
            <LocationSidebarHeading>{activeRegion.label}</LocationSidebarHeading>

            <LocationList>
              {activeRegionCountries.map((location) => (
                <LocationButton
                  key={location.country}
                  type="button"
                  $active={location.country === activeCountry}
                  onClick={() =>
                    setActiveLocationForRegion({
                      locationId: location.id,
                      regionId: activeRegion.id,
                      setActiveLocationIdsByRegion,
                    })
                  }
                >
                  <LocationIconWrap aria-hidden="true">
                    <LocationIconPin $active={location.country === activeCountry} />
                  </LocationIconWrap>

                  <LocationButtonLabel>
                    <LocationName $active={location.country === activeCountry}>
                      {location.country}
                    </LocationName>
                  </LocationButtonLabel>
                </LocationButton>
              ))}
            </LocationList>
          </LocationSidebar>

          <MapCard>
            <MapSurface>
              <MapContainer
                center={[
                  activeLocation?.coordinates.lat || 0,
                  activeLocation?.coordinates.lng || 0,
                ]}
                zoom={activeRegion.focusZoom}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MapViewportController
                  activeLocation={activeLocation}
                  activeRegion={activeRegion}
                  visibleLocations={activeCountryLocations}
                />

                {activeCountryLocations.map((location) => (
                  <Marker
                    key={location.id}
                    icon={
                      location.id === activeLocation?.id
                        ? activeMarkerIcon
                        : defaultMarkerIcon
                    }
                    position={[location.coordinates.lat, location.coordinates.lng]}
                    ref={(marker) => {
                      if (marker) {
                        markerRefs.current[location.id] = marker;
                      }
                    }}
                    eventHandlers={getLocationMarkerEventHandlers({
                      activeRegion,
                      location,
                      setActiveLocationIdsByRegion,
                    })}
                  >
                    <Popup autoPanPadding={[30, 30]} closeButton={false}>
                      <GlobalPresenceLocationPopup location={location} />
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </MapSurface>
          </MapCard>
        </PresencePanel>
      </PresenceShell>
    </PageSection>
  );
};

export default GlobalPresenceMap;
