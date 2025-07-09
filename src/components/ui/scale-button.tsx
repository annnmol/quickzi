import React, {
  ElementRef,
  forwardRef,
  memo,
  useCallback,
  useRef,
  type ReactNode,
} from "react";
import {
  Animated,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle
} from "react-native";

interface Props extends TouchableOpacityProps {
  children: ReactNode;
}

// Optimized animation configs
const SPRING_CONFIG = {
  tension: 100,
  friction: 8,
  useNativeDriver: true,
};

// Memoized style object to prevent recreation with centered transform origin
const animatedViewStyle: ViewStyle = {
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
};

const AppScaleButton = memo(
  forwardRef<ElementRef<typeof TouchableOpacity>, Props>(
    ({ children, ...props }, ref) => {
      // Use useRef to persist animated value across renders
      const scaleAnim = useRef(new Animated.Value(1)).current;

      // Optimized press handlers with useCallback
      const handlePressIn = useCallback(() => {
        Animated.spring(scaleAnim, {
          toValue: 0.93,
          ...SPRING_CONFIG,
        }).start();
      }, [scaleAnim]);

      const handlePressOut = useCallback(() => {
        Animated.spring(scaleAnim, {
          toValue: 1,
          ...SPRING_CONFIG,
        }).start();
      }, [scaleAnim]);

      // Memoized transform style
      const animatedStyle = {
        transform: [{ scale: scaleAnim }],
      };

      return (
        <TouchableOpacity
          ref={ref}
          activeOpacity={1}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          {...props}
        >
          <Animated.View style={[animatedStyle, animatedViewStyle]}>
            {children}
          </Animated.View>
        </TouchableOpacity>
      );
    }
  )
);

AppScaleButton.displayName = "AppScaleButton";

export default AppScaleButton;
