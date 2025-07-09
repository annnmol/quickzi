import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppText from "../ui/text";
import AppButton from "../ui/button";
import { theme } from "../../lib/theme";
import { tokens } from "../../lib/tokens";
import { router } from "expo-router";

const SearchDetail = () => {
  const handleGoBack = () => {
    router.back();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <AppText variant="heading" style={styles.title}>
          Search Results
        </AppText>
        <AppText style={styles.subtitle}>
          Detailed search results without bottom tabs
        </AppText>

        <View style={styles.searchResults}>
          <AppText variant="title" style={styles.resultsTitle}>
            Search Results (24 found)
          </AppText>
          
          {[1, 2, 3, 4, 5].map((item) => (
            <View key={item} style={styles.resultItem}>
              <AppText variant="title" style={styles.resultTitle}>
                Result Item {item}
              </AppText>
              <AppText style={styles.resultDescription}>
                This is a description of search result item {item}. It contains
                relevant information about the search query.
              </AppText>
              <AppText style={styles.resultMeta}>
                Category: Sample • Date: Jan {item + 5}, 2024
              </AppText>
            </View>
          ))}
        </View>

        <AppButton
          onPress={handleGoBack}
          variant="outline"
          style={styles.backButton}
        >
          Go Back to Search
        </AppButton>
      </View>
    </ScrollView>
  );
};

export default SearchDetail;

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
  searchResults: {
    marginBottom: tokens.spacing24,
  },
  resultsTitle: {
    marginBottom: tokens.spacing16,
    fontWeight: "600",
  },
  resultItem: {
    backgroundColor: theme.card,
    padding: tokens.spacing16,
    borderRadius: tokens.radius8,
    marginBottom: tokens.spacing12,
    ...tokens.shadow0,
  },
  resultTitle: {
    marginBottom: tokens.spacing8,
    fontWeight: "600",
  },
  resultDescription: {
    marginBottom: tokens.spacing8,
    lineHeight: 20,
  },
  resultMeta: {
    fontSize: 12,
    opacity: 0.7,
  },
  backButton: {
    marginTop: tokens.spacing8,
  },
});
