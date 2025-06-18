export interface IFlora {
  trees: number[],      // Canopy coverage or density, timber
  shrubs: number[],     // Fruiting/woody bushes
  herbs: number[],      // Small vegetation, useful to denizens
  grasses: number[],    // Grasses small vegetation, useful for livestock
  fungi: number[],      // Decomposers
  crops: number[],      // Agriculture-ready potential
  aquatic: number[],    // River/lake/sea plant life
  exotic: number[]      // Rare or unusual flora
}