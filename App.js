import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { useFonts } from "expo-font";
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand";
import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { OverpassMono_400Regular } from "@expo-google-fonts/overpass-mono";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    BebasNeue_400Regular,
    OverpassMono_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
