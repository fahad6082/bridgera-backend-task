const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const compression = require("compression");

const envPath = ".env.dev";
dotenv.config({
  path: envPath,
});


const cors = require("cors");
const app = express();

const db = process.env.MONGOHOST;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log(db)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "40mb" }));

app.use(cors());
app.use(compression());

const userRoutes = require("./routes/user");

// User API Paths
app.use("/api/user", userRoutes);

app.use((req, res, next) => {
  const error = new Error("Resource not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;