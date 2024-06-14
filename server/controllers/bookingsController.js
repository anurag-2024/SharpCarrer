import Booking from '../models/Booking.model.js';
import { validationResult } from 'express-validator';

export const createBooking = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const User_id = req.payload.user.id;
	let { Room_id, Check_in_date, Check_out_date } = req.body;
	
	Check_in_date = new Date(Check_in_date);
	Check_out_date = new Date(Check_out_date);

	if (Check_in_date.getTime() > Check_out_date.getTime()) {
		return res.status(400).json({ message: 'Check-out date must be after chack-in date'} );
	}

	try {
		const newBooking = await Booking.create({ User_id, Room_id, Check_in_date, Check_out_date });
		res.status(201).json(newBooking);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}
