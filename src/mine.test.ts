import { describe, expect, test } from 'bun:test';
import { ores, swing, SWING_LIMIT, levelTarget } from './mine';

describe('mine generation', () => {
  test('adds exactly one $1,000 obsidian bonus on every third level', () => {
    for (let level = 1; level <= 100; level++) {
      const items = ores(level);
      const obsidian = items.filter(item => item.kind === 'obsidian');
      expect(obsidian.length).toBe(level % 3 === 0 ? 1 : 0);
      expect(items.filter(item => item.kind !== 'obsidian' && item.kind !== 'emerald').length).toBe(16);
      if (obsidian[0]) expect(obsidian[0].value).toBe(1000);
    }
  });

  test('every item lies within the swing arc and the drop boundaries', () => {
    for (let level = 1; level <= 100; level++) {
      for (const item of ores(level)) {
        expect(Math.abs(Math.atan2(item.x - 500, item.y - 164))).toBeLessThan(SWING_LIMIT);
        expect(item.x).toBeGreaterThan(25);
        expect(item.x).toBeLessThan(975);
        expect(item.y).toBeLessThan(552);
      }
    }
  });

  test('obsidian is fully visible and does not overlap another stone', () => {
    for (let level = 3; level <= 99; level += 3) {
      const items = ores(level);
      const obsidian = items.find(item => item.kind === 'obsidian')!;
      expect(obsidian.y + obsidian.size).toBeLessThan(552);
      for (const item of items.filter(item => item !== obsidian)) {
        expect(Math.hypot(item.x - obsidian.x, item.y - obsidian.y)).toBeGreaterThan(item.size + obsidian.size);
      }
    }
  });
});

test('swing reversal is pure and travels away from either edge', () => {
  for (const direction of [-1, 1]) {
    const angle = direction * (SWING_LIMIT - .001);
    const first = swing(angle, direction, .016);
    expect(swing(angle, direction, .016)).toEqual(first);
    const next = swing(first.angle, first.direction, .016);
    expect(Math.abs(next.angle)).toBeLessThan(Math.abs(first.angle));
  }
});

describe('emerald scheduling', () => {
  test('appears every fifth level and is worth more than obsidian', () => {
    for (let level = 1; level <= 100; level++) {
      const items = ores(level, levelTarget(level));
      const emeralds = items.filter(item => item.kind === 'emerald');
      expect(emeralds.length).toBe(level % 5 === 0 && level % 3 !== 0 ? 1 : 0);
      if (emeralds[0]) expect(emeralds[0].value).toBe(2500);
    }
  });

  test('allows both stones only when available money falls short on a shared milestone', () => {
    const level = 15;
    const base = ores(level, levelTarget(level));
    const total = base.reduce((sum, item) => sum + item.value, 0);
    const exactHaul = levelTarget(level) - total;
    expect(ores(level, exactHaul).some(item => item.kind === 'emerald')).toBe(false);
    const rescued = ores(level, exactHaul - 1);
    expect(rescued.some(item => item.kind === 'obsidian')).toBe(true);
    expect(rescued.some(item => item.kind === 'emerald')).toBe(true);
    expect(exactHaul - 1 + rescued.reduce((sum, item) => sum + item.value, 0)).toBeGreaterThanOrEqual(levelTarget(level));
  });
});
