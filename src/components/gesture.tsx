// src/components/GestureTest.tsx
import React from "react"
import { StyleSheet, Text } from "react-native"
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler"
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle
} from "react-native-reanimated"

export default function GestureTest() {
  const translateX = useSharedValue(0)

  const panGesture = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX
    },
    onEnd: () => {
      translateX.value = 0
    }
  })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }]
  }))

  return (
    <GestureHandlerRootView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Text style={{ color: "#fff" }}>Drag me</Text>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 120,
    height: 120,
    backgroundColor: "#673AB7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12
  }
})
