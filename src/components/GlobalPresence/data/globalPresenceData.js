export { globalPresenceRegions } from "./continents/index.js";

export const globalPresenceBanner = {
  description:
    "Discover featured Chicking markets across operational territories and high-potential franchise destinations. Select a region, inspect live map pins, and move directly into a franchise inquiry for the market you want to explore.",
  image: "/images/globalpresence/global.svg",
  titleLines: ["Serving Global Markets", "Across Multiple Continents"],
};

export const frontierFilters = [
  { id: "all", label: "All" },
  { id: "africa", label: "Africa" },
  { id: "asia-middle-east", label: "Asia / Middle East" },
  { id: "north-america", label: "North America" },
  { id: "south-america", label: "South America" },
];

export const futureFrontierMarkets = [
  {
    filterIds: ["all", "south-america"],
    id: "frontier-suriname",
    market: "Suriname",
    note: "Capital city launch planning",
    status: "Coming Soon",
  },
  {
    filterIds: ["all", "africa"],
    id: "frontier-tanzania",
    market: "Tanzania",
    note: "East Africa growth corridor",
    status: "Coming Soon",
  },
  {
    filterIds: ["all", "africa"],
    id: "frontier-dr-congo",
    market: "DR Congo",
    note: "Regional franchise inquiry",
    status: "Coming Soon",
  },
  {
    filterIds: ["all", "africa"],
    id: "frontier-malawi",
    market: "Malawi",
    note: "Emerging territory assessment",
    status: "Coming Soon",
  },
  {
    filterIds: ["all", "asia-middle-east"],
    id: "frontier-bahrain",
    market: "Bahrain",
    note: "Multi-format opportunity",
    status: "Inquiry Open",
  },
  {
    filterIds: ["all", "asia-middle-east"],
    id: "frontier-nepal",
    market: "Nepal",
    note: "High-traffic urban interest",
    status: "Inquiry Open",
  },
  {
    filterIds: ["all", "north-america"],
    id: "frontier-vancouver",
    market: "Vancouver",
    note: "Gateway city master franchise",
    status: "Inquiry Open",
  },
  {
    filterIds: ["all", "south-america"],
    id: "frontier-guyana",
    market: "Guyana",
    note: "Coastal market momentum",
    status: "Inquiry Open",
  },
];
