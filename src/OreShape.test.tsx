import { expect, test } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { OreShape } from './OreShape';
import { ores } from './mine';

test('a level-five emerald renders as a green SVG gem with its value', () => {
  const emerald = ores(5, 4000).find(item => item.kind === 'emerald');
  expect(emerald).toBeDefined();
  const markup = renderToStaticMarkup(<svg><OreShape ore={emerald!} /></svg>);
  expect(markup).toContain('Emerald — $2,500');
  expect(markup).toContain('fill="#3dd486"');
  expect(markup).not.toContain('Obsidian');
});
