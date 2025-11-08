import {
  excludeEasternCounties,
  nebraskaExclude,
  sarpyExclude,
  triCityExclude,
} from "./exclude";

type RbaConfig = {
  /** Discord Channel ID */
  channel: string;
  /** List of ebird regions to include */
  regions: string[];
  /** Species to exclude from the RBA. Useful for seasonal rarities */
  exclude?: Set<string>;
};

export const config: RbaConfig[] = [
  {
    // statewide
    channel: "1417962654571692033",
    regions: ["US-KS"],
    exclude: kansasExclude,
  },
  {
    // kansas-city
    channel: "1417691072947294208",
    regions: [
      "US-KS-045", // Douglas
      "US-KS-059", // Franklin
      "US-KS-087", // Jefferson
      "US-KS-091", // Johnson
      "US-KS-121", // Miami
      "US-KS-209", // Wyandotte
    ], 
    exclude: excludeEasternCounties,
  },
  {
    // northeast
    channel: "1417691389487087657",
    regions: [
      "US-NE-055", // Douglas
      "US-NE-153", // Sarpy
      "US-NE-177", // Washington
    ],
    exclude: sarpyExclude,
  },
  {
    // southeast
    channel: "1417691914114961408",
    regions: [
      "US-NE-019", // Buffalo

    ],
    exclude: triCityExclude,
  },
];
