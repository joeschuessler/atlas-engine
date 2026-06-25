---
status: accepted
---

# Features are interaction loci composed of shared Interactions; Environment is ambient

The world is touched by entities at two granularities. A Region's **Environment**
(e.g. `forest`) affects entities *in aggregate* — it slides their conditions
statistically and offers no discrete actions. A **Feature** (e.g. `spring`) is a
first-class, discrete locus that offers one or more **Interactions** — concrete
"verb objects" (`gather_water`, `clean`) each with a specific consequence. We model
Interactions as a shared, reusable library that Features reference many-to-many: a
`spring` and a `hot_spring` both offer `gather_water` but remain distinct Features
with diverging Interaction sets.

## Considered Options

- **Features as bare strings with hardcoded behavior** — rejected; provides no
  reusable unit of "specific consequence" and couples behavior to terrain names.
- **Features defined by (identical to) their affordances ("skins")** — rejected;
  collapsing `spring`/`oasis`/`hot_spring` to flavors of one affordance discards the
  granular specificity that is the whole point of Features.
- **Feature sub-categories as generation pathways** — rejected; that information
  doesn't survive into a placed (string) Feature, and "how it spawns" is secondary
  to "what it affords." Spawn rules, if modelled, belong in a separate
  Environment→Feature affinity table.

## Consequences

- An `Interaction` concept must exist as a first-class, reusable unit.
- The existing `GeologicalFeature` / `HydrologicalFeature` unions are demoted to
  descriptive taxonomy and no longer drive behavior.
- The actor/desire-matching engine (whiteboard) evaluates the world through the
  Interactions that Features expose.
