import { Atlas } from "engine";
import readline from "readline/promises";
import { World } from "simulation";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const atlas = new Atlas();

async function main() {
  let shouldContinue = true;
  while (shouldContinue) {
    const input = await rl.question("Press Enter to advance the world (or 'q' to quit): ");
    const cleanedInput = input.trim().toLowerCase();
    switch(cleanedInput) {
      case 'q':
      case 'quit':
        console.log('Exiting...');
        shouldContinue = false;
        break;
      case 'w':
        atlas.worlds.set('test', atlas.worlds.get('test') ?? new World('test'));
        break;
      case 's':
        atlas.saveToFile('manualsave');
      default:
        atlas.tick();
    }
  }

  rl.close();
}

main();