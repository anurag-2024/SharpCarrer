import Room from '../models/Room.model.js';

export const createRoom = async (req, res) => {
	try {
		const newRoom = await Room.create(req.body);
		res.status(201).json(newRoom);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}

export const deleteRoom = async (req, res) => {
	try {
		const roomId = req.params.id;
		const deleteRoom = await Room.findByIdAndDelete(roomId);

		if (!deleteRoom) {
			return res.status(404).json({ message: 'Room not found' });
		}

		res.status(200).json({ message: 'Room deleted successfully' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

export const getRoom = async (req, res) => {
	try {
		const roomId = req.params.id;
		const room = await Room.findById(roomId);

		if (!room) {
			return res.status(404).json({ message: 'Room not found' });
		}

		res.status(200).json(room);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

export const getRooms = async (req, res) => {
	try {
		const rooms = await Room.find({});
		res.status(200).json(rooms);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}
