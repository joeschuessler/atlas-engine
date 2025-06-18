import { Environment } from "types";

export const regionAdjacencyBias: Record<Environment,Partial<Record<Environment, number>>> = {
  pond: {
    marsh: 0.22,              // Top adjacent environ
    temperate_forest: 0.18,   // Common surrounding terrain
    prairie: 0.14,            // Open lands with ephemeral ponds
    pond: 0.14,               // Clustering of small ponds
    river: 0.12,              // Nearby streams or feeders
    lake: 0.1,                // Possibly part of a basin
    lowlands: 0.1,            // General transitional terrain
    savanna: 0.0,             // Still viable in warmer, drier regions
    mangrove: 0.0,            // Ponds can exist near mangrove swamps in tropical/coastal regions
    salt_flats: 0.0,          // Rare, but possible in very arid regions with ephemeral ponds
  },
  river: {
    marsh: 0.19,              // Swampy/flooded areas along rivers
    pond: 0.14,               // Small bodies connected to or near rivers
    temperate_forest: 0.14,   // Common environ along rivers
    lake: 0.1,                // Downstream or nearby larger water body
    lowlands: 0.09,           // Rivers tend to flow through low-elevation areas
    foothills: 0.08,          // Especially near river's upper reaches
    estuary: 0.07,            // If nearing coastlines (fresh-brackish transition)
    prairie: 0.07,            // Rivers often cut through open plains
    river: 0.05,              // Self-adjacency to represent branching systems
    savanna: 0.04,            // Warm climates-- common for river corridors
    mangrove: 0.02,           // Rivers flowing through tropical coast zones
    salt_flats: 0.01,         // Rare, but possible in arid river basins
  },
  lake: {
    temperate_forest: 0.19,   // Heavily wooded lakesides are very common
    marsh: 0.17,              // Wetland zones on lake edges
    river: 0.14,              // Lakes often feed or receive rivers
    pond: 0.1,                // Scattered nearby smaller bodies
    prairie: 0.1,             // Open plains with lake basins
    lowlands: 0.09,           // General elevation context
    lake: 0.07,               // Clusters of lakes, e.g. glacial or tectonic
    foothills: 0.06,          // Slight elevation transitions around lake basins
    savanna: 0.04,            // Drier warm-climate lakes
    mangrove: 0.03,           // Lakes near tropical coasts or estuaries
    salt_flats: 0.01,         // Rare saline lakes in arid zones
  },
  marsh: {
    pond: 0.21,               // Common within marsh mosaics
    river: 0.19,              // Often form along riverbanks and floodplains
    lake: 0.14,               // Surround many lake edges
    temperate_forest: 0.13,   // Forested transition or partially flooded woodlands
    prairie: 0.12,            // Open lowland marsh margins
    marsh: 0.10,              // Self-adjacency reflects expansive wetlands
    lowlands: 0.08,           // Broad terrain category around marshy zones
    mangrove: 0.03,           // Coastal or tropical marsh environs
    savanna: 0.07,            // Warm climate marshland fringes
    salt_flats: 0.01,         // Very rare but possible in arid marshy edges
  },
  coastal: {
    ocean: 0.29,              // Direct adjacency to open sea
    estuary: 0.19,            // Transitional zones where rivers meet the sea
    coastal_desert: 0.1,      // Found in arid zones like Namibia or Peru
    temperate_forest: 0.09,   // Forested coastlines in cooler regions
    savanna: 0.07,            // Warm, grassy coastal regions
    marsh: 0.06,              // Coastal wetlands and salt marshes
    coastal: 0.05,            // Self-adjacency to represent long shorelines
    coral_reef: 0.05,         // Shallow coastal waters in tropical regions
    lowlands: 0.04,           // Inland flatlands near coast
    mangrove: 0.06,           // Very common coastal biome
    salt_flats: 0.05,         // Coastal salt flats/dunes
  },
  ocean: {
    coastal: 0.45,            // Coastlines transitioning into open ocean
    coral_reef: 0.2,          // Coral reefs often fringe tropical ocean zones
    estuary: 0.1,             // Where rivers meet oceans, transitional brackish zones
    mangrove: 0.1,            // Tropical tidal forests lining warm ocean coasts
    ocean: 0.1,               // Expanses of deep or open sea
    coastal_desert: 0.05,     // Cold-current deserts like Namib/Atacama
  },
  coral_reef: {
    ocean: 0.35,              // Reefs develop along shallow tropical ocean shelves
    coastal: 0.3,             // Reefs often fringe island or continental coastlines
    coral_reef: 0.15,         // Contiguous reef systems (e.g. Great Barrier Reef)
    mangrove: 0.1,            // Mangroves and reefs often co-occur in tropical zones
    estuary: 0.1,             // Estuarine deltas near reefs, though with some sediment risk
  },
  estuary: {
    river: 0.25,              // Rivers terminate into estuaries
    coastal: 0.2,             // Estuaries open into coastal ocean
    marsh: 0.15,              // Estuaries surrounded by wetlands
    mangrove: 0.15,           // Common in tropical estuarine regions
    ocean: 0.1,               // Large estuaries merge with open sea
    lake: 0.05,               // Rare but possible in deltaic or backflow systems
    coral_reef: 0.05,         // Nearby in tropical regions, but sediment-sensitive
    estuary: 0.05,            // Multi-lobed or branching estuarine systems
  },
  mangrove: {
    coastal: 0.3,             // Most common - transitional land-sea interface
    estuary: 0.2,             // Brackish estuarine waters support mangrove roots
    marsh: 0.15,              // Inland side of mangrove zones, where freshwater mixes
    river: 0.1,               // Tidal reaches of rivers in the tropics
    coral_reef: 0.1,          // Warm tropical marine zones adjacent to mangroves
    mangrove: 0.1,            // Expanses of uninterrupted mangrove coastline
    ocean: 0.05,              // Directly bordering warm shallow oceanic waters
  },
  prairie: {
    temperate_forest: 0.25,   // Moisture transition into woodlands
    savanna: 0.2,             // Drier, warmer versions of grasslands
    steppe: 0.15,             // Drier, more arid cold-season grasslands
    marsh: 0.1,               // Low-lying areas within or near prairies
    river: 0.1,               // River valleys and floodplains through the prairie
    prairie: 0.1,             // Contiguous prairie stretches
    foothills: 0.1,           // Grasslands at the base of uplands/mountains
  },
  savanna: {
    rainforest: 0.2,          // Tropical moisture gradient toward forest
    steppe: 0.2,              // Drier transition toward semiarid zones
    prairie: 0.15,            // In subtropical temperate grassland overlaps
    semiarid_desert: 0.1,     // Gradual desertification in dry savannas
    marsh: 0.1,               // Seasonal wetlands within low-lying savannas
    river: 0.1,               // River basins cutting across savannas
    savanna: 0.1,             // Broad contiguous tropical grassland
    foothills: 0.05,          // Leading toward uplands or escarpments
  },
  steppe: {
    prairie: 0.25,            // Temperate grassland neighbor
    semiarid_desert: 0.2,     // Gradual dessication to arid conditions
    temperate_forest: 0.15,   // Moisture gradient to woodland
    coniferous_forest: 0.1,   // In colder regions (e.g., Mongolia, Siberia)
    foothills: 0.1,           // Rollings terrain adjacent to steppe plateaus
    river: 0.1,               // Waterways cut across steppes
    steppe: 0.1,              // Broad contiguous plains
  },
  rainforest: {
    savanna: 0.25,            // Dry-season woodland/grassy margin
    river: 0.2,               // Major river basins flow through rainforests
    marsh: 0.15,              // Swampy terrain in low-lying rainforest areas
    mangrove: 0.1,            // Tropical coastal forests often adjacent
    rainforest: 0.1,          // Continuous rainforest canopy
    foothills: 0.1,           // Leading to montane rainforests or escarpments
    estuary: 0.05,            // Deltas and rainforest-fringed coastlines
    lake: 0.05,               // Inland lakes within rainforest basins
  },
  temperate_forest: {
    prairie: 0.2,             // Moisture gradient from grassland to woodland
    coniferous_forest: 0.2,   // Cooler/mountainward forest transitions
    river: 0.15,              // Forest often follow watersheds
    marsh: 0.1,               // Lowland wetlands within or near forests
    lake: 0.1,                // Inland lakes surrounded by forest
    foothills: 0.1,           // Transitional uplands
    temperate_forest: 0.1,    // Continuous woodland
    steppe: 0.05,             // Drier temperate boundary (e.g., Eurasian steppe)
  },
  coniferous_forest: {
    temperate_forest: 0.25,   // Warmer transition towards deciduous woodland
    taiga: 0.2,               // Cooler/higher-latitude progressions
    foothills: 0.15,          // Found in montane environments
    river: 0.1,               // Watersheds through forested terrain
    lake: 0.1,                // Alpine or glacial lakes
    coniferous_forest: 0.1,   // Continuous forest stretches
    steppe: 0.05,             // Continental interior ecotone
    marsh: 0.05,              // Wet lowlands and bogs near forests
  },
  taiga: {
    coniferous_forest: 0.25,  // Warmer coniferous zones to the south
    arctic_tundra: 0.2,       // Northern boundary of the treeline
    foothills: 0.15,          // Subalpine or montane taiga
    river: 0.1,               // Glacial meltwater or boreal river systems
    lake: 0.1,                // Glacial lakes and kettle ponds
    marsh: 0.1,               // Boggy, saturated taiga regions
    taiga: 0.1,               // Continuous boreal forest
  },
  desert: {
    semiarid_desert: 0.3,     // Gradual moisture increase into marginal zones
    steppe: 0.2,              // Cold desert boundary in some interior regions
    savanna: 0.15,            // In places like the Sahel (Africa)
    foothills: 0.1,           // Upland transitions or rain-shadow zones
    salt_flats: 0.1,          // Evaporation basins with arid regions
    river: 0.05,              // Rare but critical (e.g., Nile, Colorado)
    dunes: 0.05,              // Sandy interior zones
    desert: 0.05,             // Expansive arid landscapes
  },
  semiarid_desert: {
    desert: 0.25,             // Dry core zones
    steppe: 0.25,             // Eurasian or interior North American fringe
    savanna: 0.15,            // Semi-dry transition (e.g., Sahel region)
    foothills: 0.1,           // Rain-shadow or escarpment transitions
    dunes: 0.05,              // Advancing sands or bordering dune seas
    salt_flats: 0.05,         // Basin floors within or near semiarid regions
    coniferous_forest: 0.05,  // Rare (e.g., dry, high-elevation valles in Rockies/Asia)
    semiarid_desert: 0.1,     // Continuity across wide plateaus
  },
  dunes: {
    desert: 0.3,              // Dry core zones - dunes often part of them
    semiarid_desert: 0.2,     // Expanding dune fronts into drier steppe/Sahel-type zones
    salt_flats: 0.15,         // Common in arid basins where sand meets evaporite plains
    foothills: 0.1,           // Basin edges, especially in mountain rain shadows
    dunes: 0.25,              // Continuous erg landscapes
  },
  coastal_desert: {
    ocean: 0.25,              // Fog-fed arid coastlines
    desert: 0.2,              // Interior arid continuation
    dunes: 0.15,              // Sand encroachment fromm inland or coastal winds
    salt_flats: 0.1,          // Common in coastal desert basins
    foothills: 0.1,           // Escarpments or rain shadows near the coast
    semiarid_desert: 0.1,     // Transitional interior zones
    coastal_desert: 0.1,      // Lateral continuity along arid coastlines
  },
  cold_desert: {
    steppe: 0.25,             // Cold grasslands at similar latitudes
    semiarid_desert: 0.2,     // Transitional low-moisture zones
    foothills: 0.15,          // Found in intermontane basins (e.g., Rockies, Asia)
    salt_flats: 0.1,          // Common in cold deser basins (e.g., Utah)
    taiga: 0.1,               // In high-latitude transitions (e.g., Mongolia-Siberia)
    alpine_tundra: 0.05,      // At elevation in mountain basins
    cold_desert: 0.15,        // Broad cold dry landscapes (e.g., Central Asia)
  },
  salt_flats: {
    desert: 0.25,             // Hot basin deserts (e.g., Mojave, Sahara margins)
    semiarid_desert: 0.2,     // Transitional zones with shallow basins
    cold_desert: 0.15,        // Interior salt pans in cold, dry regions
    dunes: 0.15,              // Sand encroachment into evaporite basins
    foothills: 0.1,           // Mountain runoff terminates in closed basins
    salt_flats: 0.15,         // Large contiguous salar or playa systems
  },
  arctic_tundra: {
    taiga: 0.3,               // Boreal forest to tundra treeline transition
    alpine_tundra: 0.2,       // Elevation-based tundra zones
    lake: 0.15,               // Common in permafrost regions (e.g., thermokarst lakes)
    river: 0.1,               // Meandering rivers in flat permafrost basins
    marsh: 0.1,               // Seasonally saturated tundra zones
    foothills: 0.05,          // Gentle elevation towards uplands or ridges
    arctic_tundra: 0.1,       // Expansive polar plains
  },
  alpine_tundra: {
    taiga: 0.25,              // Transition from subalpine forest
    coniferous_forest: 0.2,   // Mid-elevation zones
    foothills: 0.15,          // Lower mountain slopes
    peaks: 0.1,               // Craggy, snowbound summits above
    alpine_tundra: 0.1,       // Contiguous high-altitude plains
    river: 0.1,               // Glacial melt or alpine streams
    lake: 0.1,                // Mountain lakes or tarns
  },
  foothills: {
    coniferous_forest: 0.2,   // Commone in montane foothill belts
    temperate_forest: 0.15,   // Lower-elevation broadleaf zones
    steppe: 0.1,              // Drier continental fringes
    savanna: 0.1,             // In warmer or dier zones (e.g., East Africa)
    semiarid_desert: 0.1,     // Basin-and-range or continental interiors
    highlands: 0.1,           // Next step up in elevation
    river: 0.1,               // Water draining off slopes
    foothills: 0.1,           // Broad foothill bands
    alpine_tundra: 0.05,      // At upper treeliine or in colder zones
  },
  lowlands: {
    marsh: 0.2,               // Flood-prone low areas
    prairie: 0.15,            // Open lowland grasslands
    temperate_forest: 0.15,   // Forested flatlands
    river: 0.1,               // Rivers flow through low basins
    lake: 0.1,                // Common in low-lying terrains
    foothills: 0.1,           // Gradual incline toward uplands
    savanna: 0.1,             // Warm-climate lowlands
    lowlands: 0.1,            // Broad contiguous zones
  },
  highlands: {
    foothills: 0.25,          // Gradual rise from lower terrain
    peaks: 0.2,               // Steeper upper reaches
    coniferous_forest: 0.15,  // Common in mid-elevation slopes
    alpine_tundra: 0.15,      // High plateau or near-tree-line zones
    temperate_forest: 0.1,    // In milder or wetter climates
    river: 0.05,              // Mountain-fed streams and valleys
    highlands: 0.1,           // Broad elevated plateaus or ridges
  },
  peaks: {
    alpine_tundra: 0.3,       // Common transition just below the summit
    highlands: 0.25,          // Broader elevated terrain leading up to peaks
    foothills: 0.15,          // Steep but plausible transition in narrow ranges
    river: 0.1,               // Glacial melt sources and high mountain streams
    peaks: 0.2,               // Expansive ridgelines and summit zones
  },
};

export const regionSizes: Record<Environment, [number, number]> = {
  // Freshwater
  pond:               [0.1, 0.3],
  river:              [0.3, 0.8],
  lake:               [0.2, 0.5],
  marsh:              [0.3, 0.6],

  // Marine
  coastal:            [0.6, 1.2],
  ocean:              [1.5, 3.0],
  coral_reef:         [0.2, 0.5],
  estuary:            [0.4, 0.8],
  mangrove:           [0.3, 0.7],

  // Grasslands
  prairie:            [0.8, 1.6],
  savanna:            [0.7, 1.4],
  steppe:             [0.9, 1.8],

  // Forestss
  rainforest:         [0.8, 1.5],
  temperate_forest:   [0.6, 1.3],
  coniferous_forest:  [0.6, 1.2],
  taiga:              [0.5, 1.0],

  // Deserts
  desert:             [1.2, 2.5],
  semiarid_desert:    [1.0, 2.0],
  dunes:              [0.8, 1.8],
  coastal_desert:     [0.9, 1.7],
  cold_desert:        [1.0, 2.0],
  salt_flats:         [0.7, 1.4],
  
  // Tundra
  arctic_tundra:      [0.6, 1.2],
  alpine_tundra:      [0.5, 1.0],

  // Mountains
  foothills:          [0.4, 0.9],
  lowlands:           [0.6, 1.2],
  highlands:          [0.5, 1.1],
  peaks:              [0.3, 0.7]
};
