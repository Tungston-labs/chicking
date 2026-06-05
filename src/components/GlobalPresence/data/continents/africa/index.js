import { coteDIvoireLocations } from "./countries/coteDIvoire/locations.js";
import { djiboutiLocations } from "./countries/djibouti/locations.js";
import { ethiopiaLocations } from "./countries/ethiopia/locations.js";
import { kenyaLocations } from "./countries/kenya/locations.js";
import { southAfricaLocations } from "./countries/southAfrica/locations.js";
import { somaliaLocations } from "./countries/somalia/locations.js";
import { ugandaLocations } from "./countries/uganda/locations.js";
import { zambiaLocations } from "./countries/zambia/locations.js";

export const africaRegion = {
  description:
    "An expanding footprint across East, Central, and Southern Africa with operational and frontier opportunities.",
  focusZoom: 5,
  id: "africa",
  label: "Africa",
  locations: [
    ...djiboutiLocations,
    ...ethiopiaLocations,
    ...coteDIvoireLocations,
    ...kenyaLocations,
    ...somaliaLocations,
    ...southAfricaLocations,
    ...ugandaLocations,
    ...zambiaLocations,
  ],
};
