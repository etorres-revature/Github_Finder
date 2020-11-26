const express = require("express");
const logger = require("morgan");
const compression = require("compression");

const PORT = process.env.PORT || 18672;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/public", express.static(__dirname + "../client/build"));

app.listen(PORT, () => {
  console.log(`App is active at http://localhost:${PORT}`);
});
