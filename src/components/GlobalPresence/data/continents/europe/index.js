import { netherlandsLocations } from "./countries/netherlands/locations.js";
import { unitedKingdomLocations } from "./countries/unitedKingdom/locations.js";

export const europeRegion = {
  description:
    "Strategic European cities suited for flagship presence and regional expansion clusters.",
  focusZoom: 5,
  id: "europe",
  label: "Europe",
  locations: [
    ...netherlandsLocations,
    ...unitedKingdomLocations,
  ],
};
