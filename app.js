const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const notesRouter = require("./controllers/notes");

app.use("/notes", notesRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
})

module.exports = app;