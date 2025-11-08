import {
  excludeEasternCounties,
  kansasExclude,
  //sarpyExclude,
  //triCityExclude,
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
    // statewide review species
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
      "US-KS-005", // Atchison
      "US-KS-013", // Brown
      "US-KS-043", // Doniphan
      "US-KS-061", // Geary
      "US-KS-085", // Jackson
      "US-KS-111", // Lyon
      "US-KS-117", // Marshall
      "US-KS-127", // Morris
      "US-KS-131", // Nemaha
      "US-KS-139", // Osage
      "US-KS-149", // Pottawatomie
      "US-KS-161", // Riley
      "US-KS-177", // Shawnee
      "US-KS-197", // Wabaunsee
      "US-KS-201", // Washington
    ],
    exclude: excludeEasternCounties,
  },
  {
    // southeast
    channel: "1417691914114961408",
    regions: [
      "US-KS-001", // Allen
      "US-KS-003", // Anderson
      "US-KS-011", // Bourbon
      "US-KS-019", // Chautauqua
      "US-KS-021", // Cherokee
      "US-KS-031", // Coffey
      "US-KS-037", // Crawford
      "US-KS-049", // Elk
      "US-KS-073", // Greenwood
      "US-KS-099", // Labette
      "US-KS-107", // Linn
      "US-KS-125", // Montgomery
      "US-KS-133", // Neosho
      "US-KS-205", // Wilson
      "US-KS-207", // Woodson
    ],
    exclude: excludeEasternCounties,
  },
];
