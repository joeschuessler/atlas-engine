import { Time, World } from "simulation";
import * as fs from "fs";
import * as path from "path";

export class Atlas {
  worlds: Map<string, World>
  time: Time;

  constructor() {
    this.time = new Time();
    this.worlds = new Map<string, World>();
  }

  addWorld(name: string): void {
    this.worlds.get(name)
      ? console.log(`World ${name} already exists!`)
      : this.worlds.set(name, new World(name));
  }

  tick(): void {
    this.time.tick();
    for (const [,world] of this.worlds) {
      world.tick();
    }
  }

  toJSON() {
    return {
      time: this.time.toJSON(),
      worlds: [...this.worlds.values()].map(w => w.toJSON())
    };
  }

  static fromJSON(data: any): Atlas {
    const atlas = new Atlas();
    atlas.time = Time.fromJSON(data.time);
    atlas.worlds = data.worlds.map(World.fromJSON);
    return atlas;
  }

  saveToFile(filename: string) {
    const savepath = path.resolve(__dirname, '../../saves', filename);
    fs.writeFileSync(savepath, JSON.stringify(this.toJSON(), null, 2));
    console.log(`Saved to ${savepath}`);
  }
}