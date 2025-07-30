const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  listingId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing", required:true, },
  guestId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required:true, }, // NEW
  startDate: Date,
  endDate: Date,
  status: String,
  totalPrice: Number,
});

module.exports = mongoose.model("Reservation", reservationSchema);
