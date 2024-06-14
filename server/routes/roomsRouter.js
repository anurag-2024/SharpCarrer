import express from 'express';
import { check } from 'express-validator';
import { authenticateToken, isAdmin } from '../middlewares/authMiddleware.js';
import { createRoom, deleteRoom, getRoom, getRooms } from '../controllers/roomsController.js';

const router = express.Router();

/**
 * Get all rooms
 * 
 * @route 	{GET} /api/rooms
 */
router.get('/', getRooms); //No need to authenticate here. Anyone can view rooms

/**
 * Get a room
 * 
 * @route 	{GET} /api/rooms/:id
 */
router.get('/:id', getRoom);

/**
 * Add room (only admins are allowed)
 * 
 * @route 	{POST}
 */
router.post('/add', authenticateToken, isAdmin, [
	check('Room_type', 'Please enter a room type').not().isEmpty(),
	check('Description', 'Please enter a description').not().isEmpty(),
	check('Price', 'Please enter a numeric for price').isNumeric().not().isEmpty(),
	check('Guest_size', 'Please enter a numeric value for guest size').isNumeric().not().isEmpty(),
], createRoom);

/**
 * Delete room
 * 
 * @route 	{DELETE} /api/rooms/:id/delete
 */
router.delete('/:id/delete', authenticateToken, isAdmin, deleteRoom);


export default router;
