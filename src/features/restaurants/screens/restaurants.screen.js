import React, { useContext } from "react";
import { Pressable } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";
import { Text } from "../../../components/typography/text.component";

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

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
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
          renderItem={({ item }) => {
            return (
              <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1 }]}
                onPress={() =>
                  navigation.navigate("RestaurantsDetail", { restaurant: item })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </Pressable>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
