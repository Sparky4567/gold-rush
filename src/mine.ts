export type Ore = {
  id: number;
  x: number;
  y: number;
  size: number;
  kind: 'gold' | 'rock' | 'gem' | 'obsidian';
  value: number;
};

// 78 degrees on either side reaches the shallow nuggets near both walls.
export const SWING_LIMIT = 78 * Math.PI / 180;

export function swing(angle: number, direction: number, dt: number) {
  const next = angle + direction * dt * .85;
  if (next >= SWING_LIMIT) return { angle: SWING_LIMIT, direction: -1 };
  if (next <= -SWING_LIMIT) return { angle: -SWING_LIMIT, direction: 1 };
  return { angle: next, direction };
}

export function ores(round: number): Ore[] {
  const items: Ore[] = Array.from({ length: 16 }, (_, id) => {
    const kind = id % 7 === 6 ? 'gem' : id % 4 === 3 ? 'rock' : 'gold';
    return {
      id, kind,
      x: 70 + (id % 6) * 155 + Math.sin(id * 7 + round) * 35,
      y: 270 + Math.floor(id / 6) * 105 + Math.cos(id * 3) * 25,
      size: kind === 'gem' ? 16 : kind === 'rock' ? 26 : id % 3 === 0 ? 35 : 22,
      value: kind === 'gem' ? 400 : kind === 'rock' ? 20 : id % 3 === 0 ? 250 : 100,
    };
  });
  // A distinct bonus, placed in the open lower-right area rather than replacing gold.
  if (round % 3 === 0) {
    items.push({ id: 16, kind: 'obsidian', x: 790, y: 475, size: 29, value: 1000 });
  }
  return items;
}
