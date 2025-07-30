//schema of how our listing documents should look. the structure of what is should look like

const mongoose = require("mongoose");

//import the Schema
const Schema = mongoose.Schema;

//This is where we create a new schema
const listingSchema = new Schema({
  title: String,
  city: String,
  apartmentType: String,
  guests: Number,
  bedroomCount: Number,
  bathroomCount: Number,
  pricePerNight: Number,
  mainImage: String,
  additionalImages: {
    livingroom: String,
    kitchen: String,
    bathroom: String,
    bedroom: String,
    view: String,
  },
  rating: Number,
  ratingCount: Number,
  host: {
    name: { type: String, required: true },
    avatar: { type: String, default: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  amenities: [String],
  description: String,
});

module.exports = mongoose.model("Listing", listingSchema); // will automatically create a collection named Workouts for us
