import express from 'express';
import { check } from 'express-validator';
import { signup, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', [
	check('name', 'Name is required').not().isEmpty(),
	check('email', 'Please enter a valid email').isEmail(),
	check('password', 'Please enter a password with 6 or more characteres').isLength({ min: 6 }),
	check('contactNo', 'Please enter a valid phone number').isMobilePhone('any'),
], signup);

router.post('/login', [
	check('email', 'Please enter a valid email').isEmail(),
	check('password', 'Password is required').exists()
], login);

export default router;
