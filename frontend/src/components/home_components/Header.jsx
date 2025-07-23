import React from "react";
import Link from "react-router-dom";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import logo from "../../assets/logo.svg";
import redLogo from "../../assets/red_airbnb_logo.svg";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  //Page specific conditions

  const isAdminPage = path.startsWith("/admin");
  const isHotelInfoPage = path.startsWith("/listing");
  const isLocationsPage = path.startsWith("/locations");
  const isLogin = path.startsWith("/login");
  const isCreateListing = path.startsWith("/create-listing")

  //Combining conditions that share the same style
  const isMinimalHeader =
    isAdminPage || isHotelInfoPage || isLocationsPage || isLogin || isCreateListing;

  //choosing the logo variant based on the header background
  const logoSrc = isMinimalHeader ? redLogo : logo;

  //Getting the location from  the url
  const searchParams = new URLSearchParams(location.search);
  const loc = searchParams.get("location") || "Anywhere";

  //Getting the extra data values from state
  const checkIn = location.state?.checkIn;
  const checkOut = location.state?.checkOut;
  const guests = location.state?.guest_count || "1";

  const formattedCheckIn = checkIn
    ? format(new Date(checkIn), "MMM d")
    : "start date";
  const formattedCheckOut = checkOut
    ? format(new Date(checkOut), "MMM d")
    : "end date";

  return (
    <header
      className={`header ${isMinimalHeader ? "header-light" : "header-dark"}`}
    >
      <div className="header-container">
        <div className="logo_wrapper">
          <img className="logo" src={logoSrc} alt="airbnb logo" />
        </div>

        {!isMinimalHeader && (
          <div className="nav_options">
            <span className="nav_option">Places to stay</span>
            <span className="nav_option">Experience</span>
            <span className="nav_option">Online Experiences</span>
          </div>
        )}

        {isMinimalHeader && isLocationsPage && (
          <div className="search_info">
            {/* This is where I want to display the query params */}
            <span className="search_tag">{loc}</span>
            <span className="search_tag date_tag">
              {formattedCheckIn} → {formattedCheckOut}
            </span>
            <span className="search_tag">{guests} guest(s)</span>
          </div>
        )}

        {isMinimalHeader && !isLogin && (
          <div className="menu_options">
            <span className="menu_option">Become a Host</span>
            <span className="menu_option">
              <LanguageIcon sx={{ fontSize: 15 }} />
            </span>
            <span className="menu_option menu_button">
              <span>
                <MenuIcon sx={{ fontSize: 25 }} />
              </span>
              <span>
                <AccountCircleTwoToneIcon sx={{ fontSize: 35 }} />
              </span>
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
