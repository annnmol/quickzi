import React, { useRef } from "react";
import { View, Button, Text } from "react-native";
import BottomModal, { BottomModalRef } from "@app/src/components/bottom-model";
import BottomModalKeyboardAware from "./bottom-model-keyboard";

export default function ModelTest() {
  const modalRef = useRef<BottomModalRef>(null);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Open Modal" onPress={() => modalRef.current?.open()} />

      <BottomModalKeyboardAware ref={modalRef}>
        <View style={{ padding: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 18, marginBottom: 20 }}>
            Hello from bottom!
          </Text>
          <Button title="Close" onPress={() => modalRef.current?.close()} />
        </View>
      </BottomModalKeyboardAware>
    </View>
  );
}
