import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Location_Card.css";

const Location_Card = () => {
  return (
    <div className="location_card">
      <div className="home_info_container">
        <div className="display_photo_container">
          <img
            className="dp_image"
            src="https://images.pexels.com/photos/13620069/pexels-photo-13620069.jpeg"
            alt=""
          />
        </div>
        <div className="home_details_container">

          <div className="card_header">
            <div className="heading_info">
              <span className="home_summary">Entire home in New York</span>
              <span className="home_title"> Big Apple Condo</span>
            </div>
            <div className="heart_container">
              <FavoriteBorderIcon />
            </div>
          </div>
          <span className="random_line"></span>
          <div className="home_info">
            <span> 4-6 guests • Entire Home • 5 beds • 3 bath</span>
            <span> Wifi • Kitchen • Free Parking</span>
          </div>
          <span className="random_line"></span>
          <div className="rating_info">
            <span> 5.0 ⭐ (318 reviews)</span>
            <span className="price">
              <strong>$325</strong> /night
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location_Card;
