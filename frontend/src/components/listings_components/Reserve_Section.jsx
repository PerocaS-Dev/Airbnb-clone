import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { useEffect } from "react";
import "./Reserve_Section.css";

const Reserve_Section = () => {
  

  return (
    <div className="reserve_section">
      <div className="reserve_container">
        <div className="reserve_header">
          <span>
            {" "}
            <strong>$75</strong> / night
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
              <input id="checkInOut" placeholder="Select date range" />
            </div>
            <div className="checkout_box">
              <p className="label">CHECKOUT</p>
              <input id="checkInOut" placeholder="Select date range" />
            </div>
            <div className="guests_box">
              <div className="guest_text">
                <p className="label">GUESTS</p>
                <p className="date">2 guests</p>
              </div>
              <KeyboardArrowDownOutlinedIcon className="dropdown_icon" />
            </div>
          </div>
        </div>

        <div className="reserve_button">
          <p>Reserve</p>
        </div>

        <div className="message">
          <p>You won't be charged yet</p>
        </div>

        <div className="calculator">
          <div className="cost_list">
            <div className="payments_per_night payment_item">
              <span>$79 x 7nights</span>
              <span>$555</span>
            </div>
            <div className="payment_item">
              <span>Weekly discount</span>
              <span className="discount">-$28</span>
            </div>
            <div className="payment_item">
              <span>Cleaning fee</span>
              <span>$62</span>
            </div>
            <div className="payment_item">
              <span>Service fee</span>
              <span>$83</span>
            </div>
            <div className="payment_item">
              <span>Occupancy taxes and fees</span>
              <span>$29</span>
            </div>
          </div>

          <div className="cost_total">
            <span>Total</span>
            <span>$701</span>
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
