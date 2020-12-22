const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: Date,
  exercises: [
    {
      type: {
        type: String,
        enum: ["cardio", "resistance"],
        default: "resistance",
      },
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
