import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

const styles = readFileSync(join(process.cwd(), 'src/styles.css'), 'utf8');

describe('theme styles', () => {
  it('uses softened neutral tokens instead of pure black and white', () => {
    expect(styles).toContain('--ink: oklch');
    expect(styles).toContain('--paper: oklch');
    expect(styles).not.toContain('#000000');
    expect(styles).not.toContain('#ffffff');
  });
});
