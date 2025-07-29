import React from "react";
import "./Listing_Card.css";

const Listing_Card = ({listing}) => {
  return (
    <div className="listing_card">
      <div className="listing_info_container">
        <div className="listing_details">
          <div className="img_container">
            <img
              src={listing.mainImage}
              alt=""
            />
          </div>
          <div className="listing_info">
            <div className="listing_header">
              <span className="short_desciption">Entire home in {listing.city}</span>
              <span className="listing_title">{listing.title}</span>
            </div>
          <span className="random_line"></span>
          <div className="home_info">
            <span> {listing.guests} guests • {listing.bedroomCount} beds • {listing.bathroomCount} bath</span>
            <span>{listing.amenities?.join(" • ")}</span>
          </div>
          <span className="random_line"></span>
          <div className="rating_info">
            <span>⭐ 4.7 (250 reviews)</span>
            <span className="price">
              <strong>${listing.pricePerNight}</strong> /night
            </span>
          </div>
          </div>
        </div>

        <div className="card_buttons">
          <button className="blue_button">Update</button>
          <button className="pink_button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Listing_Card;
