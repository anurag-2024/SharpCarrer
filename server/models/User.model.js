import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	contactNo: {
		type: Number,
		required: true,
		unique: true
	},
	address: {
		type: String,
		default: "non specified"
	},
	bookingHistory: {
		type: [mongoose.Schema.Types.ObjectId],
		default: []
	},
	preferences: {
		type: [String],
		default: []
	},
	isVerified: {
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
