const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();

// Middleware

const corsConfig = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", 'PATCH'],
};
app.use(cors(corsConfig));
app.options("", cors(corsConfig));
app.use(express.json());




app.get("/", (req, res) => {
    res.send("server is running");
  });
  
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });