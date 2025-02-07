import React, { useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";
import { Text } from "../../../components/typography/text.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeAreaProvider>
      <SafeArea>
        <Search />
        {error ? (
          <LoadingContainer>
            <Text variant="error">
              Error: {error.message || "Failed to load restaurants."}
            </Text>
          </LoadingContainer>
        ) : isLoading ? (
          <LoadingContainer>
            <ActivityIndicator animating={true} size={50} />
          </LoadingContainer>
        ) : (
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
            keyExtractor={(item) => item.name}
          />
        )}
      </SafeArea>
    </SafeAreaProvider>
  );
};
