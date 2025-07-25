import React, { useReducer } from "react";
import { createContext, useContext, useState } from "react";

const ListingContext = createContext();

export const listingsReducer = (state, action) => {
  switch (action.type) {
    case "SET_LISTINGS":
      return {
        listings: action.payload,
      };
    case "Create_LISTING":
      return {
        listings:[action.payload, ...state.listings]
      };
    default:
      return state
  }
};

export const ListingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listingsReducer, {
    listings: [],
  });

  return (
    <ListingContext.Provider value={{...state, dispatch}}>{children}</ListingContext.Provider>
  );
};

export const useListingContext = () => useContext(ListingContext);
