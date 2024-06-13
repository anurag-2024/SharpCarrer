import express from 'express';
import { createRoom } from '../controllers/roomsController.js';
import { check } from 'express-validator';

const router = express.Router();

router.post('/add', [
	check('Room_type', 'Please enter a room type').not().isEmpty(),
	check('Description', 'Please enter a description').not().isEmpty(),
	check('Price', 'Please enter a numeric for price').isNumeric().not().isEmpty(),
	check('Guest_size', 'Please enter a numeric value for guest size').isNumeric().not().isEmpty(),
], createRoom);

export default router;
