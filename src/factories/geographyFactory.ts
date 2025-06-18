import { IGeography } from "interfaces";
import { Region } from "simulation";
import { geographyBias } from 'data/geographyData'
import { pickByWeight, pickFromArray, randomInRange } from "utils/helpers";
import { Environment, Feature, WaterAccess } from "types";
import { ALL_WATERACCESS, waterAccessBias } from "data/waterAccessData";

export function generateGeoData(origin: Region, environment: Environment): IGeography {
  const envProfile = geographyBias[environment];

  const elevation = mutateWithBias(
    origin.geography.elevation,         // Elevation can change dramatically
    envProfile.elevation,               // but should still vary smoothly;
    -0.15, 0.15                         // 15% change per region transition
  );

  const rainfall = mutateWithBias(
    origin.geography.rainfall,          // Local variation in water retention
    envProfile.rainfall,                // and terrain; modulated by rain
    -0.15, 0.15                         // and clouds.
  );

  const moisture = mutateWithBias(
    origin.geography.moisture,          // Storm paths and elevations cause
    envProfile.moisture,                // bigger shifts in rainfall zone-
    -0.1, 0.1                           // by-zone.
  );

  const latitude = mutateLatitude(
    origin.geography.latitude,
    environment
  );

  const temperature = mutateWithBias(
    origin.geography.temperature,       // Temperature changes more gradually,
    envProfile.temperature,             // especially with latitude as an
    -0.05, 0.05                         // external factor.
  );

  const fertility = mutateWithBias(
    origin.geography.fertility,     // Fertility is moderately dynamic
    envProfile.fertility,               // tied to terrain, water, and decay
    -0.1, 0.1                           // cycles.
  );

  const exposure = mutateWithBias(
    origin.geography.exposure,          // Amount of sun, wind or openness;
    envProfile.exposure,                // varies with terrain and 
    -0.1, 0.1                           // vegetation density.
  );

  const volatility = mutateWithBias(
    origin.geography.volatility,        // Natural hazards, tectonics,
    envProfile.volatility,              // instability; can spike but
    -0.05, 0.1,                         // often stays stable.
  );

  const waterAccess = pickWaterAccess(environment, origin.geography);

  return {
    elevation,
    rainfall,
    moisture,
    latitude,
    temperature,
    fertility,
    exposure,
    volatility,
    waterAccess,
    features: [] as Feature[]
  };
}

export function generateGeoDataFromScratch(environment: Environment): IGeography {
  const profile = geographyBias[environment]
  return {
    elevation: randomInRange(profile.elevation[0], profile.elevation[1]),
    rainfall: randomInRange(profile.rainfall[0], profile.rainfall[1]),
    moisture: randomInRange(profile.moisture[0], profile.moisture[1]),
    temperature: randomInRange(profile.temperature[0], profile.temperature[1]),
    fertility: randomInRange(profile.fertility[0], profile.fertility[1]),
    volatility: randomInRange(profile.volatility[0], profile.volatility[1]),
    exposure: randomInRange(profile.exposure[0], profile.exposure[1]),
    latitude: randomInRange(profile.latitude[0], profile.latitude[1]),
    waterAccess: pickWaterAccess(environment),
    features: [] as Feature[]
  }
}

function mutateWithBias(
  base: number,
  targetRange: [number, number] | undefined,
  deltaMin: number,
  deltaMax: number
): number {
  // Randomized local drift
  let delta = randomInRange(deltaMin, deltaMax);

  let value = base + delta;

  if (targetRange) {
    const [minTarget, maxTarget] = targetRange;
    const midpoint = (minTarget + maxTarget) / 2;
    value += (midpoint - base) * 0.25 // gentle drift toward environment profile
  }

  return Math.min(1, Math.max(0, value));
}

function mutateLatitude(
  originalLatitude: number,
  targetEnvironment: Environment
): number {
  const originLatAbs = Math.abs(originalLatitude);
  let hemisphere = Math.sign(originalLatitude) || 1;
  
  const range = geographyBias[targetEnvironment]?.latitude;
  if (!range) throw new Error(`No latitude range defined for ${targetEnvironment}`);

  const [minLatitude, maxLatitude] = range;
  const clampedOrigin = Math.max(minLatitude, Math.min(originLatAbs, maxLatitude));
  const latitudeSample = randomInRange(minLatitude, maxLatitude);
  
  const originBias = 0.65; // Tune this up to make stronger
  const biasedSample = (clampedOrigin * originBias) + (latitudeSample * (1 - originBias));

  if (originLatAbs <= 0.2 && Math.random() < 0.1) hemisphere *= -1;
  
  return biasedSample * hemisphere;
}

function pickWaterAccess(environment: Environment, origin?:IGeography, ): WaterAccess {
  let newAccess: WaterAccess = 'none';
  switch (environment) {
    case "pond":
        newAccess = 'standing';
        break;
    case "river":
        newAccess = 'surface';
        break;
    case "lake":
        newAccess = 'standing';
        break;
    case "marsh":
        newAccess = 'saturated';
        break;
    case "coastal":
    case "ocean":
    case "coral_reef":
    case "estuary":
      newAccess = 'saline';
      break;
    case "mangrove":
      newAccess = 'saturated';
      break;
    default:
      newAccess = origin 
          ? pickByWeight(waterAccessBias[origin.waterAccess])
          : pickByWeight(waterAccessBias[pickFromArray(ALL_WATERACCESS)]); //Weighted choice based on random 'origin,' when actual origin not specified
  }
  return newAccess;
};