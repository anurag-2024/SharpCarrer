import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  User_id: {
    type: String,
    required: true,
  },
  Booking_id: {
    type: String,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  Payment_method: {
    type: String,
    required: true,
    enum: ['Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer', 'UPI'], 
  },
  Payment_status: {
    type: String,
    required: true,
    enum: ['Pending', 'Completed', 'Failed', 'Cancelled'], 
  },
  Transaction_date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;
