import React from "react";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Location_Card.css";

const Location_Card = ({ listing }) => {
  const navigate = useNavigate();
  return (
    <div
      className="location_card"
      onClick={() => {
        console.log("Navigating with ID:", listing._id);
        if (listing._id) {
          navigate(`/listing/${listing._id}`);
        } else {
          console.warn("Listing _id is missing:", listing);
        }
      }}
    >
      <div className="home_info_container">
        <div className="display_photo_container">
          <img className="dp_image" src={listing.mainImage} alt="" />
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
            <span>
              {" "}
              {listing.guests} guests • {listing.apartmentType} •{" "}
              {listing.bedroomCount} beds • {listing.bathroomCount} bath
            </span>
            <span> Wifi • Kitchen • Free Parking</span>
          </div>
          <span className="random_line"></span>
          <div className="rating_info">
            <span>
              {" "}
              {listing.rating} ⭐ ({listing.ratingCount})
            </span>
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
