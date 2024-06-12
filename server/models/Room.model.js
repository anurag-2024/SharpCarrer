import mongoose from 'mongoose';

const RoomSchema = mongoose.Schema({
	roomType: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	photos: {
		type: [String],
		default: []
	},
	amenities: {
		type: [String],
		default: []
	},
	price: {
		type: Number,
		required: true
	},
	guestSize: {
		type: Number,
		required: true
	},
	availabilityStatus: {
		type: Boolean,
		default: true
	}
});

const Room = mongoose.model('Room', RoomSchema);

export default Room;
