import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  TextInput,
  Animated,
  Text,
} from "react-native";
import useAnimatedKeyboardOffset from "@app/src/components/hooks/useAnimatedKeyboardOffset";

export default function KeyboardAwareForm() {
  const animatedTranslateY = useAnimatedKeyboardOffset(0.84);

  return (
    <>
      <Animated.ScrollView
        style={{ transform: [{ translateY: animatedTranslateY }] }}
        contentContainerStyle={styles.container}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima
          architecto ut magnam voluptatibus ea dolorum, accusamus voluptatem
          blanditiis aliquid, ratione amet aliquam reprehenderit assumenda
          eligendi quasi debitis provident aspernatur necessitatibus et? Fugiat
          quibusdam recusandae distinctio explicabo ratione voluptates eveniet
          non blanditiis consequuntur culpa, aliquam dolores eius! Consectetur
          id nostrum laborum incidunt quod explicabo tempora laudantium
          assumenda. Quasi saepe inventore, explicabo optio corrupti nihil
          ipsum, ducimus earum corporis tempora hic quae quam sint recusandae
          illum laudantium cum fuga molestiae iusto nostrum natus itaque quia!
          Odit consequuntur facere dignissimos rerum error. Veniam, commodi
          fugit officia dolor dolorum molestiae perferendis ab pariatur tempore
          inventore dolore reiciendis dignissimos dolores accusamus repellendus
          quam modi iste aperiam voluptates consequatur ipsum nisi maiores
          harum. Voluptates, ex. Laudantium eveniet temporibus dolorum aperiam
          modi? Tempora corporis cum amet rerum consectetur. Corporis nulla
          alias, expedita doloribus totam impedit porro aliquam sequi ex
          eligendi distinctio ipsa dignissimos odio soluta incidunt beatae at
          quaerat consequatur, commodi harum? Non nostrum quaerat cumque optio
          ipsa itaque explicabo, eius, voluptas quis commodi laudantium vero
          ipsam architecto sed odio. Debitis, similique voluptatem provident
          obcaecati quasi nesciunt temporibus earum, ratione laboriosam corporis
          sed. Cupiditate beatae incidunt quisquam corporis temporibus quaerat
          architecto voluptates officiis et. Dignissimos, nemo!
        </Text>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
});
