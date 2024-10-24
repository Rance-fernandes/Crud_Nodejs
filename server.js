require("dotenv").config();

const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyparser.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

  
app.use("/api", itemRoutes);

app.listen(port, () => {
  console.log(`The app is listening to : http://localhost:${port}`);
});
