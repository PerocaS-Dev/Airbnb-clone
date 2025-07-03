const express = require("express");

//import controller functions
const {
  createListing,
  getListings,
  getListing,
  deleteListing,
  updateListing,
  getListingPreview,
  getListingPreviewByCity,
} = require("../controllers/listingController");

const router = express.Router();

//GET all listings
router.get("/", getListings);

//GET all listings preview
router.get("/preview", getListingPreview);

//GET all listings preview
router.get("/preview/:city", getListingPreviewByCity);

//POST a new listing - FOR ADMIN
router.post("/", createListing);

//GET a single listing
router.get("/:id", getListing);

//DElETE a listing - FOR ADMIN
router.delete("/:id", deleteListing);

//UPDATE a single listing - FOR ADMIN
router.patch("/:id", updateListing);

module.exports = router;
