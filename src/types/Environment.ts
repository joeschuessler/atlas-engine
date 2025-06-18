export const ALL_ENVIRONMENTS: Environment[] = [
  "pond", "river", "lake", "marsh",
  "coastal", "ocean", "coral_reef", "estuary", "mangrove",
  "prairie", "savanna", "steppe",
  "rainforest", "temperate_forest", "coniferous_forest", "taiga",
  "desert", "semiarid_desert", "dunes", "coastal_desert", "cold_desert", "salt_flats",
  "arctic_tundra", "alpine_tundra",
  "foothills", "lowlands", "highlands", "peaks"
]

export type Environment =
  //freshwater
  | "pond"
  | "river"
  | "lake"
  | "marsh"

  //marine
  | "coastal"
  | "ocean"
  | "coral_reef"
  | "estuary"
  | "mangrove"

  //grasslands
  | "prairie"
  | "savanna"
  | "steppe"

  //forests
  | "rainforest"  
  | "temperate_forest"
  | "coniferous_forest"
  | "taiga"

  //desert
  | "desert"
  | "semiarid_desert"
  | "dunes"
  | "coastal_desert"
  | "cold_desert"
  | "salt_flats"

  //tundra
  | "arctic_tundra"
  | "alpine_tundra"

  //mountains
  | "foothills"
  | "lowlands"
  | "highlands"
  | "peaks";