import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { spacing } from "./src/utils/sizes";

export default function App() {
  return (
    <SafeAreaProvider s>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    backgroundColor: "red",
    padding: spacing.md,
  },
  list: {
    flex: 1,
    backgroundColor: "green",
    padding: spacing.md,
  },
});
