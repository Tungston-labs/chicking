import { canadaLocations } from "./countries/canada/locations.js";
import { unitedStatesLocations } from "./countries/unitedStates/locations.js";
import { guyanaLocations } from "../southAmericaCaribbean/countries/guyana/locations.js";
import { trinidadTobagoLocations } from "../southAmericaCaribbean/countries/trinidadTobago/locations.js";

export const americasCaribbeanRegion = {
  description:
    "Markets spanning North America, South America, and the Caribbean.",
  focusZoom: 4,
  id: "americas-caribbean",
  label: "North America / South America / Caribbean",
  locations: [
    ...canadaLocations,
    ...guyanaLocations,
    ...trinidadTobagoLocations,
    ...unitedStatesLocations,
  ],
};
