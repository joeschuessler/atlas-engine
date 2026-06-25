// TBI (to-be-implemented): Biome is the coarse classification *family* that an
// Environment belongs to — the top of the geography ladder:
//   Biome (7, this type)  ⊃  Environment (28, a Region's terrain)  ⊃  Feature (per-Region)
// The Biome→Environment mapping is declared in `data/biomeData.ts` (biomeEnvironments)
// but is currently DORMANT: nothing consumes it yet. Its intended consumer is
// biome-sensitive simulation logic (weather/ecology), which branches on the 7 coarse
// groups rather than the 28 Environments. Kept deliberately as marked scaffolding.
// See CONTEXT.md ("Biome") and the "taxonomy must be behavior-bearing" principle.
export type Biome =
  | "freshwater"
  | "marine"
  | "grassland"
  | "forest"
  | "desert"
  | "tundra"
  | "mountain";