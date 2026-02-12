import { converter, formatHex, parse } from 'culori';

export type TailwindScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

const TAILWIND_L: Record<TailwindScale, number> = {
  50: 0.985,
  100: 0.965,
  200: 0.925,
  300: 0.875,
  400: 0.825,
  500: 0.75,
  600: 0.65,
  700: 0.55,
  800: 0.45,
  900: 0.32,
  950: 0.22,
};

export const SHADES: TailwindScale[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

/** quadratic chroma falloff like Tailwind UI */
function chromaFalloff(baseC: number, dist: number, maxDist: number) {
  if (maxDist === 0) return baseC;
  const t = dist / maxDist;
  return baseC * (1 - 0.85 * t * t);
}

const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

/** własny typ OKLCH */
type OklchColor = {
  l: number;
  c: number;
  h: number;
};

/** serializacja do hex */
function serializeOklchToHex(color: OklchColor): string {
  const oklchToRgb = converter('rgb');

  const rgb = oklchToRgb({
    mode: 'oklch',
    l: color.l,
    c: color.c,
    h: color.h,
  });

  if (!rgb) {
    throw new Error('Color is out of sRGB gamut');
  }

  return formatHex(rgb).toUpperCase();
}

export type PaletteResult = {
  anchor: TailwindScale;
  base: string;
  palette: Record<TailwindScale, string>;
};

export function generateTailwindPalette(input: string): PaletteResult {
  const parsed = parse(input);
  if (!parsed) throw new Error(`Cannot parse color: ${input}`);

  const inputHex = formatHex(parsed).toUpperCase();

  const toOklch = converter('oklch');
  const baseRaw = toOklch(parsed);
  if (!baseRaw || typeof baseRaw.l !== 'number' || typeof baseRaw.c !== 'number' || typeof baseRaw.h !== 'number') {
    throw new Error(`Cannot convert '${input}' to OKLCH`);
  }

  const base: OklchColor = {
    l: clamp01(baseRaw.l),
    c: Math.max(0, baseRaw.c),
    h: ((baseRaw.h % 360) + 360) % 360,
  };

  // find nearest Tailwind shade (anchor)
  let nearestShade = SHADES[0];
  let nearestDelta = Math.abs(TAILWIND_L[nearestShade] - base.l);

  for (let i = 1; i < SHADES.length; i++) {
    const s = SHADES[i];
    const d = Math.abs(TAILWIND_L[s] - base.l);
    if (d < nearestDelta) {
      nearestDelta = d;
      nearestShade = s;
    }
  }

  const indexOf = (s: TailwindScale) => SHADES.indexOf(s);
  const maxDist = Math.max(...SHADES.map((s) => Math.abs(indexOf(s) - indexOf(nearestShade))));

  const palette: Record<TailwindScale, string> = {} as Record<TailwindScale, string>;

  for (const stop of SHADES) {
    if (stop === nearestShade) {
      // ✅ keep original color exactly
      palette[stop] = inputHex;
      continue;
    }

    const dist = Math.abs(indexOf(stop) - indexOf(nearestShade));
    const newL = clamp01(TAILWIND_L[stop]);
    const newC = Math.max(0, chromaFalloff(base.c, dist, maxDist));

    palette[stop] = serializeOklchToHex({
      l: newL,
      c: newC,
      h: base.h,
    });
  }

  return {
    anchor: nearestShade,
    base: inputHex,
    palette,
  };
}

export function applyPaletteToDocument(palette: PaletteResult, prefix = 'bg-test') {
  const style = document.createElement('style');
  const cssLines: string[] = [];

  for (const shade of SHADES) {
    const value = palette.palette[shade];
    cssLines.push(`.${prefix}-${shade} { background-color: ${value}; }`);
  }

  style.appendChild(document.createTextNode(cssLines.join('\n')));
  document.head.appendChild(style);
}
