import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import authRouter from './routes/authRouter.js';
import roomsRouter from './routes/roomsRouter.js';
import bookingsRouter from './routes/bookingsRouter.js';
import userRouter from './routes/userRoutes.js';
import morgan from 'morgan';

dotenv.config(); 
connectDB(); 

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS
app.use(morgan('tiny'));
// Routes
app.use('/api/auth', authRouter);
app.use('/api/rooms', roomsRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/user', userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
