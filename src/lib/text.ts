import { Dimensions } from "react-native";

// custom imports
import textTokens from "../../tokens/text.json";

const BASE_WIDTH = 375;
const MAX_SCALE = 1.15;
const MIN_SCALE = 0.95;

const screenWidth = Dimensions.get("window").width;
const screenScale = screenWidth / BASE_WIDTH;

export const normalize = (size: number): number => {
  const clamped = Math.min(Math.max(screenScale, MIN_SCALE), MAX_SCALE);
  return Math.round(size * clamped);
};

type RawTokenMap = Record<string, { value: any }>;

export type TextStyleToken = {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
  fontWeight: string;
  color?: string;
};

type FlattenedTextMap = {
  [K in keyof typeof textTokens]: TextStyleToken;
};

const flattenTokens = (tokens: RawTokenMap) =>
  Object.fromEntries(
    Object.entries(tokens).map(([key, { value }]) => [
      key,
      {
        fontSize: normalize(value.fontSize),
        lineHeight: normalize(value.lineHeight),
        fontFamily: value.fontFamily ?? "sans-serif",
        fontWeight: value.fontWeight ?? 400,
        ...(value.color && { color: value.color }),
      },
    ])
  ) as FlattenedTextMap;

export const textVariants = flattenTokens(textTokens);
export type TextVariant = keyof typeof textVariants;
