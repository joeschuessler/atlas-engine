# Atlas Engine

The domain language of Atlas — a tick-based, text-first world-simulation engine for procedural worldbuilding (e.g. a Dungeon Master's tool). This glossary defines the worldbuilding concepts the engine models. It is vocabulary only; implementation details live in code and ADRs.

## Language

**Region**:
The universal unit of geography — one contiguous area of a single **Environment**. Worlds are built entirely out of Regions linked to one another.
_Avoid_: tile, cell, zone, hex (the world is not a grid).

**Cradle of Life** (or **Cradle**):
The single, world-unique origin Region that every world is grown outward from — both the conceptual point of origin and the literal anchor of the size scale. Each world has exactly one.
_Avoid_: spawn, seed region, origin point (when referring to the Region itself).

**Size**:
A dimensionless ratio expressing a Region's magnitude relative to the Cradle. The **Cradle's Size is `1.00` by definition**; a Region at `0.2` is one-fifth the Cradle, one at `2.5` is two-and-a-half times it. Deliberately abstract — it is *not* committed to a physical unit such as area.
_Avoid_: area, acreage, footprint (these imply a physical measure Size intentionally avoids).

**Environment**:
The terrain *kind* of a Region — the single thing a Region "is" (`taiga`, `mangrove`, `peaks`…). Entities interact with a Region's Environment **in aggregate**: it shifts their conditions statistically rather than offering discrete actions.
_Avoid_: biome (that is the coarser family), environmental band, terrain type.

**Biome**:
The coarse *classification family* an Environment belongs to (`freshwater`, `marine`, `grassland`, `forest`, `desert`, `tundra`, `mountain`). A Region is not a Biome; it *has* one, inherited from its Environment.
_Avoid_: environment (that is the granular per-Region kind).

**Feature**:
A discrete, first-class locus within a Region that offers one or more **Interactions** to entities (a `spring`, a `tar_pit`, an `oasis`). A Feature is *not* reducible to its Interactions — two Features may share an Interaction yet remain distinct (a `spring` and a `hot_spring` both afford "gather water," but the `hot_spring` also affords others). Contrast Environment: an Environment is an ambient backdrop that slides numbers; a Feature is an actionable locus.
_Avoid_: landmark, terrain feature (when you mean the interaction locus, not the scenery).

**Interaction**:
A discrete action an entity can take upon a Feature, together with its specific consequence — the reusable "verb object" (`gather_water`, `clean`, `bathe`, `trap`). One Interaction may be offered by many Features, and one Feature offers many Interactions (many-to-many). An Interaction's consequence is an *objective* delta (it may yield or consume **Items**, shift entity or Feature state); it never carries valuation. Interactions are the granular unit of "specific consequence" that distinguishes Features from Environments.
_Avoid_: affordance, effect, hook, use (Interaction is the chosen term).

**Entity**:
Any simulated agent that can perform **Interactions** and hold **Relationships** — scaling from a single person up through a community to an entire civilization. When an Entity holds a valuing Relationship it is acting as a **Valuer** (a role, not a separate type).
_Avoid_: actor, agent, valuer (Valuer is a role Entity plays, not its own concept).

**Item**:
The neutral, value-free root of all tangible, being-scale objects an **Interaction** can yield or consume (`water`, `ore`, a tool, an artifact). An Item carries *no* intrinsic worth; worth is ascribed by a **Relationship**. Intended as a taxonomic root the simulation can extend with its own subtypes.
_Avoid_: thing, object (too vague; `object` also collides with the language built-in), good, commodity.

**Relationship**:
An **Entity**'s stance toward something — another Entity, a Feature, or an Item — carrying a *kind* (`sacred`, `commodity`, `taboo`, …). Valuation is simply a Relationship whose kind expresses worth. This is the *only* home for meaning and value; the things themselves stay neutral.
_Avoid_: valuation, opinion, sentiment (Relationship is the general term; valuation is one kind of it).

**Commodity**:
A *descriptive role*, not a type: an **Item** that some **Entity** holds a **Relationship** with whose kind is `commodity` (i.e. treats as tradeable/valued). The word stays useful for description; it is never a class the engine declares.
_Avoid_: using Commodity as a type, category, or intrinsic property of an Item.

## Relationships

- A **World** contains many **Regions** and exactly one **Cradle of Life**.
- The **Cradle** is a **Region**; its **Size** is fixed at `1.00`.
- Every other **Region**'s **Size** is a ratio measured against the **Cradle**.
- **Regions** are linked to one another by adjacency (a graph), not by coordinates.
- A **Region** is exactly one **Environment**; that **Environment** belongs to exactly one **Biome**.
- A **Region** contains zero or more **Features**.
- A **Feature** offers one or more **Interactions**; an **Interaction** may be offered by many **Features** (many-to-many).
- An entity interacts with a Region's **Environment** in aggregate (statistical), and with its **Features** via discrete **Interactions** (specific consequences). This **granularity of interaction** — ambient vs. actionable — is the line that separates the two concepts.
- An **Interaction** may yield or consume one or more **Items**.
- An **Entity** holds zero or more **Relationships** toward Entities, Features, or Items; each Relationship has a *kind*.
- A **Commodity** is an **Item** for which some **Entity** holds a **Relationship** of kind `commodity` — a role, never an intrinsic type. An Entity holding a valuing Relationship is acting as a **Valuer**.

## Principles

- **Neutrality of the world; ascription by valuers.** The simulation emits *objective, value-free facts* — an **Interaction** removes water from a `spring`, full stop. **Meaning and value are never intrinsic to the producing thing**; they are *ascribed by valuers* (an entity, a community, a civilization). The same fact may be sacred to one valuer and trivial to another. Therefore all cultural/valuation complexity lives in **valuers**, never in Interactions, Features, or the objects they yield.
- **Taxonomy must be behavior-bearing.** A classification distinction earns a place in the model only when some simulation behavior branches on it. If no logic ever asks "which kind?", it is flavor text, not taxonomy. (Cf. the dormant `Biome` and the demoted `Feature` sub-categories — taxonomy nothing yet reads.)

## Flagged ambiguities

- **"Coordinate (0,0)"** was used for the Cradle — resolved: a *metaphor* for the Cradle's role as origin, **not** a literal coordinate system. The world is an adjacency graph with no spatial coordinates.
- **Abstract vs. pinned values**: some quantities in the model are deliberately abstract (e.g. **Size** as a ratio) while others are hard-pinned (e.g. Cradle Size `= 1.00`). This mix is intentional and acknowledged, not an oversight.
- **Feature sub-categories** (`GeologicalFeature`, `HydrologicalFeature`, etc.) were originally read as *generation pathways* ("how a Feature spawns"). Resolved: the defining property of a **Feature** is **what it affords an entity** (its interactions/consequences), not how it spawns. The sub-categories are demoted to descriptive taxonomy; spawn rules, if modelled, belong in a separate Environment→Feature affinity table, not in the type unions.
