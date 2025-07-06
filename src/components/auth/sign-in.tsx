import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import AppText from "../ui/text";
import AppButton from "../ui/button";
import AppTextInput from "../ui/textinput";
import { theme } from "../../lib/theme";
import { tokens } from "../../lib/tokens";
import { navigate } from "../../lib/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("a@a.com");
  const [password, setPassword] = useState("123456");

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    // TODO: Implement actual sign-in logic
    Alert.alert("Success", "Sign in successful!", [
      {
        text: "OK",
        onPress: () => navigate("protected"),
      },
    ]);
  };

  const navigateToSignUp = () => {
    navigate("sign-up");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AppText variant="heading" style={styles.title}>
          Welcome Back
        </AppText>
        <AppText style={styles.subtitle}>
          Sign in to your account to continue
        </AppText>

        <View style={styles.form}>
          <AppTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyle={styles.input}
          />

          <AppTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            containerStyle={styles.input}
          />

          <AppButton onPress={handleSignIn} style={styles.signInButton}>
            Sign In
          </AppButton>

          <View style={styles.signUpContainer}>
            <AppText>Don't have an account? </AppText>
            <AppButton
              variant="ghost"
              textThemeKey="primary"
              onPress={navigateToSignUp}
              style={styles.signUpButton}
            >
              Sign Up
            </AppButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: tokens.spacing24,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: tokens.spacing8,
    fontWeight: "700",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: tokens.spacing32,
    opacity: 0.7,
  },
  form: {
    width: "100%",
  },
  input: {
    marginBottom: tokens.spacing16,
  },
  signInButton: {
    marginTop: tokens.spacing8,
    marginBottom: tokens.spacing24,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
    paddingHorizontal: 0,
  },
});
