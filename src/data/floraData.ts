import { IFlora } from "interfaces";
import { Environment } from "types";

export const floraRanges: Record<Environment, IFlora> = {
  // Freshwater environments
  pond: {
    aquatic:  [0.5, 1.0],     // Still water hosts lilies, algae, reeds
    herbs:    [0.3, 0.7],     // Banks support useful greens
    grasses:  [0.1, 0.3],     // Marginal pasture zones
    shrubs:   [0.0, 0.3],     // Damp-tolerant bushes
    fungi:    [0.0, 0.3],     // Rot-prone debris and shade
    crops:    [0.0, 0.2],     // Wet farming niches
    trees:    [0.0, 0.1],     // Scattered wetland trees
    exotic:   [0.0, 0.1],     // Niche rare plants
  },

  river: {
    aquatic:  [0.4, 0.9],     // Flowing vegetation, reeds, kelp
    herbs:    [0.4, 0.6],     // Useful greens along banks
    grasses:  [0.1, 0.3],     // River meadows
    trees:    [0.0, 0.4],     // Riparian canopy
    shrubs:   [0.0, 0.2],     // Bushes along floodplain
    fungi:    [0.0, 0.2],     // Riverine decay
    crops:    [0.0, 0.2],     // River-based farming
    exotic:   [0.0, 0.1],     // Rare aquatic species
  },

  lake: {
    aquatic:  [0.6, 1.0],     // Algae, weeds, kelp beds
    herbs:    [0.3, 0.5],     // Useful flora near water’s edge
    grasses:  [0.1, 0.4],     // Marshy margins
    trees:    [0.0, 0.4],     // Lakeside forests
    fungi:    [0.0, 0.3],     // Water rot/decomposition
    shrubs:   [0.0, 0.2],     // Moisture-tolerant growth
    crops:    [0.0, 0.2],     // Lakeside cultivation
    exotic:   [0.0, 0.1],     // Unique lake flora
  },

  marsh: {
    aquatic:  [0.6, 1.0],     // Marsh weeds, mosses, algae
    herbs:    [0.5, 0.7],     // Wetland edible/useful herbs
    fungi:    [0.3, 0.5],     // Decay-rich undergrowth
    grasses:  [0.2, 0.5],     // Shallow-rooted grasses
    shrubs:   [0.2, 0.5],     // Dense brush
    trees:    [0.1, 0.3],     // Swamp trees
    crops:    [0.0, 0.1],     // Limited wet cultivation
    exotic:   [0.0, 0.05],    // Uncommon fen vegetation
  },

  // Marine environments
  coastal: {
    aquatic:  [0.5, 0.8],     // Tide pools, seaweed, kelp
    herbs:    [0.3, 0.6],     // Salt-tolerant medicinal plants
    grasses:  [0.1, 0.3],     // Coastal dune grass
    shrubs:   [0.0, 0.3],     // Windswept, salt-resistant shrubs
    trees:    [0.0, 0.2],     // Palms, cypress
    fungi:    [0.0, 0.2],     // Dune rot, damp shadows
    crops:    [0.0, 0.2],     // Brackish or protected plots
    exotic:   [0.0, 0.1],     // Rare shoreline flora
  },

  ocean: {
    aquatic:  [0.7, 1.0],     // Seaweed, floating vegetation
    herbs:    [0.0, 0.0],
    grasses:  [0.0, 0.0],
    shrubs:   [0.0, 0.0],
    trees:    [0.0, 0.0],
    fungi:    [0.0, 0.0],
    crops:    [0.0, 0.0],
    exotic:   [0.0, 0.05],    // Deep sea rare plants
  },

  coral_reef: {
    aquatic:  [0.7, 1.0],     // Coral algae, marine flora
    herbs:    [0.0, 0.3],     // Reef-adjacent shoreline herbs
    grasses:  [0.0, 0.0],
    shrubs:   [0.0, 0.0],
    trees:    [0.0, 0.0],
    fungi:    [0.0, 0.1],     // Coral decomposition agents
    crops:    [0.0, 0.0],
    exotic:   [0.0, 0.05],    // Rare coral symbiotes
  },

  estuary: {
    aquatic:  [0.7, 1.0],     // Brackish water flora
    herbs:    [0.5, 0.8],     // Wetland border herbs
    grasses:  [0.3, 0.6],     // Estuary marsh grasses
    shrubs:   [0.2, 0.5],     // Brackish shoreline shrubs
    trees:    [0.0, 0.3],     // Edge forests
    exotic:   [0.0, 0.05],    // Rare crossover vegetation
    fungi:    [0.0, 0.3],     // Rot-rich zones
    crops:    [0.0, 0.2],     // Mixed salinity tolerance
  },

  mangrove: {
    aquatic:  [0.8, 1.0],     // Swampy saltwater root flora
    herbs:    [0.3, 0.6],     // Dense undergrowth
    grasses:  [0.2, 0.5],     // Root-based stabilization
    shrubs:   [0.5, 0.8],     // Thick wet growth
    trees:    [0.5, 0.8],     // Dominant mangrove trees
    exotic:   [0.0, 0.05],    // Specialized niche flora
    fungi:    [0.3, 0.5],     // Strong fungal presence
    crops:    [0.0, 0.1],     // Uncommon in brackish soils
  },

  // Grasslands
  prairie: {
    aquatic:  [0.0, 0.0],
    herbs:    [0.5, 0.8],     // Rich herbaceous growth
    grasses:  [0.7, 1.0],     // Tall grass dominant
    shrubs:   [0.0, 0.3],     // Occasional thickets
    trees:    [0.0, 0.1],     // Tree clusters
    exotic:   [0.0, 0.05],    // Rare species amid common growth
    fungi:    [0.0, 0.2],     // Soil decomposition
    crops:    [0.3, 0.6],     // Naturally rich agriculture
  },

  savanna: {
    aquatic:  [0.0, 0.0],
    grasses:  [0.5, 0.9],     // Broad stretches of grazing land
    herbs:    [0.3, 0.7],     // Scattered edible/medicinal herbs
    shrubs:   [0.2, 0.5],     // Low scrub
    trees:    [0.2, 0.5],     // Widely spaced trees
    exotic:   [0.0, 0.1],     // Isolated unique flora
    fungi:    [0.0, 0.2],     // Sporadic decomposition
    crops:    [0.3, 0.5],     // Subsistence farming zones
  },

  steppe: {
    aquatic:  [0.0, 0.0],
    grasses:  [0.6, 1.0],     // Strong grassland
    herbs:    [0.4, 0.7],     // Arid-resistant herbs
    shrubs:   [0.1, 0.4],     // Minor bush presence
    trees:    [0.0, 0.1],     // Minimal canopy
    exotic:   [0.0, 0.05],    // Niche terrain flora
    fungi:    [0.0, 0.2],     // Grass decomposition
    crops:    [0.2, 0.5],     // Marginal farming conditions
  },
// Forests
  rainforest: {
    aquatic:  [0.0, 0.2],     // Rivers and pools possible
    grasses:  [0.0, 0.0],
    herbs:    [0.0, 0.0],
    trees:    [0.7, 1.0],     // Dense, multilayered canopy
    shrubs:   [0.4, 0.8],     // Understory thickets and bush growth
    fungi:    [0.3, 0.6],     // High humidity supports decomposition
    crops:    [0.0, 0.3],     // Slash-and-burn or natural yields
    exotic:   [0.1, 0.3],     // High biodiversity zone
  },

  temperate_forest: {
    aquatic:  [0.0, 0.1],     // Streams and ponds
    grasses:  [0.0, 0.0],
    herbs:    [0.0, 0.0],
    trees:    [0.6, 0.9],     // Seasonal deciduous or mixed canopy
    shrubs:   [0.3, 0.7],     // Rich forest-floor coverage
    fungi:    [0.2, 0.5],     // Seasonal rot and decay
    crops:    [0.1, 0.3],     // Edge cultivation or native yields
    exotic:   [0.0, 0.05],    // Occasional rare specimens
  },

  coniferous_forest: {
    aquatic:  [0.0, 0.1],     // Snowmelt-fed bodies
    grasses:  [0.0, 0.0],
    herbs:    [0.0, 0.0],
    trees:    [0.5, 0.8],     // Dense needleleaf canopy
    shrubs:   [0.3, 0.6],     // Hardy understory
    fungi:    [0.2, 0.5],     // Ground litter decomposition
    crops:    [0.0, 0.2],     // Limited agricultural use
    exotic:   [0.0, 0.05],    // Cold-tolerant rarities
  },

  taiga: {
    aquatic:  [0.0, 0.1],     // Frozen lakes or rivers
    grasses:  [0.0, 0.0],
    herbs:    [0.0, 0.0],
    trees:    [0.4, 0.7],     // Sparse boreal forest
    shrubs:   [0.2, 0.4],     // Low bushy growth
    fungi:    [0.1, 0.3],     // Short season fungal growth
    crops:    [0.0, 0.1],     // Marginal cultivation
    exotic:   [0.0, 0.05],    // Subarctic specialties
  },

  // Deserts
  desert: {
    aquatic:  [0.0, 0.0],
    herbs:    [0.0, 0.2],     // Specialized desert herbs
    grasses:  [0.0, 0.1],     // Sparse tough grass
    trees:    [0.0, 0.1],     // Rare oases or hardy desert trees
    shrubs:   [0.0, 0.3],     // Drought-tolerant bushes
    fungi:    [0.0, 0.0],
    crops:    [0.0, 0.2],     // Irrigated or clustered
    exotic:   [0.0, 0.1],     // Unusual desert flora
  },

  semiarid_desert: {
    aquatic:  [0.0, 0.0],
    herbs:    [0.0, 0.3],     // Increased herbaceous growth
    grasses:  [0.0, 0.2],     // Patchy steppe-like grasses
    trees:    [0.0, 0.1],     // Few scattered drought-tolerant trees
    shrubs:   [0.0, 0.2],     // Slightly more shrub cover
    fungi:    [0.0, 0.0],
    crops:    [0.0, 0.1],     // Marginal farming possible
    exotic:   [0.0, 0.1],     // Endemic species
  },

  dunes: {
    aquatic:  [0.0, 0.0],
    herbs:    [0.0, 0.2],     // Small resilient species
    grasses:  [0.0, 0.3],     // Stabilizing root-bound grasses
    trees:    [0.0, 0.05],    // Nearly absent
    shrubs:   [0.0, 0.1],     // Sand-hardy flora
    fungi:    [0.0, 0.0],
    crops:    [0.0, 0.05],    // Rare, coastal irrigation possible
    exotic:   [0.0, 0.1],     // Unique sand-adapted flora
  },

  coastal_desert: {
    aquatic:  [0.0, 0.0],
    herbs:    [0.0, 0.2],     // Grows in protected zones
    grasses:  [0.0, 0.2],     // Salt-tolerant clumps
    trees:    [0.0, 0.05],    // Minimal due to salt exposure
    shrubs:   [0.0, 0.1],     // Hardy coastal vegetation
    fungi:    [0.0, 0.0],
    crops:    [0.0, 0.1],     // Brackish cultivation areas
    exotic:   [0.0, 0.05],    // Rare coastal-adapted flora
  },

  cold_desert: {
    aquatic:  [0.0, 0.0],
    herbs:    [0.0, 0.3],     // Cold-hardy flowering plants
    grasses:  [0.0, 0.2],     // Tundra-like grasses
    trees:    [0.0, 0.1],     // Low-stature evergreens
    shrubs:   [0.0, 0.2],     // Arctic shrubs and lichens
    fungi:    [0.0, 0.0],
    crops:    [0.0, 0.1],     // Short-season yields
    exotic:   [0.0, 0.05],    // Rare alpine flora
  },

  salt_flats: {
    aquatic:  [0.0, 0.0],
    herbs:    [0.0, 0.1],     // Salt-tolerant species
    grasses:  [0.0, 0.05],    // Marginal edge grasses
    trees:    [0.0, 0.05],    // Almost none
    shrubs:   [0.0, 0.1],     // Occasional edge shrubs
    fungi:    [0.0, 0.0],
    crops:    [0.0, 0.0],
    exotic:   [0.0, 0.0],
  },

  // Tundra
  arctic_tundra: {
    aquatic:  [0.0, 0.1],     // Meltwater pools
    herbs:    [0.4, 0.7],     // Dominant tundra flora
    grasses:  [0.3, 0.5],     // Clump-forming
    trees:    [0.0, 0.0],
    shrubs:   [0.1, 0.3],     // Low woody plants
    fungi:    [0.0, 0.2],     // Cold rot processes
    crops:    [0.0, 0.1],     // Minimal due to frost
    exotic:   [0.0, 0.05],    // Arctic rarities
  },

  alpine_tundra: {
    aquatic:  [0.0, 0.1],     // Glacial melt sources
    herbs:    [0.3, 0.6],     // Hardy flowering herbs
    grasses:  [0.3, 0.6],     // Found in alpine meadows
    trees:    [0.0, 0.0],
    shrubs:   [0.1, 0.2],     // Stunted growth due to altitude
    fungi:    [0.0, 0.2],     // Subsurface and root decay
    crops:    [0.0, 0.1],     // Niche cultivation zones
    exotic:   [0.0, 0.05],    // Altitude specialists
  },

  // Mountains
  foothills: {
    aquatic:  [0.0, 0.1],     // Springs and runoff
    herbs:    [0.4, 0.7],     // Diverse hillside flora
    grasses:  [0.3, 0.6],     // Mixed density
    trees:    [0.3, 0.6],     // Varied slope coverage
    shrubs:   [0.3, 0.5],     // Transitional growth
    fungi:    [0.0, 0.2],     // Moist ravines
    crops:    [0.0, 0.2],     // Patchwork agriculture
    exotic:   [0.0, 0.1],     // Slope-unique flora
  },

  lowlands: {
    aquatic:  [0.0, 0.2],     // Lakes, rivers, wetlands
    herbs:    [0.5, 0.8],     // Fertile floor growth
    grasses:  [0.4, 0.7],     // Rich pasture areas
    trees:    [0.4, 0.7],     // Flatland forest potential
    shrubs:   [0.3, 0.6],     // Transitional and fertile
    fungi:    [0.0, 0.2],     // Especially in wooded zones
    crops:    [0.0, 0.3],     // Agricultural heartlands
    exotic:   [0.0, 0.1],     // Unique rich-zone plants
  },

  highlands: {
    aquatic:  [0.0, 0.1],     // Streams, creeks
    herbs:    [0.5, 0.8],     // Diverse due to microclimates
    grasses:  [0.5, 0.8],     // Highland pastures
    trees:    [0.4, 0.7],     // Upland woodland
    shrubs:   [0.2, 0.4],     // Thinner vegetation
    fungi:    [0.0, 0.2],     // Forested or shaded valleys
    crops:    [0.0, 0.2],     // Highland farming
    exotic:   [0.0, 0.1],     // Altitude-adapted species
  },

  peaks: {
    aquatic:  [0.0, 0.0],
    herbs:    [0.3, 0.6],     // Hardy mountaintop herbs
    grasses:  [0.3, 0.6],     // Alpine meadow pockets
    trees:    [0.0, 0.2],     // Tree line near zero
    shrubs:   [0.0, 0.2],     // Scattered stunted bushes
    fungi:    [0.0, 0.2],     // Cold-weather rot
    crops:    [0.0, 0.1],     // Rare terraced zones
    exotic:   [0.0, 0.05],    // Isolated mountaintop flora
  },
};
