import { Environment, WaterAccess } from "types";

export const ALL_WATERACCESS: WaterAccess[] = [
  "none", "subsurface", "seasonal",
  "surface", "standing", "saline", "saturated"
]

export const waterAccessBias: Record<WaterAccess, Partial<Record<WaterAccess, number>>> = {
  none: {
    none: 0.30,
    subsurface: 0.25,
    seasonal: 0.20,
    surface: 0.15,
    saturated: 0.05,
    standing: 0.05
  },

  subsurface: {
    subsurface: 0.30,
    none: 0.20,
    seasonal: 0.20,
    surface: 0.15,
    standing: 0.10,
    saturated: 0.05
  },

  seasonal: {
    seasonal: 0.25,
    surface: 0.20,
    saturated: 0.20,
    standing: 0.15,
    subsurface: 0.10,
    none: 0.1
  },

  surface: {
    surface: 0.25,
    seasonal: 0.20,
    saturated: 0.20,
    subsurface: 0.15,
    standing: 0.15,
    none: 0.05
  },

  standing: {
    standing: 0.25,
    saturated: 0.20,
    surface: 0.20,
    seasonal: 0.15,
    subsurface: 0.10,
    none: 0.10
  },

  saturated: {
    saturated: 0.30,
    standing: 0.25,
    seasonal: 0.15,
    surface: 0.15,
    subsurface: 0.1,
    none: 0.05
  },

  saline: {
    saline: 0.35,
    saturated: 0.20,
    standing: 0.15,
    surface: 0.10,
    seasonal: 0.10,
    none: 0.10
  }
};

export const waterAccessEnvironments: Record<WaterAccess, Environment[]> = {
  none: [
    "desert", "semiarid_desert", "dunes", "coastal_desert", 
    "cold_desert", "salt_flats", "prairie", "steppe"
  ],
  surface: [
    "river", "temperate_forest", "taiga", "foothills", "lowlands", "highlands"
  ],
  standing: [
    "pond", "lake", "marsh", "lowlands", "alpine_tundra"
  ],
  saturated: [
    "marsh", "mangrove", "rainforest"
  ],
  seasonal: [
    "savanna", "steppe", "foothills", "semiarid_desert"
  ],
  saline: [
    "coastal", "ocean", "coral_reef", "estuary", "mangrove", "coastal_desert"
  ],
  subsurface: [
    "highlands", "arctic_tundra", "cold_desert", "peaks"
  ],
};
