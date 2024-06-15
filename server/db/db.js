import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const db = process.env.MONGO_URI;
		
		await mongoose.connect(db);

		console.log('MongoDB connected...');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
}

export default connectDB;
