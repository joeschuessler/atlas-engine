import { Feature, WaterAccess } from "types";

export interface IGeography {
  elevation: number;
  rainfall: number;
  moisture: number;
  waterAccess: WaterAccess;
  latitude: number;
  temperature: number;
  fertility: number;
  volatility: number;
  exposure: number;
  features: Feature[];
}