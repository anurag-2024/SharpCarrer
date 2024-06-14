/**
 * @module 	bookingsRouter
 */

import express from 'express';
import { check } from 'express-validator';
import { getBookings, createBooking, cancelBooking } from '../controllers/bookingsController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * Route to obtains all bookings created by the authentified user
 * 
 * @route 	{GET} /bookings
 */
router.get('/', authenticateToken, getBookings);

/**
 * Route to add booking
 * 
 * @route 	{POST} /bookings/add
 */
router.post('/add', authenticateToken, [
	check('Room_id', 'Room id is required').not().isEmpty(),
	check('Check_in_date', 'A valid format of check in date is required').isDate(),
	check('Check_out_date', 'A valid format of check out date is required').isDate()
], createBooking);

/**
 * Route to cancel booking
 * 
 * @route 	{GET} /bookings/cancel/:id
 */
router.get('/cancel/:id', authenticateToken, cancelBooking);

export default router;
