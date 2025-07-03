//schema of how our listing documents should look. the structure of what is should look like

const mongoose = require("mongoose");

//import the Schema
const Schema = mongoose.Schema;

//This is where we create a new schema
const listingSchema = new Schema(
  {
    title: String,
    city: String,
    apartmentType: String,
    guests: Number,
    bedroomCount: Number,
    bathroomCount: Number,
    pricePerNight: Number,
    mainImage: String,
    additionalImages: [String],
    rating: Number,
    host: {
      name: String,
      avatar: String,
    },
    amenities: [String],
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("listing", listingSchema); // will automatically create a collection named Workouts for us
