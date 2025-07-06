import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppText from "../ui/text";
import AppButton from "../ui/button";
import { theme } from "../../lib/theme";
import { tokens } from "../../lib/tokens";
import { navigate } from "../../lib/navigation";

const Search = () => {
  const navigateToSearchDetail = () => {
    navigate("search-detail");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <AppText variant="heading" style={styles.title}>
          Search & Discover
        </AppText>
        <AppText style={styles.subtitle}>
          Find what you're looking for
        </AppText>

        <View style={styles.searchCategories}>
          <View style={styles.categoryCard}>
            <AppText variant="title">Recent</AppText>
            <AppText style={styles.categoryDescription}>
              Your recent searches
            </AppText>
          </View>
          
          <View style={styles.categoryCard}>
            <AppText variant="title">Popular</AppText>
            <AppText style={styles.categoryDescription}>
              Trending searches
            </AppText>
          </View>
          
          <View style={styles.categoryCard}>
            <AppText variant="title">Categories</AppText>
            <AppText style={styles.categoryDescription}>
              Browse by category
            </AppText>
          </View>
        </View>

        <AppButton
          onPress={navigateToSearchDetail}
          style={styles.detailButton}
        >
          Go to Search Detail
        </AppButton>
      </View>
    </ScrollView>
  );
};

export default Search;

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
  searchCategories: {
    marginBottom: tokens.spacing24,
  },
  categoryCard: {
    backgroundColor: theme.card,
    padding: tokens.spacing16,
    borderRadius: tokens.radius8,
    marginBottom: tokens.spacing12,
    ...tokens.shadow0,
  },
  categoryDescription: {
    marginTop: tokens.spacing4,
    opacity: 0.7,
  },
  detailButton: {
    marginTop: tokens.spacing16,
  },
});
