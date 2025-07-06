import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppText from "../ui/text";
import AppButton from "../ui/button";
import { theme } from "../../lib/theme";
import { tokens } from "../../lib/tokens";
import { navigate } from "../../lib/navigation";

const Settings = () => {
  const navigateToSettingsDetail = () => {
    navigate("settings-detail");
  };

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate("auth");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <AppText variant="heading" style={styles.title}>
          Settings
        </AppText>
        <AppText style={styles.subtitle}>
          Manage your preferences
        </AppText>

        <View style={styles.settingsGroup}>
          <AppText variant="title" style={styles.groupTitle}>
            Account
          </AppText>
          <View style={styles.settingItem}>
            <AppText>Profile Settings</AppText>
          </View>
          <View style={styles.settingItem}>
            <AppText>Privacy & Security</AppText>
          </View>
          <View style={styles.settingItem}>
            <AppText>Notifications</AppText>
          </View>
        </View>

        <View style={styles.settingsGroup}>
          <AppText variant="title" style={styles.groupTitle}>
            App Settings
          </AppText>
          <View style={styles.settingItem}>
            <AppText>Theme</AppText>
          </View>
          <View style={styles.settingItem}>
            <AppText>Language</AppText>
          </View>
          <View style={styles.settingItem}>
            <AppText>Data Usage</AppText>
          </View>
        </View>

        <AppButton
          onPress={navigateToSettingsDetail}
          style={styles.detailButton}
          variant="outline"
        >
          Settings Detail
        </AppButton>

        <AppButton
          onPress={handleLogout}
          style={styles.logoutButton}
          variant="danger"
        >
          Logout
        </AppButton>
      </View>
    </ScrollView>
  );
};

export default Settings;

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
  settingsGroup: {
    marginBottom: tokens.spacing24,
  },
  groupTitle: {
    marginBottom: tokens.spacing12,
    fontWeight: "600",
  },
  settingItem: {
    backgroundColor: theme.card,
    padding: tokens.spacing16,
    borderRadius: tokens.radius8,
    marginBottom: tokens.spacing8,
    ...tokens.shadow0,
  },
  detailButton: {
    marginBottom: tokens.spacing12,
  },
  logoutButton: {
    marginTop: tokens.spacing8,
  },
});
