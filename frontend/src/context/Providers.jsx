import React from "react";
import { DateProvider } from "./DateContext";
import { AuthProvider } from "./AuthContext";
import { ListingProvider } from "./ListingContext";
import { ReservationProvider } from "./ReservationContext";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ListingProvider>
        <ReservationProvider>
          <DateProvider>
            {children}
            </DateProvider>
        </ReservationProvider>
      </ListingProvider>
    </AuthProvider>
  );
};

export default Providers;
