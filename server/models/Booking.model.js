import mongoose from 'mongoose';

const bookingStatusEnum = ['pending', 'confirmed', 'cancelled'];
const paymentStatusEnum = ['pending', 'paid', 'cancelled'];

const BookingSchema = mongoose.Schema({
	userId: {
		type: Number,
		required: true
	},
	roomId: {
		type: Number,
		required: true
	},
	checkInDate: {
		type: Date,
		required: true
	},
	checkOutDate: {
		type: Date,
		required: true
	},
	bookingStatus: {
		type: String,
		enum: bookingStatusEnum,
		default: 'pending'
	},
	paymentStatus: {
		type: String,
		enum: paymentStatusEnum,
		default: 'pending'
	}
});

const Booking = mongoose.model('Booking', BookingSchema);

export default Booking;
