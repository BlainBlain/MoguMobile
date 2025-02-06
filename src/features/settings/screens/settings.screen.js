import React from "react";
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export const SettingsScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeArea>
        <Text>Settings Screen</Text>
      </SafeArea>
    </SafeAreaProvider>
  );
};
