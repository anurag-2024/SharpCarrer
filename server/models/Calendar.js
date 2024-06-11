import mongoose from "mongoose";

const calendarSchema = new mongoose.Schema({
  Availability: { 
    type: String,
    required: true,
  },
  Room_id: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now, 
  },
});

const Calendar = mongoose.model('Calendar', calendarSchema);
export default Calendar;
