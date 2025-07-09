import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { Keyboard, KeyboardEvent, Platform } from "react-native";

export function useKeyboardOffsetHeight() {
  const [keyboardOffsetHeight, setKeyboardOffsetHeight] = useState(0);

  useEffect(() => {
    const onShow = (e: KeyboardEvent) => {
      setKeyboardOffsetHeight(e.endCoordinates.height);
    };

    const onHide = () => {
      setKeyboardOffsetHeight(0);
    };

    const showSub = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      onShow
    );

    const hideSub = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      onHide
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return keyboardOffsetHeight;
}

function useAnimatedKeyboardOffset(multiplier = 1) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const keyboardOffset = useKeyboardOffsetHeight();

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: keyboardOffset === 0 ? 0 : -keyboardOffset * multiplier,
      duration: Platform.OS === "ios" ? 250 : 150,
      useNativeDriver: true,
    }).start();
  }, [keyboardOffset]);

  return animatedValue;
}

export default useAnimatedKeyboardOffset;
