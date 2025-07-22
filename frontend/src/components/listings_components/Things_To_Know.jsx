import React, { useState } from "react";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SocialDistanceOutlinedIcon from "@mui/icons-material/SocialDistanceOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import "./Things_To_Know.css";

const Things_To_Know = () => {
  return (
    <div className="things_to_know">
      <span className="things_to_know_title">Things to know</span>

      <div className="things-container">
        <div className="section">
          <p>
            <strong>House rules</strong>
          </p>
          <ul>
            <li>
              <AccessTimeOutlinedIcon sx={{ fontSize: 20 }} /> Check-in: After
              4:00 PM
            </li>
            <li>
              <AccessTimeOutlinedIcon sx={{ fontSize: 20 }} /> Checkout: 10:00
              AM
            </li>
            <li>
              <DoorFrontOutlinedIcon sx={{ fontSize: 20 }} /> Self check-in with
              lockbox
            </li>
            <li>
              <ShoppingCartOutlinedIcon sx={{ fontSize: 20 }} /> Not suitable
              for infants (under 2 years)
            </li>
            <li>
              <WhatshotOutlinedIcon sx={{ fontSize: 20 }} /> No smoking
            </li>
            <li>
              <PetsOutlinedIcon sx={{ fontSize: 20 }} /> No pets
            </li>
            <li>
              <CelebrationOutlinedIcon sx={{ fontSize: 20 }} /> No parties or
              events
            </li>
          </ul>
        </div>

        <div className="section">
          <p>
            <strong>Health & safety</strong>
          </p>
          <ul>
            <li>
              <AutoAwesomeOutlinedIcon sx={{ fontSize: 20 }} /> Committed to
              Airbnb’s enhanced cleaning process.
            </li>
            <li>
              <SocialDistanceOutlinedIcon sx={{ fontSize: 20 }} /> Airbnb’s
              COVID-19 guidelines apply
            </li>
            <li>
              <AirOutlinedIcon sx={{ fontSize: 20 }} /> Carbon monoxide alarm
            </li>
            <li>
              <AlbumOutlinedIcon sx={{ fontSize: 20 }} /> Smoke alarm
            </li>
            <li>
              <CreditCardOutlinedIcon sx={{ fontSize: 20 }} /> Security deposit
              – up to $566
            </li>
          </ul>

          <span className="show_more">
            <p>
              <strong>show more</strong>
            </p>
          </span>
        </div>

        <div className="section">
          <p>
            <strong>Cancellation policy</strong>
          </p>
          <ul>
            <li>Free cancellation before Feb 14</li>
          </ul>

          <span className="show_more">
            <p>
              <strong>show more</strong>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Things_To_Know;
