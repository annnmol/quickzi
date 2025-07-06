import { ElementRef, forwardRef, memo, type ReactNode, useMemo } from "react";
import {
    StyleSheet,
    Text,
    TextProps,
    TouchableOpacity,
    TouchableOpacityProps,
    TextStyle,
    ViewStyle,
    StyleProp,
} from "react-native";

//custom imports
import { TextVariant, textVariants } from "@app/src/lib/text";
import { theme, ThemeKeys } from "@app/src/lib/theme";
import { tokens } from "@app/src/lib/tokens";

export type ButtonVariant =
  | "primary"
  | "outline"
  | "ghost"
  | "grey"
  | "danger"
  | "danger-outline";

export interface AppButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  textVariant?: TextVariant;
  textThemeKey?: ThemeKeys;
  children: ReactNode;
  textProps?: TextProps;
  rounded?: boolean;
  fullWidth?: boolean;
  left?: ReactNode;
  right?: ReactNode;
}

const AppButton = memo(
  forwardRef<ElementRef<typeof TouchableOpacity>, AppButtonProps>(
    (
      {
        variant = "primary",
        textVariant = "defaultSemiBold",
        textThemeKey,
        children,
        style,
        textProps,
        rounded = false,
        fullWidth = true,
        left,
        right,
        ...props
      },
      ref
    ) => {
      // Resolve text color
      const textColor = useMemo(() => {
        if (textThemeKey) return theme[textThemeKey];
        switch (variant) {
          case "primary":
          case "danger":
            return theme.onPrimary;
          case "outline":
          case "danger-outline":
            return theme.primary;
          default:
            return theme.text;
        }
      }, [variant, textThemeKey]);

      const buttonStyle = useMemo(
        (): StyleProp<ViewStyle> => [
          styles.base,
          styles[variant],
          rounded ? styles.rounded : styles.flat,
          fullWidth && styles.fullWidth,
          props.disabled ? { opacity: 0.5 } : {},
          style,
        ],
        [variant, rounded, fullWidth, props.disabled, style]
      );

      const textStyle = useMemo<TextStyle[]>(
        () => [
          textVariants[textVariant],
          { color: textColor },
          textProps?.style as TextStyle,
        ],
        [textVariant, textColor, textProps?.style]
      );

      return (
        <TouchableOpacity
          ref={ref}
          style={buttonStyle}
          activeOpacity={0.7}
          {...props}
        >
          {left}
          <Text numberOfLines={1} style={textStyle} {...textProps}>
            {children}
          </Text>
          {right}
        </TouchableOpacity>
      );
    }
  )
);

export default AppButton;

// Static style definitions using StyleSheet.create
const styles = StyleSheet.create({
  base: {
    paddingVertical: tokens.spacing12,
    paddingHorizontal: tokens.spacing16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: tokens.spacing8,
  },
  fullWidth: {
      alignSelf: "stretch",
    // width: "100%",
  },
  rounded: {
    borderRadius: tokens.radiusFull,
  },
  flat: {
    borderRadius: tokens.radius8,
  },
  primary: {
    backgroundColor: theme.primary,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: theme.primary,
  },
  ghost: {
    backgroundColor: "transparent",
  },
  grey: {
    backgroundColor: theme.icon,
  },
  danger: {
    backgroundColor: theme.red,
  },
  "danger-outline": {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: theme.red,
  },
});
