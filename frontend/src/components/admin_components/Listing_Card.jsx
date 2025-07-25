import React from "react";
import "./Listing_Card.css";

const Listing_Card = () => {
  return (
    <div className="listing_card">
      <div className="listing_info_container">
        <div className="listing_details">
          <div className="img_container">
            <img
              src="https://capetown.hotelguide.co.za/images/one-and-only-cape-town-exterior-786x500.jpg"
              alt=""
            />
          </div>
          <div className="listing_info">
            <div className="listing_header">
              <span className="short_desciption">Entire home in Bordeaux</span>
              <span className="listing_title">Woodmead City Hotel</span>
            </div>
          <span className="random_line"></span>
          <div className="home_info">
            <span> 5 guests • loft • 3 beds • 3 bath</span>
            <span> Wifi • Kitchen • Free Parking</span>
          </div>
          <span className="random_line"></span>
          <div className="rating_info">
            <span>⭐ 4.7 (250 reviews)</span>
            <span className="price">
              <strong>$500</strong> /night
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
