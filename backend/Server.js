const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const UploadRoute = require("./routes/UploadRoute");
const DeleteRoute = require("./routes/DeleteRoute"); // Add this line

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("MongoDB Connected...");
});

app.use(UploadRoute);
app.use(DeleteRoute); // Add this line

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
