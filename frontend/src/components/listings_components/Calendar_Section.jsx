import React from "react";
import { useState } from "react";
import { enUS } from "date-fns/locale";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css
import "react-date-range/dist/theme/default.css"; // theme css
import "./Calendar_Section.css";

const Calendar_Section = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <>
      <div className="seven_nights_section">
        <div className="main_calendar_section">
          <h3>7 nights in New York</h3>
          <div id="inlineCalendar">
            <p>
            {range[0].startDate.toDateString()} –{" "}
              {range[0].endDate.toDateString()}
            </p>
          </div>
        </div>

        <div className="reserve_form">
          <DateRange
            locale={enUS}
            editableDateInputs={true}
            onChange={(item) => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            rangeColors={["#000"]} // black selected range like Airbnb
          />
        </div>
      </div>
    </>
  );
};

export default Calendar_Section;
