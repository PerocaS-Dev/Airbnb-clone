import React, { useState } from "react";
import "./Search_Menu.css";
import SearchIcon from "@mui/icons-material/Search";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_red.css";
import { useDateContext } from "../../context/DateContext";
import { useNavigate } from "react-router-dom";

const Search_Menu = () => {
  const navigate = useNavigate();
  const locations = [
    "All locations",
    "New York",
    "Paris",
    "Tokyo",
    "Cape Town",
    "Thailand",
  ];
  const [selectedLocation, setSelectedLocation] = useState("");
  const [guests, setGuests] = useState();
  const { startDate, endDate, setDates } = useDateContext(); //using my custom context

  const handleDateChange = (selectedDates) => {
    if (selectedDates.length === 2) {
      setDates(selectedDates[0], selectedDates[1]);
    }
  };

  const handleSearch = () => {
    if (!selectedLocation) {
      alert("Please select a loaction");
      return;
    }

    //building the query string, this is the one that wil be displayed in the url
    const query = new URLSearchParams({
      location: selectedLocation,
    }).toString();

    //This is not going to be on the url but i still need to use it in the header
    const extraData = {
      checkIn: startDate,
      checkOut: endDate,
      guest_count: guests,
    };

    //Navigate with the query string
    navigate(`/locations?${query}`, { state: extraData });
  };

  return (
    <div className="search_menu">
      <div className="menu_container">
        <div className="hotels_selection selection_edge">
          <div className="hotels_menu_selection">
            <span className="option">Locations</span>
            <select
              className="option_action location_select"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">Select a location</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="menu_selection selection_edge">
          <span className="option">Check in</span>
          <Flatpickr
            className="option_action date_picker_input"
            placeholder="Add date"
            value={[startDate]}
            onChange={handleDateChange}
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
            value={[endDate]}
            onChange={handleDateChange}
            options={{
              minDate: "checkInDate || today",
              dateFormat: "Y-m-d",
            }}
          />
        </div>

        <div className="menu_selection">
          <span className="option">Guests</span>
          <input
            className="option_input_action"
            type="number"
            placeholder="Add guests"
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
      </div>

      <div className="search_container" onClick={handleSearch}>
        <SearchIcon sx={{ fontSize: 25 }} />
      </div>
    </div>
  );
};

export default Search_Menu;
