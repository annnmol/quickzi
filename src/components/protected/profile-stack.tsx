import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppText from "../ui/text";
import AppButton from "../ui/button";
import { theme } from "../../lib/theme";
import { tokens } from "../../lib/tokens";
import { goBack, navigate } from "../../lib/navigation";
import { router } from "expo-router";

const ProfileStack = () => {
  const handleGoBack = () => {
    router.back();
  };

  const navigateToEditProfile = () => {
    router.push("/(protected)/profile/edit-profile");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <AppText variant="heading" style={styles.title}>
          Profile Details
        </AppText>
        <AppText style={styles.subtitle}>
          This screen is accessed from the Home tab but doesn't show bottom tabs
        </AppText>

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <AppText variant="heading" style={styles.avatarText}>
              JD
            </AppText>
          </View>
          <AppText variant="title" style={styles.name}>
            John Doe
          </AppText>
          <AppText style={styles.email}>john.doe@example.com</AppText>
        </View>

        <View style={styles.infoSection}>
          <AppText variant="title" style={styles.sectionTitle}>
            Profile Information
          </AppText>
          <View style={styles.infoItem}>
            <AppText style={styles.infoLabel}>Phone:</AppText>
            <AppText>+1 (555) 123-4567</AppText>
          </View>
          <View style={styles.infoItem}>
            <AppText style={styles.infoLabel}>Location:</AppText>
            <AppText>New York, NY</AppText>
          </View>
          <View style={styles.infoItem}>
            <AppText style={styles.infoLabel}>Joined:</AppText>
            <AppText>January 2024</AppText>
          </View>
        </View>

        <AppButton onPress={navigateToEditProfile} style={styles.editButton}>
          Edit Profile
        </AppButton>

        <AppButton
          onPress={handleGoBack}
          variant="outline"
          style={styles.backButton}
        >
          Go Back
        </AppButton>
      </View>
    </ScrollView>
  );
};

export default ProfileStack;

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
  profileCard: {
    backgroundColor: theme.card,
    padding: tokens.spacing24,
    borderRadius: tokens.radius12,
    alignItems: "center",
    marginBottom: tokens.spacing24,
    ...tokens.shadow2,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: tokens.spacing16,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "700",
  },
  name: {
    marginBottom: tokens.spacing4,
    fontWeight: "600",
  },
  email: {
    opacity: 0.7,
  },
  infoSection: {
    marginBottom: tokens.spacing24,
  },
  sectionTitle: {
    marginBottom: tokens.spacing16,
    fontWeight: "600",
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: tokens.spacing12,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  infoLabel: {
    fontWeight: "500",
  },
  editButton: {
    marginBottom: tokens.spacing12,
  },
  backButton: {
    marginTop: tokens.spacing8,
  },
});
