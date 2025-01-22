const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT;

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("connected");
    app.listen(port, () => {
      console.log(`stared at port ${port}`);
    });
  })
  .catch(() => console.log("connection failed"));

//   app.get("/logo", async (req, res) => {
//     try {
//       const logoitem = await logo.find();
//       res.status(200).json(logoitem);
//     } catch (error) {
//       console.log(error);
//     }
//   });
