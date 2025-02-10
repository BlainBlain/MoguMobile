import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";

import { useFonts } from "expo-font";
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand";
import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { OverpassMono_400Regular } from "@expo-google-fonts/overpass-mono";

import { theme } from "./src/infrastructure/theme/index";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { Navigation } from "./src/infrastructure/navigation";

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
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </ThemeProvider>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </>
  );
}
