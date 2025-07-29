import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_red.css";
import { useDateContext } from "../../context/DateContext";
import { useAuthContext } from "../../context/AuthContext";
import { differenceInCalendarDays } from "date-fns";
import "./Reserve_Section.css";

const Reserve_Section = ({listing}) => {
  const { startDate, endDate, setDates } = useDateContext(); //using my custom context
  const {isLoggedIn, user, logout} = useAuthContext();

  const isLoggedInHandler = () =>{
    if(isLoggedIn){
      alert("Your Reservation Is Successful!");
    }else{
      alert("Please login to make a reservation.");
    }
  }

  const handleStartDateChange = (selectedDates) => {
    if (selectedDates.length > 0) {
      setDates(selectedDates[0], endDate);
    }
  };

  const handleEndDateChange = (selectedDates) => {
    if (selectedDates.length > 0) {
      setDates(startDate, selectedDates[0]);
    }
  };

  const pricePerNight = listing.pricePerNight;
  const cleaningFee = 62;
  const serviceFee = 83;
  const occupancyFee = 29;

  const nights =
    startDate && endDate ? differenceInCalendarDays(endDate, startDate) : 0;

  const basePrice = nights * pricePerNight;
  const discount = nights >= 7 ? 28 : 0;
  const total = basePrice - discount + cleaningFee + serviceFee + occupancyFee;

  return (
    <div className="reserve_section">
      <div className="reserve_container">
        <div className="reserve_header">
          <span>
            {" "}
            <strong>${pricePerNight}</strong> / night
          </span>
          <span>
            <StarOutlineIcon className="add_color" sx={{ fontSize: 15 }} /> 5.0
            • 7 reviews
          </span>
        </div>

        <div className="reserve_form">
          <div className="reserve_grid">
            <div className="checkin_box">
              <p className="label">CHECK-IN</p>
              <Flatpickr
                className="option_action date_picker_input"
                placeholder="Add date"
                value={[startDate]}
                onChange={handleStartDateChange}
                options={{
                  minDate: "today",
                  dateFormat: "Y-m-d",
                }}
              />
            </div>
            <div className="checkout_box">
              <p className="label">CHECKOUT</p>
              <Flatpickr
                className="option_action date_picker_input"
                placeholder="Add date"
                value={[endDate]}
                onChange={handleEndDateChange}
                options={{
                  minDate: "today",
                  dateFormat: "Y-m-d",
                }}
              />
            </div>
            <div className="guests_box">
              <div className="guest_text">
                <select name="guests" id="guests">
                  <option value="no_of_guests">1 guest</option>
                  <option value="no_of_guests">2 guests</option>
                  <option value="no_of_guests">3 guests</option>
                  <option value="no_of_guests">5 guests</option>
                  <option value="no_of_guests">6 guests</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <button className="reserve_button" onClick={isLoggedInHandler}>Reserve</button>

        <div className="message">
          <p>You won't be charged yet</p>
        </div>

        <div className="calculator">
          <div className="cost_list">
            <div className="payments_per_night payment_item">
              <span>
                ${pricePerNight} x {nights} {nights === 1 ? "night" : "nights"}
              </span>
              <span>${basePrice}</span>
            </div>

            {discount > 0 && (
              <div className="payment_item">
                <span>Weekly discount</span>
                <span className="discount">-${discount}</span>
              </div>
            )}

            <div className="payment_item">
              <span>Cleaning fee</span>
              <span>${cleaningFee}</span>
            </div>
            <div className="payment_item">
              <span>Service fee</span>
              <span>${serviceFee}</span>
            </div>
            <div className="payment_item">
              <span>Occupancy taxes and fees</span>
              <span>${occupancyFee}</span>
            </div>
          </div>

          <div className="cost_total">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </div>

      <div className="report">
        <span>
          <FlagOutlinedIcon sx={{ fontSize: 20 }} />
        </span>
        <span className="underlined">Report this listing</span>
      </div>
    </div>
  );
};

export default Reserve_Section;
