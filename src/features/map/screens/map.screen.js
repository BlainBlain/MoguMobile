import React, { useContext, useState, useEffect, useRef } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components/native";

import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
  height: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const mapRef = useRef(null);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    const { lat, lng, viewport } = location;
    const latDelta = viewport.northeast.lat - viewport.southwest.lat;

    const newRegion = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: latDelta,
      longitudeDelta: 0.02,
    };

    setRegion(newRegion);
    if (mapRef.current) {
      mapRef.current.animateToRegion(newRegion, 1000);
    }
  }, [location]);
  return (
    <>
      <Search />
      {region && (
        <Map ref={mapRef} region={region}>
          {restaurants.map((restaurant) => (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("Restaurants", {
                    screen: "RestaurantsDetail",
                    params: { restaurant },
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          ))}
        </Map>
      )}
    </>
  );
};
