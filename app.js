require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const notesRouter = require("./controllers/notes");

app.use("/notes", notesRouter);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
})

module.exports = app;