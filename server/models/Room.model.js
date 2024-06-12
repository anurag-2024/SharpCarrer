import mongoose from 'mongoose';

const RoomSchema = mongoose.Schema({
	Room_type: {
		type: String,
		required: true
	},
	Description: {
		type: String,
		required: true
	},
	Photos: {
		type: [String],
		default: []
	},
	Amenities: {
		type: [String],
		default: []
	},
	Price: {
		type: Number,
		required: true
	},
	Guest_size: {
		type: Number,
		required: true
	},
	Availability_status: {
		type: Boolean,
		default: true
	}
});

const Room = mongoose.model('Room', RoomSchema);

export default Room;
