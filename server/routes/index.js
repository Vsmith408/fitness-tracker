const Router = require("express").Router;
const router = Router();

router.get("/workouts", (req, res) => {
  res.json([
    {
      day: new Date().setDate(new Date().getDate() - 10),
      exercises: [
        {
          type: "resistance",
          name: "Bicep Curl",
          duration: 20,
          weight: 100,
          reps: 10,
          sets: 4,
        },
      ],
    },
  ]);
});

router.put("/workouts/:id", (req, res) => {
  res.json({
    _id: req.params.id,
    day: new Date().setDate(new Date().getDate() - 10),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4,
      },
    ],
  });
});

router.post("/workouts", (req, res) => {
  res.json({
    day: new Date().setDate(new Date().getDate() - 10),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4,
      },
    ],
  });
});

router.get("/workouts/range", (req, res) => {
  res.json([
    {
      day: new Date().setDate(new Date().getDate() - 10),
      exercises: [
        {
          type: "resistance",
          name: "Bicep Curl",
          duration: 20,
          weight: 100,
          reps: 10,
          sets: 4,
        },
      ],
    },
  ]);
});

module.exports = router;
