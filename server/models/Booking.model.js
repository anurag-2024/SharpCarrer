import mongoose from 'mongoose';

const bookingStatusEnum = ['pending', 'confirmed', 'cancelled'];
const paymentStatusEnum = ['pending', 'paid', 'cancelled'];

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
		default: 'pending'
	},
	Payment_status: {
		type: String,
		enum: paymentStatusEnum,
		default: 'pending'
	}
});

const Booking = mongoose.model('Booking', BookingSchema);

export default Booking;
