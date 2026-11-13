# Gold Rush

A browser arcade game inspired by classic gold-mining games. Aim a swinging claw, reel in gold and diamonds, and beat the clock to reach the next claim. Built with Bun, React, TypeScript, and an original SVG desert mine.

## Features

- Swinging claw with a ±78° arc, collision detection, and weight-dependent reeling speeds
- Gold nuggets, diamonds, rocks, rare obsidian, emeralds, and dynamite
- 60-second rounds with increasing targets
- A shop between rounds for reel upgrades and extra dynamite
- Mouse, touch, and keyboard controls
- Pause and resume, optional sound, and a personal best saved in your browser
- Responsive layout

## Getting started

Install [Bun](https://bun.sh), then run:

```sh
bun install
bun run dev
```

Open the local URL printed by Bun and click **Let’s dig**.

## Controls

| Action | Control |
| --- | --- |
| Drop the claw | Click or tap the mine, Space, or Down Arrow |
| Destroy a grabbed item | D, Up Arrow, or the Dynamite button |
| Pause or resume | Escape or the pause button |

The claw swings automatically and reels in the first item it touches. Large gold nuggets and rocks take longer to retrieve. Dynamite destroys a grabbed item without awarding its value.

| Item | Value |
| --- | --- |
| Small gold | $100 |
| Big gold | $250 |
| Diamond | $400 |
| Rock | $20 |
| Obsidian | $1,000 |
| Emerald | $2,500 |

One extra obsidian stone appears in the lower-right area every third level (3, 6, 9, and so on). It is worth $1,000 and takes longer to reel in than ordinary gold.

Emeralds appear every fifth level (5, 10, 15, …), except on obsidian levels (15, 30, …). On those shared milestones, an emerald only appears if your current haul after shopping plus the total value of all other stones is below the target. Emeralds have a green faceted shape and an “EMERALD · $2,500” label beneath them. A discovery notice appears while the emerald remains in the mine. The overlap exception checks available money, not whether every stone can be collected within the time limit.

Reach the target before the 60-second timer expires to advance. Shop purchases deduct from your accumulated haul. The first five targets are $650, $1,500, $2,700, $4,200, and $6,000. From level 6 onward, the target is the level number multiplied by $1,500; there is no fixed final level.

## Development

```sh
bun test           # Check spawning, rendering, reach, and swing reversals
bun run typecheck  # Check TypeScript
bun run build      # Build browser assets into dist/
bun run start      # Run the Bun server in production mode
```

The production server serves the source HTML through Bun's bundler. The separate `build` command produces static browser assets in `dist/`.

Main files:

- `src/App.tsx` — game state, animation loop, and controls
- `src/Miner.tsx` — illustrated miner character
- `src/OreShape.tsx` — SVG artwork for stones and gems
- `src/OreShape.test.tsx` — regression test for level-five emerald rendering
- `src/mine.ts` — level targets, stone generation, and swing calculations
- `src/mine.test.ts` — regression tests for stone scheduling, value checks, reach, and swing reversals
- `src/index.css` — layout and visual styles
- `src/index.ts` — Bun server
- `src/index.html` — HTML entry point and page metadata

Gameplay runs in the browser with no backend persistence. Personal bests use local storage. Optional Google Fonts fall back to system fonts when unavailable.

## Troubleshooting

If new stones or other recent changes do not appear during development, restart `bun run dev`, refresh the browser, and begin a new run. Hot reload can preserve an existing round’s generated stones. Emeralds first appear on level 5; levels 1–4 do not contain them.

## License

[MIT](LICENSE) — Copyright (c) 2026 Sparky4567.
