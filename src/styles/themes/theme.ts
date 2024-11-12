import { fonts } from './fonts';
import { colors } from './colors';
import { shadows } from './shadows';

export const theme = { fonts, colors, shadows } as const;
export type Theme = typeof theme;
