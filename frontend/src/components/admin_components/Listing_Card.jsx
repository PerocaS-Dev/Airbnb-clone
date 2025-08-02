import React from "react";
import { useListingContext } from "../../context/ListingContext";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Listing_Card.css";

const Listing_Card = ({ listing }) => {
  const { dispatch } = useListingContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();


  const handleDelete = async () => {
    if (!user) return alert("You must be logged in to delete.");

    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );
    if (!confirm) return;

    try {
      const response = await fetch(`${process.env.API_BASE_URL}/api/listings/${listing._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_LISTING", payload: listing._id });
        alert("Listing deleted successfully.");
      } else {
        console.error("Error deleting listing:", json.error);
      }
    } catch (err) {
      console.error("Network error:", err.message);
    }
  };

  const handleUpdate = () => {
  navigate(`/create-listing/${listing._id}`);
};


  return (
    <div className="listing_card">
      <div className="listing_info_container">
        <div className="listing_details">
          <div className="img_container">
            <img src={listing.mainImage} alt="" />
          </div>
          <div className="listing_info">
            <div className="listing_header">
              <span className="short_desciption">
                Entire home in {listing.city}
              </span>
              <span className="listing_title">{listing.title}</span>
            </div>
            <span className="random_line"></span>
            <div className="home_info">
              <span>
                {" "}
                {listing.guests} guests • {listing.bedroomCount} beds •{" "}
                {listing.bathroomCount} bath
              </span>
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
          <button className="blue_button" onClick={handleUpdate}>Update</button>
          <button className="pink_button" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Listing_Card;
