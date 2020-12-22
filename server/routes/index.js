const Router = require("express").Router;
const router = Router();
const Workout = require("../model/Workout");

router.get("/workouts", async (req, res) => {
  const workouts = await Workout.find();
  res.json(workouts);
});

router.put("/workouts/:id", async (req, res) => {
  const workout = await Workout.findById(req.params.id);
  if (!workout) {
    return res.status(404).json({ message: "workout doesn't exist" });
  }
  const newWorkout = await workout.update({
    exercises: [...workout.exercises, req.body],
  });
  res.json(newWorkout);
});

router.post("/workouts", async (req, res) => {
  const newWorkout = await Workout.create({
    day: new Date(),
    exercises: [],
  });
  res.json(newWorkout);
});

router.get("/workouts/range", async (req, res) => {
  const workouts = await Workout.find();
  res.json(workouts);
});

module.exports = router;
