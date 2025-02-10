import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantsDetailScreen } from "../../features/restaurants/screens/restaurants-detail.screen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => (
  <RestaurantsStack.Navigator
    screenOptions={{
      ...TransitionPresets.ModalSlideFromBottomIOS,
      headerShown: false,
    }}
  >
    <RestaurantsStack.Screen
      name="RestaurantsList"
      component={RestaurantsScreen}
    />
    <RestaurantsStack.Screen
      name="RestaurantsDetail"
      component={RestaurantsDetailScreen}
    />
  </RestaurantsStack.Navigator>
);
