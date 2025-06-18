import { IEnvironmentProfile } from "interfaces";
import { Environment } from "types";

export const geographyBias: Record<Environment, IEnvironmentProfile> = {
  
  // Freshwater
  pond: {
    elevation: [0.0, 0.3],      // Generally lowland features
    rainfall: [0.3, 0.6],       // Ponds form in areas with some water input, but not always heavy rainfall
    moisture: [0.7, 1.0],       // Small water body; highly saturated local zone
    temperature: [0.4, 0.7],    // Commonly temperate to warm zones
    fertility: [0.6, 0.9],      // Nutrient-rich due to stagnation and sediment
    volatility: [0.1, 0.4],     // Calm, but affected by runoff or drought
    exposure: [0.1, 0.4],       // Typically sheltered or shallow
    latitude: [0.1, 0.9]        // Found nearly everywhere except the driest/arctic extremes
  },

  river: {
    elevation: [0.0, 0.5],      // Can span lowland to foothill zones
    rainfall: [0.4,0.8],        // Moderate to high rainfall to sustain flow
    moisture: [0.5, 0.9],       // Moderate to high along banks
    temperature: [0.3, 0.7],    // Climat-dependant, usually moderate
    fertility: [0.5, 0.8],      // Supports floodplains, especially downstream
    volatility: [0.3, 0.6],     // Seasonal floods, flow variation
    exposure: [0.2, 0.6],       // Variable with river width and terrain
    latitude: [0.1, 0.9]        // Also widespread, driven more by elevation and rainfall
  },

  lake: {
    elevation: [0.0, 0.6],      // Common in mid- to low-elevation basins
    rainfall: [0.3, 0.7],       // Required, but often accumulative rather than steady
    moisture: [0.6, 1.0],       // Standing freshwater source
    temperature: [0.2, 0.7],    // Usually cooler due to deeper mass
    fertility: [0.4, 0.6],      // May support agriculture or diverse wetlands
    volatility: [0.2, 0.5],     // Stable but can flood
    exposure: [0.3, 0.6],       // Often open-sky, less sheltered than ponds
    latitude: [0.1, 0.9]        // Also widely found
  },

  marsh: {
    elevation: [0.0, 0.2],      // Extremely low elevation; often saturated ground
    rainfall: [0.6, 1.0],       // High rainfall needed to sustain saturation
    moisture: [0.9, 1.0],       // Saturated ground, partially submerged year-round
    temperature: [0.2, 0.7],    // Usually cooler due to deeper mass
    fertility: [0.7, 1.0],      // Highly fertile from organic decomposition
    volatility: [0.3, 0.7],     // Stable but can flood
    exposure: [0.2, 0.5],       // Vegetation provides some shelter
    latitude: [0.2, 0.8]        // Less common near poles or deserts
  },

  // Marine
  coastal: {
    elevation: [0.0, 0.1],        // Edge of land and sea
    rainfall: [0.3, 0.8],         // Driven by ocean evaporation and weather patterns
    moisture: [0.5, 0.9],         // High ambient humidity
    temperature: [0.3, 0.8],      // Varies from cold coastlines to tropical beaches
    fertility: [0.4, 0.7],        // Moderately fertile due to seaweed, kelp, and detritus
    volatility: [0.4, 0.8],       // Storms, tides, erosion
    exposure: [0.6, 1.0],         // Wind and salt exposure are high
    latitude: [0.0, 1.0]          // Border regions across all latitudes
  },

  estuary: {
    elevation: [0.0, 0.2],        // Near sea level; tidal influence
    rainfall: [0.4, 0.9],         // Higher rainfall supports river + tidal mixing
    moisture: [0.7, 1.0],         // Very humid and water-rich zone
    temperature: [0.4, 0.8],      // Moderately warm to hot zones
    fertility: [0.6, 0.9],        // Exceptionally fertile silt from river deposits
    volatility: [0.4, 0.7],       // Tidal mixing zones
    exposure: [0.4, 0.7],         // Partial shelter from terrain or vegetation
    latitude: [0.1, 0.7]          // Where rivers meet coasts; less common near poles
  },

  mangrove: {
    elevation: [0.0, 0.1],        // Intertidal zone, slightly above sea level
    rainfall: [0.6, 1.0],         // Requires tropical rainfall to thrive
    moisture: [0.9, 1.0],         // Saturated ground, often submerged roots
    temperature: [0.7, 1.0],      // Exclusively tropical/tide-dominant zones
    fertility: [0.5, 0.8],        // Organic but sometimes saline soil
    volatility: [0.3, 0.6],       // Buffered from extremes, but seasonal
    exposure: [0.2, 0.6],         // Canopy protection from mangrove thickets
    latitude: [0.0, 0.3]          // Tropics only, sensitive to cold
  },

  ocean: {
    elevation: [0.0, 0.0],
    rainfall: [0.3, 0.8],         // Influences nearby coastal/marine systems
    moisture: [1.0, 1.0],
    temperature: [0.2, 0.8],      // Varies from cold to tropical currents
    fertility: [0.0, 0.0],        
    volatility: [0.6, 1.0],       // Storm-prone, wave activity
    exposure: [1.0, 1.0],
    latitude: [0.0, 1.0]          // Exists at all latitudes
  },

  coral_reef: {
    elevation: [0.0, 0.0],
    rainfall: [0.5, 0.9],         // Warm humid maritime zones
    moisture: [1.0, 1.0],
    temperature: [0.7, 1.0],      // Strictly warm waters
    fertility: [0.0, 0.0],
    volatility: [0.3, 0.6],       // Moderate, sheltered by landmasses
    exposure: [1.0, 1.0],
    latitude: [0.3, 0.6]          // Mostly tropical/subtropical
  },

  // Grasslands - favors large herds, agricultural potential, seasonal behaviors
  prairie: {
    elevation: [0.2, 0.6],        // Rolling low hills to midlands
    rainfall: [0.4, 0.7],         // Regular but moderate precipitation
    moisture: [0.3, 0.6],         // Not saturated, but supports tall grasses
    temperature: [0.4, 0.7],      // Temperate to warm
    fertility: [0.5, 0.8],        // Rich, deep soils in many real-world analogs
    volatility: [0.2, 0.5],       // Droughts and lightning fires
    exposure: [0.5, 0.9],         // Open sky, minimal tree cover
    latitude: [0.3, 0.7],         // Classic temperate zone
  },

  savanna: {
    elevation: [0.2, 0.5],        // Typically lowland or gentle plains
    rainfall: [0.2, 0.6],         // Seasonal — wet and dry periods
    moisture: [0.2, 0.5],         // Dry most of the year, but not arid
    temperature: [0.6, 0.9],      // Warm to hot, rarely cold
    fertility: [0.3, 0.7],        // Moderately fertile; can support grazing and sparse trees
    volatility: [0.3, 0.6],       // Seasonal wet/dry swings
    exposure: [0.6, 1.0],         // Very exposed; scattered shade
    latitude: [0.1, 0.4]          // Tropical/seasonal dry season
  },

  steppe: {
    elevation: [0.3, 0.7],        // Often higher than prairies; foothill adjacency common
    rainfall: [0.2, 0.5],         // Low rainfall overall
    moisture: [0.2, 0.4],         // Drier than prairies; shorter grasses
    temperature: [0.3, 0.7],      // Cold winters, warm summers — high range
    fertility: [0.3, 0.6],        // Thin soils but usable in patches
    volatility: [0.2, 0.5],       // Wind and temperature flux
    exposure: [0.6, 1.0],         // Windswept, open land
    latitude: [0.4, 0.8]          // Colder, semi-arid grasslands
  },

  // Forests - Diverse flora tiers, herbivores vs large predators, resources like timer, herbs, game
  rainforest: {
    elevation: [0.1, 0.5],        // Generally low to mid-elevation; valleys and basins
    rainfall: [0.8, 1.0],         // Extremely high precipitation year-round
    moisture: [0.8, 1.0],         // Saturated air and soil
    temperature: [0.7, 1.0],      // Hot and humid — equatorial zones
    fertility: [0.7, 1.0],        // Nutrient cycling is rapid, but soil can be shallow
    volatility: [0.2, 0.4],       // Dense canopy buffers weather
    exposure: [0.2, 0.5],         // Dense canopy shields ground layer
    latitude: [0.0, 0.2]          // Equatorial
  },

  temperate_forest: {
    elevation: [0.2, 0.6],        // Rolling hills or sheltered valleys
    rainfall: [0.5, 0.8],         // Steady rainfall across seasons
    moisture: [0.4, 0.7],         // Moderately wet environment
    temperature: [0.4, 0.7],      // Moderate seasonal variation
    fertility: [0.5, 0.8],        // Well-balanced soils with annual leaf decay
    volatility: [0.2, 0.5],       // Storms and seasons
    exposure: [0.3, 0.6],         // Broken canopy, but with tree shelter
    latitude: [0.3, 0.6]          // Broad temperate band
  },

  coniferous_forest: {
    elevation: [0.4, 0.8],        // Often on slopes or at higher latitudes
    rainfall: [0.3, 0.6],         // Cooler regions with less intense rain
    moisture: [0.3, 0.6],         // Damp but not soaked
    temperature: [0.3, 0.6],      // Cool summers, cold winters
    fertility: [0.3, 0.6],        // Acidic needle-drop slows decomposition
    volatility: [0.2, 0.6],       // Ice storms, wind
    exposure: [0.4, 0.7],         // Narrow tree shapes still allow some sun and wind
    latitude: [0.5, 0.8]          // Colder temperate to boreal
  },

  taiga: {
    elevation: [0.4, 0.9],        // Northern uplands or boreal zones
    rainfall: [0.2, 0.5],         // Sparse rainfall, more snow cover
    moisture: [0.2, 0.5],         // Cold limits liquid moisture
    temperature: [0.1, 0.4],      // Very cold overall
    fertility: [0.2, 0.5],        // Permafrost or acidic soils restrict productivity
    volatility: [0.3, 0.7],       // Harsh winters, freeze-thaw
    exposure: [0.4, 0.8],         // Windy and exposed in winter
    latitude: [0.7, 0.95]         // Subarctic belt
  },

  // Desert
  desert: {
    elevation: [0.2, 0.7],        // Often in basins or between mountain ranges
    rainfall: [0.0, 0.2],         // Near-zero rainfall
    moisture: [0.0, 0.2],         // Extremely dry air and soil
    temperature: [0.7, 1.0],      // Hot and unforgiving — classic desert
    fertility: [0.0, 0.3],        // Nutrient-poor, barren soil
    volatility: [0.3, 0.6],       // Sandstorms, flash floods
    exposure: [0.7, 1.0],         // Harsh sun and open winds
    latitude: [0.1, 0.4]          // Classic Hadley cell tropics
  },

  semiarid_desert: {
    elevation: [0.3, 0.7],        // Slightly higher elevation or transitional land
    rainfall: [0.1, 0.3],         // Occasional rains; supports scrub
    moisture: [0.1, 0.3],         // Still dry but not bone-dry
    temperature: [0.5, 0.8],      // Warm to hot, but less extreme
    fertility: [0.2, 0.5],        // Can support hardy grasses, some crops with effort
    volatility: [0.2, 0.5],
    exposure: [0.6, 0.9],         // Hot days, windy plains
    latitude: [0.2, 0.5]          // Transition zones
  },

  dunes: {
    elevation: [0.1, 0.6],        // Wind-driven formations; elevation varies
    rainfall: [0.0, 0.1],         // Practically none
    moisture: [0.0, 0.1],         // Bone-dry surface and air
    temperature: [0.6, 1.0],      // Baking by day, possibly freezing at night
    fertility: [0.0, 0.1],        // Inert sand; can't hold nutrients
    volatility: [0.3, 0.7],       // Shifting terrain
    exposure: [0.9, 1.0],         // Absolute exposure to sun, wind, and storms
    latitude: [0.1, 0.4]          // Mostly tropical
  },

  coastal_desert: {
    elevation: [0.0, 0.2],        // Often at or near sea level
    rainfall: [0.0, 0.2],         // Dry air despite ocean proximity
    moisture: [0.0, 0.3],         // Occasional fog or dew, but very little rain
    temperature: [0.4, 0.8],      // Moderated somewhat by ocean currents
    fertility: [0.1, 0.4],        // Possible algae or detritus inputs
    volatility: [0.2, 0.5],       // Marine weather influence
    exposure: [0.8, 1.0],         // Bright sun and salt-laden winds
    latitude: [0.1, 0.4]          // Peru, Namibia-like regions
  },

  cold_desert: {
    elevation: [0.4, 0.9],        // High-elevation plateaus or rain-shadow regions
    rainfall: [0.0, 0.2],         // Very little precipitation, mostly snow
    moisture: [0.0, 0.3],         // Frozen moisture, not accessible to most life
    temperature: [0.0, 0.4],      // Cold to bitter cold year-round
    fertility: [0.1, 0.4],        // Thin, rocky, or permafrost-locked
    volatility: [0.3, 0.6],       // Harsh winds, snowstorms
    exposure: [0.6, 0.9],         // Wind-chill and UV exposure
    latitude: [0.6, 0.9]          // Found in cold rain shadows or near poles
  },

  salt_flats: {
    elevation: [0.0, 0.2],        // Ancient lakebeds or mineral basins
    rainfall: [0.0, 0.1],         // No active rain cycle
    moisture: [0.0, 0.2],         // May retain water seasonally, but then dry fast
    temperature: [0.5, 0.9],      // Typically hot, though not always extreme
    fertility: [0.0, 0.1],        // Toxic or inert; no viable growth
    volatility: [0.1, 0.4],       // Minimal fluctuation
    exposure: [0.9, 1.0],         // Reflective and blinding under full sun
    latitude: [0.1, 0.5]          // Often remnant lakebeds in hot zones
  },

  // Tundra - low-lying flora like moss, lichen and hardy herbs, nomadic or migratory fauna, and harsh conditions
  arctic_tundra: {
    elevation: [0.0, 0.3],        // Typically low-lying terrain in polar regions
    rainfall: [0.1, 0.3],         // Very little precipitation; mostly snow
    moisture: [0.2, 0.5],         // Surface stays moist due to permafrost preventing drainage
    temperature: [0.0, 0.2],      // Permanently cold; long winters, short thaw
    fertility: [0.2, 0.5],        // Thin soils with slow decay cycles
    volatility: [0.4, 0.8],       // Permafrost cycles, storms
    exposure: [0.7, 1.0],         // Wind-swept and open; no shelter from trees
    latitude: [0.85, 1.0]         // Far polar regionss only
  },

  alpine_tundra: {
    elevation: [0.7, 1.0],        // High mountain plateaus above the tree line
    rainfall: [0.2, 0.5],         // More precipitation than arctic, often as snow
    moisture: [0.2, 0.4],         // Snowmelt provides seasonal moisture
    temperature: [0.1, 0.3],      // Cold overall, but more seasonal variation than arctic
    fertility: [0.1, 0.4],        // Rocky and thin soil; high erosion, low nutrient retention
    volatility: [0.3, 0.7],       // High-elevation exposure
    exposure: [0.8, 1.0],         // Extreme wind and sun exposure
    latitude: [0.3, 1.0]          // Altitude, not latitude: possible anywhere, but more common farther from equator
  },

  // Mountains - elevation-driven biomes with strong gradients in fertility, temps, and volatility
  foothills: {
    elevation: [0.4, 0.6],        // Transitional slope between lowland and upland
    rainfall: [0.3, 0.7],         // Rainfall varies depending on nearby features
    moisture: [0.3, 0.6],         // Often decent — runoff and drainage from above
    temperature: [0.3, 0.6],      // Cool to temperate depending on latitude
    fertility: [0.4, 0.7],        // Productive, but with slope and erosion factors
    volatility: [0.3, 0.6],       // Unstable slopes, wind
    exposure: [0.4, 0.7],         // Some tree cover, but not total protection
    latitude: [0.1, 0.9]          // Common at all latitudes
  },

  lowlands: {
    elevation: [0.0, 0.3],        // River valleys, plains, or basins
    rainfall: [0.4, 0.8],         // Tends to collect water from higher elevations
    moisture: [0.4, 0.8],         // High relative to surrounding areas
    temperature: [0.4, 0.7],      // Warm to temperate
    fertility: [0.6, 0.9],        // Among the most fertile regions — farming heartland
    volatility: [0.2, 0.5],       // Flood risk
    exposure: [0.3, 0.6],         // Moderately sheltered by vegetation or terrain
    latitude: [0.1, 0.9]          // Broadly distributed
  },

  highlands: {
    elevation: [0.6, 0.8],        // Broad elevated regions — plateaus or old ranges
    rainfall: [0.3, 0.6],         // Intermittent rain, depending on prevailing winds
    moisture: [0.2, 0.5],         // Drier than lowlands, but not barren
    fertility: [0.3, 0.6],        // Rocky, shallow soils — partial productivity
    exposure: [0.5, 0.9],         // Wind and sun exposure increase with height
    temperature: [0.2, 0.5],      // Cold to cool, with possible seasonal bursts
    volatility: [0.3, 0.6],       // Uplift zones, old fault lines, or past volcanism
    latitude: [0.2, 0.9]          // Slight equatorial underrepresentation
  },

  peaks: {
    elevation: [0.9, 1.0],        // Highest range — summits, spires, ridgelines
    rainfall: [0.1, 0.4],         // Most falls as snow or is blocked by nearby ranges
    moisture: [0.1, 0.3],         // Thin air and runoff prevent accumulation
    fertility: [0.0, 0.2],        // Barren stone, ice, and scree — no real growth
    exposure: [0.9, 1.0],         // Absolute exposure to sun, snow, and storms
    temperature: [0.0, 0.2],      // Frigid — near or below freezing year-round
    volatility: [0.4, 0.8],       // Often unstable due to tectonics or erosion
    latitude: [0.5, 1.0]          // Highlest elevations, found everywhere but polar peaks are rare
  },
}