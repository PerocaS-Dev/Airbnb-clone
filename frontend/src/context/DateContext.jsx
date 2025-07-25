import React from 'react'
import { createContext, useContext, useState } from 'react'

const DateContext = createContext();

export const DateProvider = ({children}) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const setDates = (start, end) =>{
        setStartDate(start);
        setEndDate(end);
    };

    const clearDates = () =>{
      setStartDate(null);
      setEndDate(null);
    };

  return (
    <DateContext.Provider
    value={{
      startDate,
      endDate,
      setStartDate,
      setEndDate,
      setDates,
      clearDates,
    }}
    
    >
      {children}
    </DateContext.Provider>
  )
}

export const useDateContext = () => useContext(DateContext);