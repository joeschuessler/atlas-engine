import { Time, World } from "simulation";
import * as fs from "fs";
import * as path from "path";
import readline from "readline/promises";

/**
 * Atlas - Core simulation engine for the dynamic world generation and
 * tick-based updates. Acts as the primary runtime environment for sim
 * behavior.
 */
export class Atlas {
  worlds: Map<string, World>
  time: Time;
  shouldContinue: boolean = true;
  inputInterface: readline.Interface

  constructor() {
    this.time = new Time();
    this.worlds = new Map<string, World>();
    this.inputInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
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
    const savepath = path.resolve('saves', filename);
    fs.writeFileSync(savepath, JSON.stringify(this.toJSON(), null, 2));
    console.log(`Saved to ${savepath}`);
  }

  async run() {
    while (this.shouldContinue) {
      const input = await this.inputInterface.question("Press Enter to advance the world (or '?' for help): ");
      this.parseInput(input);
    }
  }

  parseInput(input: string) {
  const [cmd, ...args] = input.trim().split(/\s+/);
  console.log(`Cmd: ${cmd}, args: ${JSON.stringify(args)}`);

  switch(cmd) {
      case 'q':
      case 'quit':
      case 'exit':
        console.log('Exiting...');
        this.shouldContinue = false;
        break;
      case 'new':
        switch (args[0]) {
          case "world":
            args[1] 
              ? this.worlds.set(args[1], this.worlds.get(args[1]) ?? new World(args[1]))
              : console.log('Please specify a world name.');
            break;
          default:
            console.log("Please specify what you'd like to spawn.");
            break;
        }
        break;
      case 'r':
        if (this.worlds.get('test')) {
          const w = this.worlds.get('test');
          w?.addNewRegion()
        }
        break;
      case 's':
        this.saveToFile('manual.save');
        break;
      default:
        this.tick();
    }
  }
}