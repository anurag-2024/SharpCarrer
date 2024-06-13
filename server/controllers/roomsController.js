import Room from '../models/Room.model.js';

export const createRoom = async (req, res) => {
	try {
		const newRoom = await Room.create(req.body);
		res.status(201).json(newRoom);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}
