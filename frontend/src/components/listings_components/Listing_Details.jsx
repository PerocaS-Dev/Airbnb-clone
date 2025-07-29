import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import DoorBackOutlinedIcon from "@mui/icons-material/DoorBackOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import PetsIcon from "@mui/icons-material/Pets";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import DirectionsBikeOutlinedIcon from "@mui/icons-material/DirectionsBikeOutlined";
import Reserve_Section from "./Reserve_Section";
import Flatpickr from "react-flatpickr";
import { DEFAULT_HOST_AVATAR } from "../../utils/defaultAssets";
import "flatpickr/dist/themes/material_red.css";
import "./Listing_Details.css";
import Calendar_Section from "./Calendar_Section";

const Listing_Details = ({listing}) => {
  return (
    <div className="listing_detail">
      <div className="listing_header">
        <div className="listing_title">
          <h2>{listing.title}</h2>
        </div>
        <div className="listing_header_details">
          <span>
            {" "}
            <StarOutlineIcon className="add_color" sx={{ fontSize: 15 }} />{" "}
            {listing.rating} • {listing.ratingCount} reviews •{" "}
            <WorkspacePremiumIcon className="add_color" sx={{ fontSize: 15 }} />{" "}
            Superhost • {listing.city}
          </span>
          <span>
            {" "}
            <IosShareOutlinedIcon sx={{ fontSize: 15 }} /> Share{" "}
            <FavoriteBorderOutlinedIcon sx={{ fontSize: 15 }} /> Save
          </span>
        </div>
      </div>

      <div className="listings_image_gallery">
        <div className="grid_gallery">
          <div className="main_image">
            <img
              src={listing.mainImage}
              alt="Main View"
            />
          </div>
          <div className="grid_right">
            <img
              src={listing.additionalImages.bathroom}
              alt="Bathroom"
            />
            <img
              src={listing.additionalImages.livingroom}
              alt="Living Room"
            />
            <img
              src={listing.additionalImages.kitchen}
              alt="Kitchen"
            />
            <img
              src={listing.additionalImages.view}
              alt="View"
            />
          </div>
        </div>
      </div>

      <div className="more_listing_info">
        <div className="listing_info">
          <div className="hosting_info">
            <div className="hosted_by">
              <span className="hosted_by_title">
                {listing.apartmentType} unit hosted by {listing.host?.name}
              </span>
              <span className="hosted_by_house_info">
                {" "}
                {listing.guests} guests • {listing.bedroomCount} bedroom •{" "}
                {listing.bathroomCount} bath
              </span>
            </div>
            <div className="host_image">
              <img src={listing.host?.avatar || DEFAULT_HOST_AVATAR} alt="" />
            </div>
          </div>

          <div className="booking_details">
            <div className="booking_detail">
              <HomeOutlinedIcon sx={{ fontSize: 25 }} />
              <div className="b_details">
                <span className="detail_title">{listing.apartmentType}</span>
                <span className="detail_explained">
                  You'll have the entire {listing.apartmentType} to yourself
                </span>
              </div>
            </div>

            <div className="booking_detail">
              <AutoAwesomeOutlinedIcon sx={{ fontSize: 25 }} />
              <div className="b_details">
                <span className="detail_title">Enhanced Clean</span>
                <span className="detail_explained">
                  The host commited to Airbnb's 5-step enhaned cleaning process.
                </span>
              </div>
            </div>

            <div className="booking_detail">
              <DoorBackOutlinedIcon sx={{ fontSize: 25 }} />
              <div className="b_details">
                <span className="detail_title">Self check-in</span>
                <span className="detail_explained">
                  Check yourself in with the keypad.
                </span>
              </div>
            </div>

            <div className="booking_detail">
              <CalendarTodayOutlinedIcon sx={{ fontSize: 25 }} />
              <div className="b_details">
                <span className="detail_title">
                  Free cancellation before 48 hours to check-in
                </span>
              </div>
            </div>
          </div>

          <div className="description_info">
            <p>{listing.description}</p>
            <p>...</p>
            <br />
            <p className="show_more">
              <strong>Show more</strong>
            </p>
          </div>

          <div className="sleep_section">
            <p className="sleep_title">Where you'll sleep</p>
            <div className="bedroom_image">
              <img
                src={listing.additionalImages.bedroom}
                alt=""
              />
            </div>
            <p>Bedroom</p>
            <p>1 queen bed</p>
          </div>

          <div className="what_place_offers">
            <p className="place_offers_title">What the place offers</p>
            <div className="offers_container">
              <div className="offer_column">
                <span>
                  {" "}
                  <SpaOutlinedIcon sx={{ fontSize: 20 }} />
                  Garden view
                </span>
                <span>
                  <WifiOutlinedIcon sx={{ fontSize: 20 }} />
                  Wifi
                </span>
                <span>
                  <LocalLaundryServiceOutlinedIcon sx={{ fontSize: 20 }} />
                  Free washer - in building
                </span>
                <span>
                  <AirOutlinedIcon sx={{ fontSize: 20 }} />
                  Central air conditioning
                </span>
                <span>
                  <KitchenOutlinedIcon sx={{ fontSize: 20 }} />
                  Refridgerator
                </span>
              </div>
              <div className="offer_column">
                <span>
                  <MicrowaveIcon sx={{ fontSize: 20 }} />
                  Kitchen
                </span>
                <span>
                  <PetsIcon sx={{ fontSize: 20 }} />
                  Pets allowed
                </span>
                <span>
                  <WhatshotIcon sx={{ fontSize: 20 }} />
                  Dryer
                </span>
                <span>
                  <VideocamOutlinedIcon sx={{ fontSize: 20 }} />
                  Security cameras on property
                </span>
                <span>
                  <DirectionsBikeOutlinedIcon sx={{ fontSize: 20 }} />
                  Bicycles
                </span>
              </div>
            </div>
            <div className="more_amenities">
              <span>Show all 37 amenities</span>
            </div>
          </div>

          <div className="calendar_section">
            <Calendar_Section />
          </div>
        </div>
        <div className="reserve_section">
          <Reserve_Section listing={listing} />
        </div>
      </div>
    </div>
  );
};

export default Listing_Details;
