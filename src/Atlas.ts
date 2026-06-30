import { Region, Time, World } from "simulation";
import { resolveSeed } from "utils/rng";
import * as fs from "fs";
import * as path from "path";
import readline from "readline/promises";

/**
 * Atlas - Core simulation engine for the dynamic world generation and
 * tick-based updates. Acts as the primary runtime environment for sim
 * behavior and hosts the interactive command loop.
 */
export class Atlas {
  worlds: Map<string, World>;
  time: Time;
  shouldContinue: boolean = true;
  inputInterface: readline.Interface;
  private activeWorldName?: string;

  constructor() {
    this.time = new Time();
    this.worlds = new Map<string, World>();
    this.inputInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  tick(): void {
    this.time.tick();
    for (const [, world] of this.worlds) {
      world.tick();
    }
  }

  toJSON() {
    return {
      time: this.time.toJSON(),
      worlds: [...this.worlds.values()].map(w => w.toJSON())
    };
  }

  private static worldsFromJSON(data: any): Map<string, World> {
    const worlds = new Map<string, World>();
    for (const worldData of data.worlds) {
      const world = World.fromJSON(worldData);
      worlds.set(String(world.name), world);
    }
    return worlds;
  }

  static fromJSON(data: any): Atlas {
    const atlas = new Atlas();
    atlas.time = Time.fromJSON(data.time);
    atlas.worlds = Atlas.worldsFromJSON(data);
    return atlas;
  }

  saveToFile(filename: string) {
    const dir = path.resolve('saves');
    fs.mkdirSync(dir, { recursive: true });
    const savepath = path.join(dir, filename);
    fs.writeFileSync(savepath, JSON.stringify(this.toJSON(), null, 2));
    console.log(`Saved to ${savepath}`);
  }

  /** Load Atlas state from saves/<filename> in place, replacing the current worlds & time. */
  loadFromFile(filename: string) {
    const savepath = path.join(path.resolve('saves'), filename);
    if (!fs.existsSync(savepath)) { console.log(`No save found at ${savepath}`); return; }
    const raw = JSON.parse(fs.readFileSync(savepath, 'utf-8'));
    this.time = Time.fromJSON(raw.time);
    this.worlds = Atlas.worldsFromJSON(raw);
    this.activeWorldName = [...this.worlds.keys()][0];
    console.log(
      `Loaded ${this.worlds.size} world(s) from ${savepath}.` +
      (this.activeWorldName ? ` Active: '${this.activeWorldName}'.` : '')
    );
  }

  async run(): Promise<void> {
    this.printHelp();
    this.inputInterface.setPrompt('atlas> ');
    this.inputInterface.prompt();
    await new Promise<void>((resolve) => {
      this.inputInterface.on('line', (line) => {
        this.parseInput(line);
        if (this.shouldContinue) this.inputInterface.prompt();
        else this.inputInterface.close();
      });
      this.inputInterface.once('close', () => resolve());
    });
  }

  parseInput(input: string) {
    const [cmd, ...args] = input.trim().split(/\s+/);

    switch (cmd) {
      case '':
        // Bare Enter advances time one tick.
        this.tick();
        console.log(`⏱  Tick ${this.time.currentTick}`);
        break;

      case '?':
      case 'help':
        this.printHelp();
        break;

      case 'q':
      case 'quit':
      case 'exit':
        console.log('Exiting...');
        this.shouldContinue = false;
        break;

      case 'new':
        if (args[0] === 'world') {
          const name = args[1];
          if (!name) { console.log('Usage: new world <name> [seed]'); break; }
          if (this.worlds.has(name)) {
            this.activeWorldName = name;
            console.log(`World '${name}' already exists — now active.`);
            break;
          }
          const seed = args[2] !== undefined ? resolveSeed(args[2]) : undefined;
          const world = new World(name, seed);
          this.worlds.set(name, world);
          this.activeWorldName = name;
          console.log(`Created world '${name}' (seed ${world.seed}, now active).`);
        } else {
          console.log("Usage: new world <name> [seed]");
        }
        break;

      case 'use':
        if (!args[0]) { console.log('Usage: use <world>'); break; }
        if (!this.worlds.has(args[0])) { console.log(`No world named '${args[0]}'.`); break; }
        this.activeWorldName = args[0];
        console.log(`Active world: ${args[0]}`);
        break;

      case 'worlds':
        if (this.worlds.size === 0) { console.log('No worlds yet. Try: new world <name>'); break; }
        for (const [name, w] of this.worlds) {
          const marker = name === this.activeWorldName ? '*' : ' ';
          console.log(` ${marker} ${name} — ${w.regions.size} region(s)`);
        }
        break;

      case 'grow': {
        const w = this.requireActiveWorld(); if (!w) break;
        const n = args[0] ? parseInt(args[0], 10) : 1;
        if (Number.isNaN(n) || n < 1) { console.log('Usage: grow [count >= 1]'); break; }
        const hadCradle = !!w.cradle;
        const grown = w.grow(n);
        if (!hadCradle) console.log(`Planted Cradle of Life: #${w.cradle!.id} [${w.cradle!.environment}].`);
        console.log(`Grew ${grown.length} region(s). '${w.name}' now has ${w.regions.size}.`);
        break;
      }

      case 'list': {
        const w = this.requireActiveWorld(); if (!w) break;
        this.renderRegionList(w);
        break;
      }

      case 'show': {
        const w = this.requireActiveWorld(); if (!w) break;
        const id = parseInt(args[0], 10);
        if (Number.isNaN(id)) { console.log('Usage: show <regionId>'); break; }
        const region = w.getRegion(id);
        if (!region) { console.log(`No region #${id} in '${w.name}'.`); break; }
        this.renderRegionDetail(region, w);
        break;
      }

      case 'world': {
        const w = this.requireActiveWorld(); if (!w) break;
        this.renderWorldSummary(w);
        break;
      }

      case 'tick':
        this.tick();
        console.log(`⏱  Tick ${this.time.currentTick}`);
        break;

      case 's':
      case 'save':
        this.saveToFile(args[0] ?? 'manual.save');
        break;

      case 'load':
        this.loadFromFile(args[0] ?? 'manual.save');
        break;

      default:
        console.log(`Unknown command: '${cmd}'. Type 'help' or '?'.`);
    }
  }

  private getActiveWorld(): World | undefined {
    return this.activeWorldName ? this.worlds.get(this.activeWorldName) : undefined;
  }

  private requireActiveWorld(): World | undefined {
    const w = this.getActiveWorld();
    if (!w) console.log("No active world. Create one with: new world <name>");
    return w;
  }

  /** Render a Region's adjacency as the text-map showpiece: `5 [lake], 7 [foothills]`. */
  private renderAdjacency(region: Region): string {
    const neighbors = [...region.neighbors].sort((a, b) => a.id - b.id);
    if (neighbors.length === 0) return '· (isolated)';
    return neighbors.map(n => `${n.id} [${n.environment}]`).join(', ');
  }

  private renderRegionList(w: World) {
    if (w.regions.size === 0) { console.log(`'${w.name}' is empty. Try: grow [n]`); return; }
    console.log(`${w.name} — ${w.regions.size} region(s)${w.cradle ? `, cradle #${w.cradle.id}` : ''}`);
    const sorted = [...w.regions].sort((a, b) => a.id - b.id);
    for (const r of sorted) {
      const cradleMark = r === w.cradle ? '⭑' : ' ';
      console.log(` ${cradleMark} #${r.id} [${r.environment}]  size ${r.size.toFixed(2)}  → ${this.renderAdjacency(r)}`);
    }
  }

  private renderRegionDetail(r: Region, w: World) {
    const g = r.geography;
    console.log(`Region #${r.id} [${r.environment}]${r === w.cradle ? '  (Cradle of Life)' : ''}`);
    console.log(`  size        ${r.size.toFixed(2)}  (relative to Cradle = 1.00)`);
    console.log(`  water       ${g.waterAccess}`);
    console.log(`  geography   elev ${g.elevation.toFixed(2)}  temp ${g.temperature.toFixed(2)}  moist ${g.moisture.toFixed(2)}  rain ${g.rainfall.toFixed(2)}`);
    console.log(`              fert ${g.fertility.toFixed(2)}  expo ${g.exposure.toFixed(2)}  vol ${g.volatility.toFixed(2)}  lat ${g.latitude.toFixed(2)}`);
    console.log(`  neighbors   → ${this.renderAdjacency(r)}`);
  }

  private renderWorldSummary(w: World) {
    console.log(`World '${w.name}'`);
    console.log(`  seed      ${w.seed}`);
    console.log(`  regions   ${w.regions.size}`);
    console.log(`  cradle    ${w.cradle ? `#${w.cradle.id} [${w.cradle.environment}]` : '(unplanted)'}`);
    const counts = new Map<string, number>();
    for (const r of w.regions) counts.set(r.environment, (counts.get(r.environment) ?? 0) + 1);
    const hist = [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([e, c]) => `${e}×${c}`).join('  ');
    if (hist) console.log(`  environs  ${hist}`);
    console.log(`  tick      ${this.time.currentTick}`);
  }

  private printHelp() {
    console.log([
      'Atlas commands:',
      '  new world <name> [seed]   create & activate a world (optional reproducible seed)',
      '  use <name>         switch active world',
      '  worlds             list all worlds',
      '  grow [n]           grow n regions outward (plants the Cradle first)',
      '  list               list the active world\'s regions + adjacency',
      '  show <id>          full detail for one region',
      '  world              summary of the active world',
      '  tick / <Enter>     advance time one tick',
      '  save [file]        save Atlas state to saves/<file>',
      '  load [file]        load Atlas state from saves/<file>',
      '  help / ?           show this help',
      '  quit               exit',
    ].join('\n'));
  }
}
