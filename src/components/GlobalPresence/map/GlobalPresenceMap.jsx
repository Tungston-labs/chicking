import { useEffect, useMemo, useRef, useState } from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";
import { Map as PigeonMap, Overlay } from "pigeon-maps";

import SectionHeader from "../../HomeSections/components/SectionHeader/index.jsx";
import { PageSection } from "../../Layout/PageLayout.jsx";
import { globalPresenceRegions } from "../data/globalPresenceData.js";
import {
  DEFAULT_REGION_ID,
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
  MapControlButton,
  MapControlToolbar,
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

  const [selectedLocationId, setSelectedLocationId] = useState(null);

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

  // Compute center and zoom state for Pigeon Maps
  const [center, setCenter] = useState([2.0341783, 45.3411703]);
  const [zoom, setZoom] = useState(activeRegion.focusZoom || 12);

  // Update center & zoom when country changes
  useEffect(() => {
    if (!activeCountryLocations?.length) return;
    const avgLat =
      activeCountryLocations.reduce((acc, loc) => acc + loc.coordinates.lat, 0) /
      activeCountryLocations.length;
    const avgLng =
      activeCountryLocations.reduce((acc, loc) => acc + loc.coordinates.lng, 0) /
      activeCountryLocations.length;

    setCenter([avgLat, avgLng]);
    setZoom(activeRegion.focusZoom || 12);
  }, [activeCountry, activeCountryLocations, activeRegion.focusZoom]);

  const handleMarkerClick = (id) => {
    setSelectedLocationId((prev) => (prev === id ? null : id));
    setActiveLocationForRegion({
      locationId: id,
      regionId: activeRegion.id,
      setActiveLocationIdsByRegion,
    });
  };

  const handleResetView = () => {
    if (!activeCountryLocations?.length) return;
    const avgLat =
      activeCountryLocations.reduce((acc, loc) => acc + loc.coordinates.lat, 0) /
      activeCountryLocations.length;
    const avgLng =
      activeCountryLocations.reduce((acc, loc) => acc + loc.coordinates.lng, 0) /
      activeCountryLocations.length;

    setCenter([avgLat, avgLng]);
    setZoom(activeRegion.focusZoom || 12);
  };

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
              onClick={() => {
                setActiveRegionId(region.id);
                setSelectedLocationId(null);
              }}
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
                  onClick={() => {
                    setSelectedLocationId(null);
                    setActiveLocationForRegion({
                      locationId: location.id,
                      regionId: activeRegion.id,
                      setActiveLocationIdsByRegion,
                    });
                  }}
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
              <PigeonMap
                center={center}
                zoom={zoom}
                onBoundsChanged={({ center: newCenter, zoom: newZoom }) => {
                  setCenter(newCenter);
                  setZoom(newZoom);
                }}
                metaWheelZoom={false}
                twoFingerPageScroll={true}
              >
                <MapControlToolbar>
                  <MapControlButton
                    type="button"
                    onClick={() => setZoom((z) => Math.min(z + 1, 18))}
                    title="Zoom In"
                    aria-label="Zoom In"
                  >
                    <Plus size={18} />
                  </MapControlButton>
                  <MapControlButton
                    type="button"
                    onClick={() => setZoom((z) => Math.max(z - 1, 1))}
                    title="Zoom Out"
                    aria-label="Zoom Out"
                  >
                    <Minus size={18} />
                  </MapControlButton>
                  <MapControlButton
                    type="button"
                    onClick={handleResetView}
                    title="Reset View"
                    aria-label="Reset View"
                  >
                    <RotateCcw size={16} />
                  </MapControlButton>
                </MapControlToolbar>

                {activeCountryLocations.flatMap((location) => {
                  const isActive = location.id === activeLocationId;
                  const isSelected = location.id === selectedLocationId;

                  return [
                    <Overlay
                      key={`pin-${location.id}`}
                      anchor={[location.coordinates.lat, location.coordinates.lng]}
                      offset={[29, 56]}
                    >
                      <div
                        className={`presence-marker${isActive || isSelected ? " is-active" : ""}`}
                        onClick={() => handleMarkerClick(location.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <span className="presence-marker-pin"></span>
                        <span className="presence-marker-logo">
                          <img src="/images/logo.svg" alt="" />
                        </span>
                      </div>
                    </Overlay>,

                    isSelected ? (
                      <Overlay
                        key={`popup-${location.id}`}
                        anchor={[location.coordinates.lat, location.coordinates.lng]}
                        offset={[120, 75]}
                      >
                        <GlobalPresenceLocationPopup
                          location={location}
                          onClose={() => setSelectedLocationId(null)}
                        />
                      </Overlay>
                    ) : null,
                  ].filter(Boolean);
                })}
              </PigeonMap>
            </MapSurface>
          </MapCard>
        </PresencePanel>
      </PresenceShell>
    </PageSection>
  );
};


export default GlobalPresenceMap;