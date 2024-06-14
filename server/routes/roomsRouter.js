import express from 'express';
import { check } from 'express-validator';
import { authenticateToken, authenticateAdminToken } from '../middlewares/authMiddleware.js';
import { createRoom, deleteRoom, getRoom, getRooms } from '../controllers/roomsController.js';

const router = express.Router();

/**
 * Get all rooms
 * 
 * @route 	{GET} /api/rooms
 */
router.get('/', authenticateToken, getRooms);

/**
 * Get a room
 * 
 * @route 	{GET} /api/rooms/id
 */
router.get('/:id', authenticateToken, getRoom);

/**
 * Add room (only admins are allowed)
 * 
 * @route 	{POST}
 */
router.post('/add', authenticateAdminToken, [
	check('Room_type', 'Please enter a room type').not().isEmpty(),
	check('Description', 'Please enter a description').not().isEmpty(),
	check('Price', 'Please enter a numeric for price').isNumeric().not().isEmpty(),
	check('Guest_size', 'Please enter a numeric value for guest size').isNumeric().not().isEmpty(),
], createRoom);

/**
 * Delete room
 * 
 * @route 	{DELETE} /api/rooms/delete/:id
 */
router.delete('/delete/:id', authenticateAdminToken, deleteRoom);


export default router;
