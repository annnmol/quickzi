import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppText from "../ui/text";
import AppButton from "../ui/button";
import AppTextInput from "../ui/textinput";
import { theme } from "../../lib/theme";
import { tokens } from "../../lib/tokens";
import { goBack } from "../../lib/navigation";
import { router } from "expo-router";

const EditProfile = () => {
  const [name, setName] = React.useState("John Doe");
  const [email, setEmail] = React.useState("john.doe@example.com");
  const [phone, setPhone] = React.useState("+1 (555) 123-4567");
  const [location, setLocation] = React.useState("New York, NY");

  const handleGoBack = () => {
   router.back();
  };

  const handleSave = () => {
    // TODO: Implement save logic
    router.back();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <AppText variant="heading" style={styles.title}>
          Edit Profile
        </AppText>
        <AppText style={styles.subtitle}>
          Update your profile information
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
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            containerStyle={styles.input}
          />

          <AppTextInput
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
            containerStyle={styles.input}
          />
        </View>

        <AppButton
          onPress={handleSave}
          style={styles.saveButton}
        >
          Save Changes
        </AppButton>

        <AppButton
          onPress={handleGoBack}
          variant="outline"
          style={styles.cancelButton}
        >
          Cancel
        </AppButton>
      </View>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  content: {
    padding: tokens.spacing20,
  },
  title: {
    textAlign: "center",
    marginBottom: tokens.spacing8,
    fontWeight: "700",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: tokens.spacing24,
    opacity: 0.7,
  },
  form: {
    marginBottom: tokens.spacing24,
  },
  input: {
    marginBottom: tokens.spacing16,
  },
  saveButton: {
    marginBottom: tokens.spacing12,
  },
  cancelButton: {
    marginTop: tokens.spacing8,
  },
});
