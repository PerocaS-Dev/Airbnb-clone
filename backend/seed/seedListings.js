//script that runs and inserts data

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Listing = require("../models/listingModel");
const listingsData = require("../data/listingsData");

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to MongoDB");

    //Clear existing data
    await Listing.deleteMany();
    console.log("Existing listings cleared");

    //Insert new data
    await Listing.insertMany(listingsData);
    console.log("Listing seeded successfully!");

    process.exit();
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

seedDatabase();
