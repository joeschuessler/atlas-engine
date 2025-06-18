import { Biome, Environment } from "types";

export function pickFromArray<T>(arr: T[]): T
{
  return arr[Math.floor(Math.random() * arr.length)];
}

export function pickByWeight<T extends string>(
  weights: Partial<Record<T, number>>,
  label?: string
): T {
  const options = Object.entries(weights) as [T, number][];

  //Shuffle for fairness among equal-weight options
  options.sort(() => Math.random() - 0.5);

  const weightSum = options.reduce((sum, [,w]) => sum + w, 0);
  const roll = Math.random() * weightSum;

  let cumulative = 0;
  for (const [key, weight] of options) {
    cumulative += weight;
    if (roll <= cumulative) return key;
  }

  throw new Error(`pickWeighted${label ? ` [${label}]` : ''}: failed with weights: ${JSON.stringify(weights)}`);
}

export function randomInRange(min: number, max: number): number {
  return ((max - min) * Math.random()) + min;
}