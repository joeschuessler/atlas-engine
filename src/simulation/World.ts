import { createRegion } from 'factories';
import { Region, Time } from 'simulation';

export class World {
  private tickCount = 0;
  public regions: Set<Region>;
  public name: String;

  constructor(name: String) {
    this.name = name;
    this.regions = new Set<Region>;
    console.log(`World created: ${JSON.stringify(this.toJSON(),null,2)}`);
  }

  public tick(): void {
    this.tickCount++;
    console.log(`World [${this.name}]:🌍 Tick ${this.tickCount}`);
  }

  public addNewRegion(origin?: Region, baseSize = 1.0): void {
    const r = createRegion(origin);
    this.regions.add(r);
    console.log(`Created ${r.environment} region ${this.name}.${r.id}`);
  }

  public toJSON() {
    return { 
      name: this.name,
      regions: Array.from(this.regions).map(r => r.toJSON())
    };
  }

  static fromJSON(data: any): World {
    const world = new World(data.name);
    world.regions = new Set(
      data.regions.map((regionData: any) => Region.fromJSON(regionData))
    );
    return world;
  }
}