import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
} from "react";
import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  View,
  Platform,
} from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import useKeyboardOffsetHeight from "@app/src/components/hooks/useAnimatedKeyboardOffset";

const SCREEN_HEIGHT = Dimensions.get("window").height;

export type BottomModalRef = {
  open: () => void;
  close: () => void;
};

const BottomModalKeyboardAware = forwardRef<
  BottomModalRef,
  { children: React.ReactNode }
>(({ children }, ref) => {
  const [visible, setVisible] = useState(false);
  const keyboardOffset = useKeyboardOffsetHeight();
  const translateY = useSharedValue(SCREEN_HEIGHT);

  const open = useCallback(() => {
    setVisible(true);
    translateY.value = withTiming(0, { duration: 280 });
  }, [translateY]);

  const close = useCallback(() => {
    translateY.value = withTiming(SCREEN_HEIGHT, { duration: 200 });
    setTimeout(() => setVisible(false), 200);
  }, [translateY]);

  useImperativeHandle(ref, () => ({ open, close }), [open, close]);

  //   const gesture = Gesture.Pan()
  //     .onUpdate((e) => {
  //       if (e.translationY > 0) {
  //         translateY.value = e.translationY
  //       }
  //     })
  //     .onEnd((e) => {
  //       if (e.velocityY > 1000 || e.translationY > SCREEN_HEIGHT * 0.3) {
  //         translateY.value = withTiming(SCREEN_HEIGHT, { duration: 200 })
  //         runOnJS(setVisible)(false)
  //       } else {
  //         translateY.value = withSpring(0, { damping: 15 })
  //       }
  //     })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  if (!visible) return null;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={close}
    >
      <Pressable style={styles.backdrop} onPress={close}>
        {/* <GestureDetector gesture={gesture}> */}
        <Animated.View
          style={[
            styles.modalContainer,
            animatedStyle,
            { paddingBottom: Platform.OS === "ios" ? keyboardOffset : 0 },
          ]}
        >
          {children}
        </Animated.View>
        {/* </GestureDetector> */}
      </Pressable>
    </Modal>
  );
});

export default BottomModalKeyboardAware;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: SCREEN_HEIGHT * 0.8,
  },
});
