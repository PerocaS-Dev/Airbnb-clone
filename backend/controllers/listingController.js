//This will have functions to control the database

const Listing = require("../models/listingModel");
const mongoose = require("mongoose");

//Function to get all the listings
const getListings = async (req, res) => {
  const listings = await Listing.find({}).sort({ createdAt: -1 });

  res.status(200).json(listings);
};

// Funtion to Get a single listing

const getListing = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid ID" });
  }

  const listing = await Listing.findById(id);

  if (!listing) {
    return res.status(404).json({ error: "No such listing" });
  }

  res.status(200).json(listing);
};

// Funtion to Get ALL listings Preview

const getListingPreview = async (req, res) => {

  try {
    const listings = await Listing.find().select(
        "title city apartmentType guests bedroomCount bathroomCount pricePerNight rating mainImage"
    )
    res.status(200).json(listings);
    
  } catch (error) {
    res.status(500).json({error: error.message})
  }
};

// Funtion to Get A listings Preview by the city and also new RegExp(`${city}$`, 'i' makes city case-insensitive
// note: to test this run GET http://localhost:4000/api/listings/preview/Cape%20Town

const getListingPreviewByCity = async (req, res) => {
  const { city } = req.params;

  try {
    const listings = await Listing.find({ city: new RegExp(`${city}$`, 'i') }).select(
        "title city apartmentType guests bedroomCount bathroomCount pricePerNight rating mainImage"
    )
    res.status(200).json(listings);
    
  } catch (error) {
    res.status(500).json({error: error.message})
  }
};

// controllers/listingController.js
const getUserListings = async (req, res) => {
  const userId = req.user._id; // You must protect this route with middleware
  try {
    const listings = await Listing.find({ 'host.userId': userId });
    res.status(200).json(listings);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Function to Create a new listing - FOR ADMIN

const createListing = async (req, res) => {
  //creating a new listing document using the Listing we imported above and storing it in listing and adding it to the db
  try {
    const listing = await Listing.create(req.body);
    res.status(200).json(listing);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Fuction to Delete a listing - FOR ADMIN

const deleteListing = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid ID" });
  }

  const listing = await Listing.findOneAndDelete({_id: id});

  if (!listing) {
    return res.status(400).json({ error: "No such listing" });
  }

  res.status(200).json(listing)

};

// Function to update a listing - FOR ADMIN
const updateListing = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid ID" });
  }

  const listing = await Listing.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!listing) {
    return res.status(404).json({ error: "No such listing" });
  }

  res.status(200).json(listing);
};

//export functions

module.exports = {
  createListing,
  getListings,
  getListing,
  getUserListings,
  deleteListing,
  updateListing,
  getListingPreview,
  getListingPreviewByCity,
};
