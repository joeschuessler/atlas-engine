import { Biome, Environment } from "types";

export const biomeEnvironments: Record<Biome, Environment[]> = 
{
  freshwater: ["pond","river","lake"],
  marine: ["coastal","ocean","coral_reef","estuary","mangrove"],
  grassland: ["savanna","prairie","steppe"],
  forest: ["rainforest","temperate_forest","coniferous_forest","taiga"],
  desert: ["desert", "semiarid_desert", "coastal_desert","cold_desert","salt_flats"],
  tundra: ["arctic_tundra", "alpine_tundra"],
  mountain: ["foothills","lowlands","highlands","peaks"]
};