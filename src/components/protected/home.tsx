import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { theme } from "../../lib/theme";
import { tokens } from "../../lib/tokens";
import AppButton from "../ui/button";
import AppText from "../ui/text";

const Home = () => {
  const navigateToProfile = () => {
    router.push("/(protected)/profile/edit-profile");
  };

  const navigateToSettings = () => {
    router.push("/(protected)/settings/settings-detail");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <AppText variant="heading" style={styles.title}>
          Welcome Home
        </AppText>
        <AppText style={styles.subtitle}>
          This is your dashboard
        </AppText>

        <View style={styles.card}>
          <AppText variant="title" style={styles.cardTitle}>
            Quick Actions
          </AppText>
          <AppButton
            onPress={navigateToProfile}
            style={styles.actionButton}
          >
            Go to Profile (Stack)
          </AppButton>
          <AppButton
            variant="outline"
            onPress={navigateToSettings}
            style={styles.actionButton}
          >
            Settings Detail
          </AppButton>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <AppText variant="heading">24</AppText>
            <AppText>Tasks</AppText>
          </View>
          <View style={styles.statCard}>
            <AppText variant="heading">8</AppText>
            <AppText>Projects</AppText>
          </View>
          <View style={styles.statCard}>
            <AppText variant="heading">95%</AppText>
            <AppText>Complete</AppText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

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
  card: {
    backgroundColor: theme.card,
    padding: tokens.spacing20,
    borderRadius: tokens.radius12,
    marginBottom: tokens.spacing20,
    ...tokens.shadow2,
  },
  cardTitle: {
    marginBottom: tokens.spacing16,
    fontWeight: "600",
  },
  actionButton: {
    marginBottom: tokens.spacing12,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    backgroundColor: theme.card,
    padding: tokens.spacing16,
    borderRadius: tokens.radius8,
    alignItems: "center",
    flex: 1,
    marginHorizontal: tokens.spacing4,
    ...tokens.shadow0,
  },
});
