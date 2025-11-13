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
    //channel: "1417962654571692033",
    //regions: ["US-KS"],
    //exclude: ??,
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
    //exclude: ??,
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
    //exclude: ??,
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
    //exclude: ??,
  },
  {
    // southwest
    channel: "1417692103676395520",
    regions: [
      "US-KS-025", // Clark
      "US-KS-033", // Comanche
      "US-KS-047", // Edwards
      "US-KS-055", // Finney
      "US-KS-057", // Ford
      "US-KS-067", // Grant
      "US-KS-069", // Gray
      "US-KS-075", // Hamilton
      "US-KS-081", // Haskell
      "US-KS-083", // Hodgeman
      "US-KS-093", // Kearny
      "US-KS-097", // Kiowa
      "US-KS-119", // Meade
      "US-KS-145", // Pawnee
      "US-KS-175", // Seward
      "US-KS-187", // Stanton
      "US-KS-189", // Stevens
    ],
    //exclude: ??,
  },
  {
    // northwest
    channel: "1417692253270573086",
    regions: [
      "US-KS-023", // Cheyenne
      "US-KS-039", // Decatur
      "US-KS-051", // Ellis
      "US-KS-063", // Gove
      "US-KS-065", // Graham
      "US-KS-071", // Greeley
      "US-KS-101", // Lane
      "US-KS-109", // Logan
      "US-KS-135", // Ness
      "US-KS-137", // Norton
      "US-KS-147", // Phillips
      "US-KS-153", // Rawlins
      "US-KS-163", // Rooks
      "US-KS-165", // Rush
      "US-KS-171", // Scott
      "US-KS-179", // Sheridan
      "US-KS-181", // Sherman
      "US-KS-193", // Thomas
      "US-KS-195", // Trego
      "US-KS-199", // Wallace
      "US-KS-203", // Wichita
    ],
  },
  {
    // cheyennebottoms&quivira
    channel: "1417694080548474891",
    regions: [
      "US-KS-185", // Stafford
      "US-KS-009", // Barton
    ],
    //exclude: ??,
  },
  {
    // morton-county
    channel: "1417689848432689223",
    regions: ["US-KS-129"],
    //exclude: ??,
  },
  {
    // southcentral
    channel: "1417690570310025237",
    regions: [
      "US-KS-007", // Barber
      "US-KS-015", // Butler
      "US-KS-017", // Chase
      "US-KS-035", // Cowley
      "US-KS-077", // Harper
      "US-KS-079", // Harvey
      "US-KS-095", // Kingman
      "US-KS-115", // Marion
      "US-KS-113", // McPherson
      "US-KS-151", // Pratt
      "US-KS-155", // Reno
      "US-KS-159", // Rice
      "US-KS-173", // Sedgwick
      "US-KS-191", // Sumner
    ],
    //exclude: ??,
  },
];
