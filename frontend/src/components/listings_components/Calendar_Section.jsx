import React from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { useEffect } from "react";
import "./Calendar_Section.css";

const Calendar_Section = () => {


  return (
    <>
      <div className="seven_nights_section">
        <div className="main_calendar_section">
          <h3>7 nights in New York</h3>
          <div id="inlineCalendar"></div>
        </div>

        <div className="reserve_form">
          
        </div>
      </div>
    </>
  );
};

export default Calendar_Section;
