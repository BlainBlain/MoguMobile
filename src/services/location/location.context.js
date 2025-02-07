import React, { createContext, useState } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    if (!searchKeyword.length) {
      setIsLoading(false);
      return;
    }
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setLocation(result);
        setIsLoading(false);
        console.log(result);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
