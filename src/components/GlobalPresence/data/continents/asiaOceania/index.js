import { afghanistanLocations } from "./countries/afghanistan/locations.js";
import { australiaLocations } from "./countries/australia/locations.js";
import { bangladeshLocations } from "./countries/bangladesh/locations.js";
import { indiaLocations } from "./countries/india/locations.js";
import { maldivesLocations } from "./countries/maldives/locations.js";
import { malaysiaLocations } from "./countries/malaysia/locations.js";
import { myanmarLocations } from "./countries/myanmar/locations.js";
import { newZealandLocations } from "./countries/newZealand/locations.js";
import { sriLankaLocations } from "./countries/sriLanka/locations.js";
import { tajikistanLocations } from "./countries/tajikistan/locations.js";
import { thailandLocations } from "./countries/thailand/locations.js";
import { omanLocations } from "../middleEast/countries/oman/locations.js";
import { qatarLocations } from "../middleEast/countries/qatar/locations.js";
import { saudiArabiaLocations } from "../middleEast/countries/saudiArabia/locations.js";
import { uaeLocations } from "../middleEast/countries/uae/locations.js";

export const asiaMiddleEastRegion = {
  description:
    "A broad Asia and Middle East network blending established stores with new-territory franchise conversations.",
  focusZoom: 4,
  id: "asia-middle-east",
  label: "Asia / Middle East",
  locations: [
    ...afghanistanLocations,
    ...bangladeshLocations,
    ...indiaLocations,
    ...sriLankaLocations,
    ...maldivesLocations,
    ...malaysiaLocations,
    ...myanmarLocations,
    ...thailandLocations,
    ...omanLocations,
    ...qatarLocations,
    ...saudiArabiaLocations,
    ...tajikistanLocations,
    ...uaeLocations,
  ],
};

export const oceaniaRegion = {
  description: "Oceania markets serving Australia and New Zealand.",
  focusZoom: 4,
  id: "oceania",
  label: "Oceania",
  locations: [
    ...australiaLocations,
    ...newZealandLocations,
  ],
};
