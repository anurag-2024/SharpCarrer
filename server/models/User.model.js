import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
	Name: {
		type: String,
		required: true
	},
	Email: {
		type: String,
		required: true,
		unique: true
	},
	Password: {
		type: String,
		required: true
	},
	Contact_no: {
		type: Number,
		required: true,
		unique: true
	},
	Address: {
		type: String,
		default: "non specified"
	},
	Booking_history: {
		type: [mongoose.Schema.Types.ObjectId],
		default: []
	},
	Preferences: {
		type: [String],
		default: []
	},
	Is_verified: {
		type: Boolean,
		default: false
	},
	date: {
		type: Date,
		default: Date.now
	},
});

const User = mongoose.model('User', UserSchema);

export default User;
