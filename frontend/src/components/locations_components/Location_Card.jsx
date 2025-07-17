import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Location_Card.css";

const Location_Card = ({listing}) => {
  return (
    <div className="location_card">
      <div className="home_info_container">
        <div className="display_photo_container">
          <img
            className="dp_image"
            src={listing.mainImage}
            alt=""
          />
        </div>
        <div className="home_details_container">

          <div className="card_header">
            <div className="heading_info">
              <span className="home_summary">{listing.title}</span>
              <span className="home_city"> {listing.city}</span>
            </div>
            <div className="heart_container">
              <FavoriteBorderIcon />
            </div>
          </div>
          <span className="random_line"></span>
          <div className="home_info">
            <span> {listing.guests} guests • {listing.apartmentType} • {listing.bedroomCount} beds • {listing.bathroomCount} bath</span>
            <span> Wifi • Kitchen • Free Parking</span>
          </div>
          <span className="random_line"></span>
          <div className="rating_info">
            <span> {listing.rating} ⭐ ({listing.ratingCount})</span>
            <span className="price">
              <strong>${listing.pricePerNight}</strong> /night
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location_Card;
