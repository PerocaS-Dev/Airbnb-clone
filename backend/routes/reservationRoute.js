const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/requireAuth')

const {
  createReservation,
  getUserReservations,
  getHostReservations
} = require('../controllers/reservationController');

router.use(requireAuth); // All routes below require login

// Create a reservation
router.post('/', createReservation);

// Get all reservations for the current user
router.get('/my', getUserReservations);

// Get reservations for listings hosted by the logged-in host
router.get('/host', getHostReservations);

module.exports = router;
