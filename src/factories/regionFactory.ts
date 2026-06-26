import { IEcology, IGeography, INaturalResources } from "interfaces";
import { Region } from "simulation";
import { ALL_ENVIRONMENTS, Environment } from "types";
import { generateGeoData, generateGeoDataFromScratch } from "factories";
import { regionAdjacencyBias, regionSizes } from "data/regionData";
import { pickByWeight, pickFromArray, randomInRange } from "utils/helpers";

/**
 * Plant a world's Cradle of Life: the unique, from-scratch seed Region every world
 * is grown outward from. Its Size is pinned at 1.00 by definition — the Cradle is the
 * literal anchor of the Size scale, so it is not subject to the per-Environment roll.
 */
export function createCradle(): Region {
  const environment: Environment = pickFromArray(ALL_ENVIRONMENTS);
  const geoData: IGeography = generateGeoDataFromScratch(environment);
  return new Region(Region.generateID(), environment, 1.0, geoData);
}

export function createRegion(origin?: Region) {
  const newEnvironment: Environment = origin 
    ? pickAdjacentEnvironment(origin.environment)
    : pickFromArray(ALL_ENVIRONMENTS);
  const newGeoData: IGeography = origin
    ? generateGeoData(origin, newEnvironment)
    : generateGeoDataFromScratch(newEnvironment);
  //const newEcoData: IEcology = generateEcoData(origin.ecology);
  //const newResourceData: INaturalResources = generateResourceData(origin.resources);
  //tweakEnvironment(newEnvironment);
  return new Region(
    Region.generateID(),
    newEnvironment,
    generateEnvironmentSize(newEnvironment),
    newGeoData
  );
}

function pickAdjacentEnvironment(origin: Environment): Environment {
  const options = regionAdjacencyBias[origin];
  if (!options || Object.keys(options).length === 0) {
    throw new Error(`No adjacency options defined for ${origin}`);
  }
  return pickByWeight(options, `${origin} adjacency`);
}

function generateEnvironmentSize(env: Environment): number {
  const [min, max] = regionSizes[env];
  return randomInRange(min,max);
}