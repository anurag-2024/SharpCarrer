import express from 'express';
import { getHotels, getHotel, searchHotels } from '../controllers/hotelsController.js';

const router = express.Router();

/**
 * Search hotels
 * 
 * @route {GET} /api/hotels/search
 */
router.get('/search', searchHotels);

/**
 * Get a hotel by ID
 * 
 * @route {GET} /api/hotels/:id
 */
router.get('/:id', getHotel);

/**
 * Get all hotels
 * 
 * @route {GET} /api/hotels
 */
router.get('/', getHotels);

export default router;
