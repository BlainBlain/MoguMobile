import React from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const renderLeftIcon = (icon) => (props) => (
  <List.Icon {...props} icon={icon} />
);

const MenuAccordion = ({ title, icon, expanded, onPress, items }) => (
  <List.Accordion
    title={title}
    left={renderLeftIcon(icon)}
    expanded={expanded}
    onPress={onPress}
  >
    {items.map((item, index) => (
      <List.Item key={index} title={item} />
    ))}
  </List.Accordion>
);

export const RestaurantsDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = React.useState(false);
  const [lunchExpanded, setLunchExpanded] = React.useState(false);
  const [dinnerExpanded, setDinnerExpanded] = React.useState(false);
  const [drinksExpanded, setDrinksExpanded] = React.useState(false);

  const { restaurant = {} } = route.params;

  const menuSections = [
    {
      title: "Breakfast",
      icon: "bread-slice",
      expanded: breakfastExpanded,
      onPress: () => setBreakfastExpanded(!breakfastExpanded),
      items: ["Pancakes", "Bacon and Eggs"],
    },
    {
      title: "Lunch",
      icon: "food-fork-drink",
      expanded: lunchExpanded,
      onPress: () => setLunchExpanded(!lunchExpanded),
      items: ["Fried Chicken", "Beef Steak"],
    },
    {
      title: "Dinner",
      icon: "hamburger",
      expanded: dinnerExpanded,
      onPress: () => setDinnerExpanded(!dinnerExpanded),
      items: ["Burger", "Shawarma"],
    },
    {
      title: "Drinks",
      icon: "cup",
      expanded: drinksExpanded,
      onPress: () => setDrinksExpanded(!drinksExpanded),
      items: ["Orange Juice", "Coca Cola"],
    },
  ];

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section title="Menu">
          {menuSections.map((section, index) => (
            <MenuAccordion key={index} {...section} />
          ))}
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
