import React, { createContext, useReducer, useContext } from "react";

const ReservationContext = createContext();

export const reservationsReducer = (state, action) => {
  switch (action.type) {
    case "SET_RESERVATIONS":
      return {
        reservations: action.payload,
      };
    case "ADD_RESERVATION":
      return {
        reservations: [action.payload, ...state.reservations],
      };
    default:
      return state;
  }
};

export const ReservationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reservationsReducer, {
    reservations: [],
  });

  return (
    <ReservationContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationContext = () => useContext(ReservationContext);