import { egyptLocations } from "./countries/egypt/locations.js";
import { omanLocations } from "./countries/oman/locations.js";
import { qatarLocations } from "./countries/qatar/locations.js";
import { saudiArabiaLocations } from "./countries/saudiArabia/locations.js";
import { uaeLocations } from "./countries/uae/locations.js";

export const middleEastRegion = {
  description:
    "Core Middle East markets that continue to anchor Chicking's long-term regional momentum.",
  focusZoom: 5,
  id: "middle-east",
  label: "Middle East",
  locations: [
    ...uaeLocations,
    ...omanLocations,
    ...saudiArabiaLocations,
    ...qatarLocations,
    ...egyptLocations,
  ],
};
