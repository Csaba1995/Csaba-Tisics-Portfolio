const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/javascript/index.html");
});

app.get("/Csaba-Tisics-Resume.pdf", (req, res) => {
  res.download("./Csaba-Tisics-Resume.pdf");
});

app.get("/projects", (req, res) => {
  res.sendFile(__dirname + "/public/javascript/projects.html");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
