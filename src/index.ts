import { Atlas } from "./Atlas";

const atlas = new Atlas();

async function main() {
  await atlas.run();
  atlas.inputInterface.close();
}

main();