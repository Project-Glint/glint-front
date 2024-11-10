import { fonts } from './fonts';
import { colors } from './colors';

export const theme = { fonts, colors } as const;
export type Theme = typeof theme;
