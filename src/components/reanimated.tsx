// src/components/ReanimatedTest.tsx
import React from "react"
import { View, Button } from "react-native"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from "react-native-reanimated"

export default function ReanimatedTest() {
  const offset = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }]
  }))

  return (
    <View style={{ padding: 20 }}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: "tomato",
            borderRadius: 16,
            marginBottom: 16
          },
          animatedStyles
        ]}
      />
      <Button title="Animate" onPress={() => {
        offset.value = withSpring(Math.random() * 200)
      }} />
    </View>
  )
}
