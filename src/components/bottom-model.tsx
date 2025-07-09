import React, {
    forwardRef,
    useCallback,
    useImperativeHandle,
    useRef,
    useState
} from "react"
import {
    Animated,
    Dimensions,
    Easing,
    Modal,
    Pressable,
    StyleSheet
} from "react-native"

const SCREEN_HEIGHT = Dimensions.get("window").height

export type BottomModalRef = {
  open: () => void
  close: () => void
}

const BottomModal = forwardRef<BottomModalRef, { children: React.ReactNode }>(
  ({ children }, ref) => {
    const [visible, setVisible] = useState(false)
    const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current

    const open = useCallback(() => {
      setVisible(true)
      Animated.timing(translateY, {
        toValue: 0,
        duration: 280,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic)
      }).start()
    }, [translateY])

    const close = useCallback(() => {
      Animated.timing(translateY, {
        toValue: SCREEN_HEIGHT,
        duration: 150,
        useNativeDriver: true,
        easing: Easing.in(Easing.cubic)
      }).start(() => setVisible(false))
    }, [translateY])

    useImperativeHandle(ref, () => ({ open, close }), [open, close])

    if (!visible) return null

    return (
      <Modal
        transparent
        visible={visible}
        animationType="none"
        onRequestClose={close}
      >
        <Pressable style={styles.backdrop} onPress={close}>
          <Animated.View
            style={[
              styles.modalContainer,
              { transform: [{ translateY }] }
            ]}
          >
            {children}
          </Animated.View>
        </Pressable>
      </Modal>
    )
  }
)

export default BottomModal

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end"
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: SCREEN_HEIGHT * 0.8
  }
})
