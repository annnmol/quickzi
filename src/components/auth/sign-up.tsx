import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import AppText from "../ui/text";
import AppButton from "../ui/button";
import AppTextInput from "../ui/textinput";
import { theme } from "../../lib/theme";
import { tokens } from "../../lib/tokens";
import { navigate, goBack } from "../../lib/navigation";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords don't match");
      return;
    }

    // TODO: Implement actual sign-up logic
    Alert.alert("Success", "Account created successfully!", [
      {
        text: "OK",
        onPress: () => navigate("protected"),
      },
    ]);
  };

  const navigateToSignIn = () => {
    goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AppText variant="heading" style={styles.title}>
          Create Account
        </AppText>
        <AppText style={styles.subtitle}>
          Sign up to get started with Quickzi
        </AppText>

        <View style={styles.form}>
          <AppTextInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            containerStyle={styles.input}
          />

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

          <AppTextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            containerStyle={styles.input}
          />

          <AppButton onPress={handleSignUp} style={styles.signUpButton}>
            Create Account
          </AppButton>

          <View style={styles.signInContainer}>
            <AppText>Already have an account? </AppText>
            <AppButton
              variant="ghost"
              textThemeKey="primary"
              onPress={navigateToSignIn}
              style={styles.signInButton}
            >
              Sign In
            </AppButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

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
  signUpButton: {
    marginTop: tokens.spacing8,
    marginBottom: tokens.spacing24,
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signInButton: {
    paddingHorizontal: 0,
  },
});
