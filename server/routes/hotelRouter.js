import express from 'express';
// import { check } from 'express-validator';
// import { authenticateToken, isAdmin } from '../middlewares/authMiddleware.js';
import { getHotels, getHotel } from '../controllers/hotelsController.js';

const router = express.Router();

/**
 * Get all rooms
 * 
 * @route 	{GET} /api/rooms
 */
router.get('/', getHotels); //No need to authenticate here. Anyone can view rooms

/**
 * Get a room
 * 
 * @route 	{GET} /api/rooms/:id
 */
router.get('/:id', getHotel);


export default router;
