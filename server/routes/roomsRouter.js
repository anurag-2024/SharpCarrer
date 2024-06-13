import express from 'express';
import { check } from 'express-validator';
import { authenticateToken, authenticateAdminToken } from '../middlewares/authMiddleware.js';
import { createRoom, deleteRoom, getRoom, getRooms } from '../controllers/roomsController.js';

const router = express.Router();

router.post('/add', authenticateAdminToken, [
	check('Room_type', 'Please enter a room type').not().isEmpty(),
	check('Description', 'Please enter a description').not().isEmpty(),
	check('Price', 'Please enter a numeric for price').isNumeric().not().isEmpty(),
	check('Guest_size', 'Please enter a numeric value for guest size').isNumeric().not().isEmpty(),
], createRoom);

router.delete('/delete/:id', authenticateAdminToken, deleteRoom);

router.get('/:id', authenticateToken, getRoom);
router.get('/', authenticateToken, getRooms);

export default router;
