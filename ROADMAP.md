# Atlas — Soft Roadmap

A *soft* roadmap: directional, not a commitment. Phases are reorderable, and "done"
means "a slice that runs end-to-end and feels finished," not "every box ticked."

## What this project is

Atlas is a **passion / portfolio piece**, not software aimed at mass distribution.
That shapes every priority below:

- **Depth in one slice beats breadth of scaffolding.** One polished, explorable loop
  reads better — to a portfolio reviewer and to future-you — than many half-built
  layers. Make what already exists *legible* before building more.
- **Build order is geography → denizens → ecology.** Geography is the foundation;
  denizen (Entity) simulation comes after it; ecology sim layers come after that.
- **Taxonomy must be behavior-bearing**, and orphaned scaffolding is fine *if marked*
  `TBI`. (See `CONTEXT.md` Principles.)

## Phase 0 — Foundation *(done)*

- Procedural region generation (weighted-adjacency environments, geography profiles,
  relative Size), JSON world export, tick loop.
- Domain model documented: `CONTEXT.md` glossary + `docs/adr/0001`, `docs/adr/0002`.

## Phase 1 — Legibility & tool-feel *(done)*

Convert "it runs and prints logs" into "a person can explore a generated world."

- **Inspection commands** — `list` (regions), `show <id>` (full region + neighbors),
  `world` (summary).
- **Text adjacency render** — `Region 3 [taiga] → 5[lake], 7[foothills]`. The textual
  map is the showpiece for a zero-graphics worldbuilder.
- **Save ⇄ load round-trip** — add a `load` command; fix `Atlas.fromJSON` (rebuilds
  `worlds` as an array instead of a `Map`).
- **Real command loop** — working `help` (`?` currently ticks instead of helping), a
  "current/active world" so commands aren't hardcoded to a world named `test`.
- **Seeded determinism** — thread a seed through generation so worlds are reproducible
  ("here's my world's seed"). Small change, strong signal.

## Phase 2 — Web UI *(next; builds directly on Phase 1's data)*

- **Obsidian-style graph view** — render regions as nodes in a force-directed graph of
  the adjacency ("magnet") model. Renders the *same* data Phase 1 makes legible, just a
  different renderer. (Candidate libs: react-force-graph / cytoscape / vis-network.)
- **Playback controls** — play / pause / speed / single-tick, driving the tick loop.
- Requires a thin HTTP/state-serving layer over the engine (already foreseen in the
  readme's "internal HTTP server" + "front-end visualizer" notes).

## Phase 3 — Geography depth *(tracer bullet up the ladder)*

- Attach a **Feature** with one **Interaction** to a Region; surface it in `show <id>`
  and as a node detail in the web UI. First visible step of geography → interaction →
  value (see ADR-0001 / ADR-0002).
- Environment ambient modifiers; Feature → Item yields.

## Phase 4 — Denizen simulation *(after geography)*

- **Entities** as actors/valuers; **Relationships** (sacred/commodity/taboo kinds);
  the desire/criteria matching engine from `whiteboard.md` ("a mob compares its desires
  to the game's reality" → evaluated through the Interactions Features expose).
- **Settlements** — size categories + flavored naming sets (`whiteboard.md`).

## Phase 5 — Ecology layers *(after denizens)*

- Temperature / moisture / elevation-driven ecology; flora & fauna; **biome-sensitive
  simulation logic** — the consumer that finally wakes the dormant `Biome` ladder
  (`types/Biome.ts`, `data/biomeData.ts`).
