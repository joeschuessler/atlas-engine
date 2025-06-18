# Atlas Simulation Engine

**The Atlas** is a tick-based world simulation engine written in TypeScript, inspired by systems like *Dwarf Fortress* and procedural worldbuilders. It currently models geography and ecology only at generation of regions.

This project began as a freeform experiment and is slowly evolving into a structured engine designed for long-term extensibility, inspectable simulation state, and flexible interfaces (CLI, HTTP, or eventual UI).

---

## 🧠 Project Scope

- **Tick-driven simulation loop** with configurable pace
- **World and Region management** with structured typing
- **Geographical environments** modeled with environmental bands (e.g., forest, reef, tundra)
- **Entity adjacency logic** for neighbor-aware updates
- **Flora density and resource types** per region
- **Zero graphics**: CLI- and text-first by design

---

## 📦 Current Features

- `Atlas`, `World`, and `Region` classes with interlinked state
- Deferred neighbor connection system ("magnet" model)
- JSON serialization for full world export
- Save-to-file utility using project-root `saves/` folder
- Early prototype test world and ticking system

---

## 🔧 Planned Features

- Biome-sensitive simulation logic (weather, ecology)
- Actor-based entity system (households, creatures)
- Optional front-end visualizer (React / Electron)
- Lua-like scripting for world events or DM injection
- Exportable worlds as reusable data artifacts
- Internal HTTP server for sending live commands to the simulation

---

## 🚧 Status

This project is under **active development**, and is pre-alpha. File structure and architecture are now stable enough for commits. Earlier chaos has been intentionally left undocumented, but the present structure is the baseline for all forward progress.

---

## 🛠️ Getting Started

```bash
npm install
npm run dev
