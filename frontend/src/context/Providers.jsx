import React from "react";
import { DateProvider } from "./DateContext";
import { AuthProvider } from "./AuthContext";
import { ListingProvider } from "./ListingContext";

const Providers = ({ children }) => {
  return (
    <ListingProvider>
      <AuthProvider>
        <DateProvider>
          {children}
        </DateProvider>
      </AuthProvider>
    </ListingProvider>
  );
};

export default Providers;
