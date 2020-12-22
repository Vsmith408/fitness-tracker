const express = require("express");
const morgan = require("morgan");
const router = require("./routes");

const app = express();

app.use(morgan("combined"));
app.use(express.json());

app.use(express.static("public"));
app.use("/stats", express.static("./public/stats.html"));
app.use("/exercise", express.static("./public/exercise.html"));

app.use("/api", router);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on ${process.env.PORT || 3000}`);
});
