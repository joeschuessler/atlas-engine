export interface IFauna {
  // future state: { density, quantity }

  huntable: number,   // Wild game suitable for food or resources
  predators: number,  // Carnivorous fauna that hunt others; regulate populations
  aquatic: number,    // Fish and other water-dwelling creatures
  domestic: number,   // Animals commonly raised or kept by intelligent species
  vermin: number,     // Nuisance species that spread disease or damage supplies
  burden: number,     // Pack and draft animals used for labor or transport
  foragers: number,   // Small omnivores or herbivores that subsist on varied local flora
  exotic: number,     // Uncommon or non-native fauna with unique traits or value
  insect: number,     // Invertebrates from pollinators to pests
  avian: number,      // Bird populations, from game fowl to migratory species
  mythic: number,     // Legendary, magical or supernatural beasts
}