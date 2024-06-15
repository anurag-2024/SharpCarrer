/**
 * @module 	authMiddleware
 */

import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import User from '../models/User.model.js';

/**
 * Authenticate user token
 * 
 * @param 	{Request} req - Express request object
 * @param 	{Response} res - Express response object
 */
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

/**
 * Verify if user is admin
 * 
 * @param 	{Request} req - Express request object
 * @param 	{Response} res - Express response object
 */
export const isAdmin = async (req, res, next) => {
	const userId = req.payload.user.id;
	const user = await User.findById(userId);

	if (!user)
		return res.status(404).json({ message: 'User not found' });
	if (user.Role != 'admin')
		return res.status(403).json({ message: 'Only admins is allowed' });

	next();
}
