/**
 * Deterministic, seedable PRNG (mulberry32) so a World is reproducible from its seed.
 * The whole generation path is threaded with one of these instead of `Math.random`,
 * which is what lets us say "here's my world's seed."
 */
export class SeededRng {
  private state: number;
  /** Count of values drawn — persisted so growth can resume deterministically after a load. */
  public draws = 0;

  constructor(public readonly seed: number, resumeDraws = 0) {
    this.state = seed >>> 0;
    for (let i = 0; i < resumeDraws; i++) this.next();
  }

  /** Next float in [0, 1). Bound as a field so it can be passed directly as `() => number`. */
  next = (): number => {
    this.draws++;
    const a = (this.state = (this.state + 0x6d2b79f5) | 0);
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Resolve a user-supplied seed (number, numeric string, or arbitrary text) to a 32-bit integer. */
export function resolveSeed(input: string | number): number {
  if (typeof input === 'number') return input >>> 0;
  if (/^\d+$/.test(input)) return Number(input) >>> 0;
  // FNV-1a hash for human-friendly named seeds.
  let h = 2166136261 >>> 0;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** A fresh random 32-bit seed, for worlds created without an explicit one. */
export function randomSeed(): number {
  return (Math.random() * 0x100000000) >>> 0;
}
