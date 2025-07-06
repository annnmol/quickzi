import spacingTokens from "../../tokens/spacing.json";
import radiusTokens from "../../tokens/radius.json";
import elevationTokens from "../../tokens/elevation.json";

type FlattenToken<T extends Record<string, { value: any }>> = {
  [K in keyof T]: T[K]["value"];
};

const flattenTokens = <T extends Record<string, { value: any }>>(tokens: T) =>
  Object.fromEntries(
    Object.entries(tokens).map(([k, v]) => [k, v.value])
  ) as FlattenToken<T>;

// 👇 Combined Token Export
export const tokens = {
  ...flattenTokens(spacingTokens),
  ...flattenTokens(radiusTokens),
  ...flattenTokens(elevationTokens)
};

export type TokenKeys = keyof typeof tokens;
