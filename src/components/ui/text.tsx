import { forwardRef, memo, useMemo } from "react";
import {
  Text,
  type TextProps,
  type TextStyle,
  type StyleProp
} from "react-native";

// custom imports
import { textVariants, TextVariant } from "@app/src/lib/text";
import { useThemeColor } from "@app/src/components/hooks/useThemeColor";
import { ThemeKeys } from "@app/src/lib/theme";

export type AppTextProps = TextProps & {
  variant?: TextVariant;
  themeKey?: ThemeKeys;
  lightColor?: string;
  darkColor?: string;
};

const AppText = memo(
  forwardRef<Text, AppTextProps>(
    (
      {
        variant = "default",
        themeKey = "text",
        style,
        lightColor,
        darkColor,
        ...rest
      },
      ref
    ) => {
      const resolvedColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        themeKey
      );

      const baseStyle = textVariants[variant];

      const computedStyle: TextStyle = {
        color: baseStyle.color ?? resolvedColor,
        fontFamily: baseStyle.fontFamily,
        fontSize: baseStyle.fontSize,
        lineHeight: baseStyle.lineHeight
      };

      const combinedStyle = useMemo<StyleProp<TextStyle>>(
        () => [computedStyle, style],
        [computedStyle, style]
      );

      return <Text ref={ref} style={combinedStyle} {...rest} />;
    }
  )
);

export default AppText;
