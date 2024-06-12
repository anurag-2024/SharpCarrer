import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import User from '../models/User.model.js';

export const signup = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { name, email, password, contactNo, isVerified } = req.body;

	try {
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ msg: 'User with the same email address already exists!' });
		}
		user = await User.findOne({ contactNo });
		if (user) {
			return res.status(400).json({ msg: 'User with the same phone number already exists!' });
		}

		user = new User({ name, email, password, contactNo });

		// pwd crypt
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);

		await user.save();

		// create and send JWT token

		const payload = { user: { id: user.id }};
		jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
			if (err) throw err;
			res.json({ token });
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Server error');
	}
}

export const login = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { email, password } = req.body;

	try {
		let user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ msg: 'Invalid Credentials' });
		}

		// verify password
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ msg: 'Invalid Credentials' });
		}

		const payload = { user: { id: user.id } };
		jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
			if (err) throw err;
			res.json({ token });
		})
	} catch (err) {
		console.error(err);
		res.status(500).send('Server error');
	}
}
