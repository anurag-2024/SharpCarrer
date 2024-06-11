import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  User_id: {
    type: String,
    required: true,
  },
  Booking_id: {
    type: String,
    required: true,
  },
  Rating: {
    type: Number, 
    required: true,
  },
  Review_text: {
    type: String,
    required: true,
  },
  Submission_date: {
    type: Date,
    required: true,
    default: Date.now, 
  },
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;
