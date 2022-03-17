const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "";

const app = express();


app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});


app.use(require("./routes/api"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});