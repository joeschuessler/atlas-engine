import { writeFileSync, readFileSync } from "fs";
import { Atlas } from 'Atlas';

export function saveToFile(atlas: Atlas, path: string): void {
  writeFileSync(path, JSON.stringify(atlas.toJSON(), null, 2));
}

export function LoadFromFile(path: string): Atlas {
  const raw = JSON.parse(readFileSync(path, "utf-8"));
  return Atlas.fromJSON(raw);
}