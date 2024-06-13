import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import User from '../models/User.model.js';

export const authenticateToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token == null) return res.sendStatus(401); // Unauthorized

	jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
		if (err) return res.sendStatus(403); // Forbidden
		req.payload = payload;
		next();
	});
}

export const authenticateAdminToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token == null) return res.sendStatus(401); // Unauthorized

	jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
		if (err) return res.sendStatus(403); // Forbidden

		try {
			let { user } = payload;
			const userId = user.id;

			if (!mongoose.Types.ObjectId.isValid(userId)) {
	            return res.status(400).json({ message: 'ID' });
	        }

			user = await User.findById(userId).select("Role");

			if (user && user.Role == 'admin') {
				req.payload = payload;
			} else {
				console.error('Only admin is authorized to add rooms');
				return res.sendStatus(401); // Unauthorized
			}
			next();
		} catch (err) {
			console.error(err);
		}
	});
}
