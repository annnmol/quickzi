import { forwardRef, memo, type ElementRef } from "react";
import {
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
  TextStyle,
  StyleSheet,
  StyleProp,
} from "react-native";

// custom imports
import { theme } from "@app/src/lib/theme";
import { tokens } from "@app/src/lib/tokens";
import { textStyles } from "./text";

export interface AppInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
}

const AppTextInput = memo(
  forwardRef<ElementRef<typeof TextInput>, AppInputProps>(
    ({ containerStyle, style, ...props }, ref) => {
      return (
        <View style={[styles.wrapper, containerStyle]}>
          <TextInput
            ref={ref}
            placeholderTextColor={theme.icon}
            style={[styles.input, textStyles.default, style]}
            {...props}
          />
        </View>
      );
    }
  )
);

export default AppTextInput;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.yellow,
    borderRadius: tokens.radius8,
    paddingHorizontal: tokens.spacing12,
    paddingVertical: 0,
    height: 48,
    justifyContent: "center",
  },
  input: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    paddingBottom: 10,
    margin: 0,
    includeFontPadding: false,
    textAlignVertical: "center",
    color: theme.text,
    backgroundColor: theme.iconDefault,
    height: 44,
    lineHeight: 22,
  },
});
