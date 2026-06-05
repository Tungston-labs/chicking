import { chileLocations } from "./countries/chile/locations.js";
import { dominicanRepublicLocations } from "./countries/dominicanRepublic/locations.js";
import { guyanaLocations } from "./countries/guyana/locations.js";
import { surinameLocations } from "./countries/suriname/locations.js";
import { trinidadTobagoLocations } from "./countries/trinidadTobago/locations.js";

export const southAmericaCaribbeanRegion = {
  description:
    "High-interest territories connecting South America and the Caribbean growth pipeline.",
  focusZoom: 4,
  id: "south-america-caribbean",
  label: "South America & Caribbean",
  locations: [
    ...surinameLocations,
    ...guyanaLocations,
    ...trinidadTobagoLocations,
    ...dominicanRepublicLocations,
    ...chileLocations,
  ],
};
