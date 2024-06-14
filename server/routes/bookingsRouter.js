import express from 'express';
import { check } from 'express-validator';
import { createBooking } from '../controllers/bookingsController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/add', authenticateToken, [
	check('Room_id', 'Room id is required').not().isEmpty(),
	check('Check_in_date', 'A valid format of check in date is required').isDate(),
	check('Check_out_date', 'A valid format of check out date is required').isDate()
], createBooking);

export default router;
