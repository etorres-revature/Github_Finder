const express = require("express");
const path = require("path");
const logger = require("morgan");
const compression = require("compression");

const PORT = process.env.PORT || 18672;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/static", express.static(path.join(__dirname + "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`App is active at http://localhost:${PORT}`);
});
