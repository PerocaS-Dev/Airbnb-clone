import React from "react";
import "./Listing_Footer.css";

const Listing_Footer = () => {
  return (
    <div className="listing_footer">
      <p className="listing_footer_title">Explore other options in France</p>
      <div className="locations-grid">
        {[
          "Paris", "Nice", "Lyon", "Marseille",
          "Lille", "Aix-en-Provence", "Rouen", "Amiens",
          "Toulouse", "Montpellier", "Dijon", "Grenoble"
        ].map((city, index) => (
          <span className="city-link" key={index}>{city}</span>
        ))}
      </div>

      <h3 className="section-title">Unique stays on Airbnb</h3>
      <div className="stays-grid">
        {[
          "Beach House Rentals", "Camper Rentals", "Glamping Rentals", "Treehouse Rentals",
          "Cabin Rentals", "Tiny House Rentals", "Lakehouse Rentals", "Mountain Chalet Rentals"
        ].map((stay, index) => (
          <span className="stay-link" key={index}>{stay}</span>
        ))}
      </div>

      <div className="breadcrumb">
        <span className="breadcrumb-link">Airbnb</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-link">Europe</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-link">France</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">Bordeaux</span>
      </div>
    </div>
  );
};

export default Listing_Footer;
