"use strict";

const express = require("express");
const app = express();

// define endpoint for exercise 1 here
app.get("/math/circle/:r", (req, res) => {
  //TODO1
  const radius = parseFloat(req.params.r);
  const area = Math.PI * radius * radius;
  const circumference = 2 * Math.PI * radius;
  const result = {
    area: area.toFixed(2),
    circumference: circumference.toFixed(2),
  };
  res.json(result);
});

//TODO2
app.get("/math/rectangle/:width/:height", (req, res) => {
  //TODO1
  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);
  const area = width * height;
  const perimeter = 2 * width + 2 * height;
  const result = {
    area: area.toFixed(2),
    perimeter: perimeter.toFixed(2),
  };
  res.json(result);
});
//TODO3

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
