const Reservation = require('../models/reservationModel');
const Listing = require('../models/listingModel');

exports.createReservation = async (req, res) => {
  const { listingId, startDate, endDate, totalPrice, status } = req.body;

  try {
    const reservation = await Reservation.create({
      listingId,
      guestId: req.user._id,
      startDate,
      endDate,
      totalPrice,
      status: status || "pending" // default status
    });

    res.status(201).json(reservation);
  } catch (err) {
    console.error("Reservation error:", err); // Add logging
    res.status(400).json({ error: err.message });
  }
};

// GET: Reservations made by current user (guest)
exports.getUserReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({ 
      $or: [
        { guestId: req.user._id },
        { "listingId.host.userId": req.user._id }
      ]
    })
    .populate({
      path: 'listingId',
      model: 'Listing' // Explicitly specify model
    })
    .populate({
      path: 'guestId',
      model: 'User'
    });

    res.status(200).json(reservations);
  } catch (err) {
    console.error("Detailed error:", {
      message: err.message,
      stack: err.stack
    });
    res.status(500).json({ error: "Server error" });
  }
};

// GET: Reservations on listings owned by the host
exports.getHostReservations = async (req, res) => {
  try {
    const listings = await Listing.find({ "host.userId": req.user._id });
    const listingIds = listings.map((listing) => listing._id);

    const reservations = await Reservation.find({ listingId: { $in: listingIds } })
      .populate('listingId')
      .populate('guestId');

    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

