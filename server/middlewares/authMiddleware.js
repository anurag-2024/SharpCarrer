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
	const token=req.headers?.authorization?.split(" ")[1];
	if(!token) return res.status(401).json({message:"Access Denied"});
	const decodedToken=jwt.verify(token,process.env.JWT_SECRET)
	req.user=decodedToken;
	next();
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
