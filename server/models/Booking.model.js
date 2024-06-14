/**
 * @module	Booking.model
 */

import mongoose from 'mongoose';

const bookingStatusEnum = ['Pending', 'Confirmed', 'Cancelled'];
const paymentStatusEnum = ['Pending', 'Paid', 'Cancelled'];

/**
 * Booking Schema
 */
const BookingSchema = mongoose.Schema({
	User_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	Room_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	Check_in_date: {
		type: Date,
		required: true
	},
	Check_out_date: {
		type: Date,
		required: true
	},
	Booking_status: {
		type: String,
		enum: bookingStatusEnum,
		default: 'Pending'
	},
	Payment_status: {
		type: String,
		enum: paymentStatusEnum,
		default: 'Pending'
	}
});

/**
 * Booking
 */
const Booking = mongoose.model('Booking', BookingSchema);

export default Booking;
