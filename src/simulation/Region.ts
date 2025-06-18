import { generateGeoDataFromScratch } from "factories";
import { IEcology, IGeography, INaturalResources } from "interfaces";
import { ALL_ENVIRONMENTS, Environment } from "types";

export class Region {
  private static usedIDs: Set<number> = new Set();
  
  public id: number;
  public environment: Environment;
  public size: number; //relative to Cradle at 1.00
  public neighbors: Set<Region> = new Set();
  public neighborIDs: number[] = [];
  public name?: string;
  public geography: IGeography;
  //public ecology: IEcology;
  //public resources: INaturalResources;
  discoveredBy: Set<string> = new Set(); // settlement IDs, persons, cultures, factions, etc

  constructor(
    id: number, 
    environment: Environment,
    size: number, 
    geoData: IGeography,
    //ecoData?: IEcology,
    //resourceData?: INaturalResources
    name?: string,
  ) {
    this.environment = environment;
    this.size = size;
    this.id = id ?? Region.generateID();
    this.name = name;
    this.geography = geoData ?? generateGeoDataFromScratch(environment);
    //this.ecology = ecoData ?? generateEcoDataFromScratch(environment);
    //this.resources = resourceData ?? generateResourcesFromScratch(environment);
  }

  static generateID(): number {
    for (let i = 1; i <= 999999; i++) {
      if (!Region.usedIDs.has(i)) return i;
    }
    throw new Error("Cannot initialize new Region. No IDs left in pool!");
  }
  
  public connect(region: Region) {
    this.neighbors.add(region);
    region.neighbors.add(this);
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      size: this.size,
      environment: this.environment,
      geography: this.geography,
      neighborIDs: [...this.neighbors].map(n => n.id)
    };
  }

  static fromJSON(regionData: any): Region {
    const region = new Region(
      regionData.id,
      regionData.environment,
      regionData.size,
      regionData.geography,
      regionData.name,
      // ecology,
      // resources,
    );
    region.neighborIDs = regionData.neighborIDs ?? [];
    return region;
  }

  static validateRegionData(regionData: any): regionData is Region {
    if (typeof regionData !== "object" || regionData === null) return false;

    if (typeof regionData.environment !== "string") return false;
    if (!ALL_ENVIRONMENTS.includes(regionData.environment)) return false;

    if (typeof regionData.size !== "number" || regionData.size <= 0) return false;
    if (typeof regionData.name !== "undefined" && typeof regionData.name !== "string") return false;

    if (typeof regionData.geography !== "object" || regionData.geography === null) return false;

    return true;
  }
}

