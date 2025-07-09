import React, { useState } from "react";
import "./Search_Menu.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_red.css";

const Search_Menu = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div className="search_menu">
      <div className="menu_container">
        <div className="hotels_selection selection_edge">
          <div className="hotels_menu_selection">
            <span className="option">Hotels</span>
            <span className="option_action">Select Hotel</span>
          </div>
          <div className="icon">
            <ExpandMoreIcon className="more_icon" sx={{ fontSize: 25 }} />
          </div>
        </div>

        <div className="menu_selection selection_edge">
          <span className="option">Check in</span>
          <Flatpickr
            className="option_action date_picker_input"
            placeholder="Add date"
            value={checkInDate}
            onChange={([date]) => setCheckInDate(date)}
            options={{
            minDate: "today",
            dateFormat: "Y-m-d",
            }}
          />
        </div>

        <div className="menu_selection selection_edge">
          <span className="option">Check out</span>
          <Flatpickr
            className="option_action date_picker_input"
            placeholder="Add date"
            value={checkOutDate}
            onChange={([date]) => setCheckOutDate(date)}
            options={{
              minDate: "checkInDate || today",
              dateFormat: "Y-m-d",
            }}
          />
        </div>

        <div className="menu_selection">
          <span className="option">Guests</span>
          <span className="option_action">Add guests</span>
        </div>
      </div>

      <div className="search_container">
        <SearchIcon sx={{ fontSize: 25 }} />
      </div>
    </div>
  );
};

export default Search_Menu;
