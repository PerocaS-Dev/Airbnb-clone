import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Listing_Details from "../components/listings_components/Listing_Details";
import Listing_Footer from "../components/listings_components/Listing_Footer";
import Footer from "../components/shared_components/Footer";
import Reviews from "../components/listings_components/Reviews";
import Hosted_By from "../components/listings_components/Hosted_By";
import Things_To_Know from "../components/listings_components/Things_To_Know";
import { ListingProvider, useListingContext } from "../context/ListingContext";
import "./Listing.css";

const Listing = () => {
  const { id } = useParams(); //grabs listing ID from URL
  const [listing, setListing] = useState(null);
  const { listings, dispatch } = useListingContext();

  useEffect(() => {
    const fetchListings = async () => {
      const response = await fetch(`/api/listings/${id}`);
      console.log("Listing ID from URL:", id);
      const json = await response.json();

      if (response.ok) {
        setListing(json);
      } else {
        console.error("Failed to fetch listing", json.message);
      }
    };

    fetchListings();
  }, [id]);

  if (!listing) return <p>Loading...</p>;

  return (
    <div className="listing">
      <Listing_Details listing={listing} />
      <Reviews listing={listing} />
      <Hosted_By listing={listing} />
      <Things_To_Know />
      <Listing_Footer />
      <Footer />
    </div>
  );
};

export default Listing;
