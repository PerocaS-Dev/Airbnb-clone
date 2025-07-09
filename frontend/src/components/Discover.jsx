import React from "react";
import "./Discover.css";
import gift from "../assets/gift_card.png";

const Discover = () => {
  return (
    <div className="discover">
      <div className="discover_section">
        <h4 className="discover_title">Discover Airbnb Experience</h4>
        <div className="things_to_do">
          <div className="image_container">
            <img
              className="image"
              src="https://images.pexels.com/photos/32820421/pexels-photo-32820421.jpeg"
              alt=""
            />
            <div className="discover_info">
              <h2>Things to do on your trip</h2>
              <div className="experience_btn">
                <p>Experiences</p>
              </div>
            </div>
          </div>
          <div className="image_container">
            <img
              className="image"
              src="https://images.pexels.com/photos/6957990/pexels-photo-6957990.jpeg"
              alt=""
            />
            <div className="discover_info">
              <h2>Things to do from home</h2>
              <div className="experience_btn">
                <p>Online Experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gift_card_section">
        <img src={gift} alt="" />
      </div>

      <div className="ask_superhost">
        <img
          src="https://images.pexels.com/photos/5384460/pexels-photo-5384460.jpeg"
          alt=""
        />
        <div className="hosting_question">
          <h2>Questions about hosting?</h2>
          <div className="ask_btn">
            <p>Ask a Superhost</p>
          </div>
        </div>
      </div>

      <div className="future_getaways">
        <h2 className="discover_title">Inspiration for future getaways</h2>

        <div className="getaway_options">
          <div className="getaway_titles">
            <span className="active_title">
              Destinations for arts & culture
            </span>
            <span className="title">Destinations for outdoor adventure</span>
            <span className="title">Mountain cabins</span>
            <span className="title">Best destinations</span>
            <span className="title">Popular destinations</span>
            <span className="title">Unique Stays</span>
          </div>

          <div className="getawaya_locations">
            <div className="getawaya_location">
              <h5>Phoenix</h5>
              <p>Arizona</p>
            </div>

            <div className="getawaya_location">
              <h5>Hot Springs</h5>
              <p>Arkansas</p>
            </div>

            <div className="getawaya_location">
              <h5>Los Angeles</h5>
              <p>California</p>
            </div>

            <div className="getawaya_location">
              <h5>San Diego</h5>
              <p>California</p>
            </div>

            <div className="getawaya_location">
              <h5>San Francisco</h5>
              <p>California</p>
            </div>

            <div className="getawaya_location">
              <h5>Barcelona</h5>
              <p>Catalonia</p>
            </div>

            <div className="getawaya_location">
              <h5>Prague</h5>
              <p>Czechia</p>
            </div>

            <div className="getawaya_location">
              <h5>Washington</h5>
              <p>District of Columbia</p>
            </div>

            <div className="getawaya_location">
              <h5>Keswick</h5>
              <p>England</p>
            </div>

            <div className="getawaya_location">
              <h5>London</h5>
              <p>England</p>
            </div>

            <div className="getawaya_location">
              <h5>Scarborough</h5>
              <p>England</p>
            </div>

            <div className="getawaya_location">
              <h5 className="active_title">Show more</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
