---
status: accepted
---

# The world emits neutral facts; meaning and value are ascribed by valuers

The simulation emits *objective, value-free facts* — an Interaction removes water
from a `spring`, full stop. Meaning and value are **never intrinsic** to a produced
thing; they are ascribed by **valuers** (an Entity — a person, a community, or a
civilization) through **Relationships** that carry a *kind* (`sacred`, `commodity`,
`taboo`, …). Consequently, all cultural and valuation complexity lives in
Entities/Relationships and never in Interactions, Features, or Items.

## Considered Options

- **Polymorphic / evolving Consequence types or per-culture event chains** —
  rejected; this pushes cultural interpretation into the Interaction itself, where
  every Interaction must know about every culture. Combinatorial and never-finished.
- **`Commodity` (or value) as an intrinsic `Item` type** — rejected; baking a
  valuation judgment into the object is "God decreeing what is tradeable." Value is
  a fact about a valuer's relationship to a thing, not about the thing.

## Consequences

- **Items are neutral.** `Commodity` is a *role* — an Item under a Relationship of
  kind `commodity` — not a type the engine declares.
- **Valuer is a role of Entity**, not a separate class; valuation is a Relationship
  with a kind.
- A `valuedBy`-style index on an Item, if ever added, is a **derived cache** rebuilt
  from valuers' Relationships — never the source of truth.
- **Interactions emit objective deltas only** (yield/consume Items, shift entity or
  Feature state); they carry no valuation.
