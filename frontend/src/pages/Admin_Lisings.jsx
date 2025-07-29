import React from "react";
import Listing_Card from "../components/admin_components/Listing_Card";
import Admin_Buttons from "../components/shared_components/Admin_Buttons";
import { useListingContext } from "../context/ListingContext";
import { useAuthContext } from "../context/AuthContext";
import "./Admin_Listings.css";

const Admin_Lisings = () => {
  const { listings } = useListingContext();
  const { user } = useAuthContext();

  const myListings = listings.filter(
    (listing) => listing.host?.userId === user._id // Only matches new listings
  );

  return (
    <div className="admin_listings">
      <Admin_Buttons />
      <div className="my_listings_title">
        <p>My Listings</p>
      </div>
      {listings.map((listing) => (
        <Listing_Card key={listing._id} listing={listing} />
      ))}
    </div>
  );
};

export default Admin_Lisings;
