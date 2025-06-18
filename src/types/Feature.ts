import { CulturalFeature } from "./CulturalFeature";
import { GeologicalFeature } from "./GeologicalFeature";
import { HydrologicalFeature } from "./HydrologicalFeature";
import { SubterraneanFeature } from "./SubterraneanFeature";

export type Feature =
  | GeologicalFeature
  | SubterraneanFeature
  | CulturalFeature
  | HydrologicalFeature