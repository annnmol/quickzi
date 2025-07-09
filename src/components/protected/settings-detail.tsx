import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppText from "../ui/text";
import AppButton from "../ui/button";
import { theme } from "../../lib/theme";
import { tokens } from "../../lib/tokens";
import { goBack } from "../../lib/navigation";
import KeyboardAwareForm from "./KeyboardAwareForm";
import ModelTest from "../modeltest";

const SettingsDetail = () => {
  const handleGoBack = () => {
    goBack();
  };

  const handleSaveSettings = () => {
    // TODO: Implement save settings logic
    goBack();
  };

  return (
      <ScrollView style={styles.container}>
          {/* <KeyboardAwareForm /> */}
          <ModelTest />
      {/* <View style={styles.content}>
        <AppText variant="heading" style={styles.title}>
          Settings Detail
        </AppText>
        <AppText style={styles.subtitle}>
          This screen is accessed without bottom tabs
        </AppText>

        <View style={styles.settingsSection}>
          <AppText variant="title" style={styles.sectionTitle}>
            Notification Settings
          </AppText>
          <View style={styles.settingItem}>
            <AppText>Push Notifications</AppText>
            <AppText style={styles.settingValue}>On</AppText>
          </View>
          <View style={styles.settingItem}>
            <AppText>Email Notifications</AppText>
            <AppText style={styles.settingValue}>Off</AppText>
          </View>
          <View style={styles.settingItem}>
            <AppText>SMS Notifications</AppText>
            <AppText style={styles.settingValue}>On</AppText>
          </View>
        </View>

        <View style={styles.settingsSection}>
          <AppText variant="title" style={styles.sectionTitle}>
            Privacy Settings
          </AppText>
          <View style={styles.settingItem}>
            <AppText>Profile Visibility</AppText>
            <AppText style={styles.settingValue}>Public</AppText>
          </View>
          <View style={styles.settingItem}>
            <AppText>Data Sharing</AppText>
            <AppText style={styles.settingValue}>Limited</AppText>
          </View>
          <View style={styles.settingItem}>
            <AppText>Location Services</AppText>
            <AppText style={styles.settingValue}>On</AppText>
          </View>
        </View>

        <View style={styles.settingsSection}>
          <AppText variant="title" style={styles.sectionTitle}>
            App Preferences
          </AppText>
          <View style={styles.settingItem}>
            <AppText>Dark Mode</AppText>
            <AppText style={styles.settingValue}>Auto</AppText>
          </View>
          <View style={styles.settingItem}>
            <AppText>Language</AppText>
            <AppText style={styles.settingValue}>English</AppText>
          </View>
          <View style={styles.settingItem}>
            <AppText>Auto-sync</AppText>
            <AppText style={styles.settingValue}>On</AppText>
          </View>
        </View>

        <AppButton
          onPress={handleSaveSettings}
          style={styles.saveButton}
        >
          Save Settings
        </AppButton>

        <AppButton
          onPress={handleGoBack}
          variant="outline"
          style={styles.backButton}
        >
          Go Back
        </AppButton>
      </View> */}
    </ScrollView>
  );
};

export default SettingsDetail;

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
  settingsSection: {
    marginBottom: tokens.spacing24,
  },
  sectionTitle: {
    marginBottom: tokens.spacing16,
    fontWeight: "600",
  },
  settingItem: {
    backgroundColor: theme.card,
    padding: tokens.spacing16,
    borderRadius: tokens.radius8,
    marginBottom: tokens.spacing8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...tokens.shadow0,
  },
  settingValue: {
    fontWeight: "500",
    color: theme.primary,
  },
  saveButton: {
    marginBottom: tokens.spacing12,
  },
  backButton: {
    marginTop: tokens.spacing8,
  },
});
