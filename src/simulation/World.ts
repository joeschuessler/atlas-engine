import { createCradle, createRegion } from 'factories';
import { Region } from 'simulation';
import { pickFromArray } from 'utils/helpers';

export class World {
  private tickCount = 0;
  public regions: Set<Region>;
  public name: String;
  /** The world-unique Cradle of Life: the seed Region (Size 1.00) all growth traces back to. */
  public cradle?: Region;

  constructor(name: String) {
    this.name = name;
    this.regions = new Set<Region>();
  }

  public tick(): void {
    this.tickCount++;
  }

  /**
   * Plant the Cradle of Life — the world-unique origin Region (Size 1.00) that every
   * world is grown outward from. Idempotent: a world has exactly one Cradle.
   */
  public plantCradle(): Region {
    if (this.cradle) return this.cradle;
    const cradle = createCradle();
    this.cradle = cradle;
    this.regions.add(cradle);
    return cradle;
  }

  /**
   * Grow `count` new Regions outward from the existing graph. Each new Region is
   * generated adjacent to a randomly chosen existing Region (via weighted adjacency)
   * and connected to it, so the world stays a single contiguous graph rooted at the Cradle.
   */
  public grow(count = 1): Region[] {
    if (!this.cradle) this.plantCradle();
    const grown: Region[] = [];
    for (let i = 0; i < count; i++) {
      const origin = pickFromArray([...this.regions]);
      const region = createRegion(origin);
      origin.connect(region);
      this.regions.add(region);
      grown.push(region);
    }
    return grown;
  }

  public getRegion(id: number): Region | undefined {
    for (const region of this.regions) {
      if (region.id === id) return region;
    }
    return undefined;
  }

  public toJSON() {
    return {
      name: this.name,
      cradleId: this.cradle?.id ?? null,
      regions: Array.from(this.regions).map(r => r.toJSON())
    };
  }

  static fromJSON(data: any): World {
    const world = new World(data.name);
    const regions: Region[] = data.regions.map((regionData: any) => Region.fromJSON(regionData));
    world.regions = new Set(regions);

    // Relink the adjacency graph: regions deserialize with only `neighborIDs` staged,
    // so reconnect each to its neighbors now that every Region object exists.
    const byId = new Map<number, Region>(regions.map(r => [r.id, r]));
    for (const region of regions) {
      for (const neighborId of region.neighborIDs) {
        const neighbor = byId.get(neighborId);
        if (neighbor) region.connect(neighbor); // connect() is bidirectional + Set-backed, so idempotent
      }
    }

    world.cradle = byId.get(data.cradleId);
    return world;
  }
}
