const notesRouter = require("express").Router();

const notes = [
  {
    text: "Create backend",
    done: false
  },
  {
    text: "Deploy to aws",
    done: false
  }
];

notesRouter.get("/", (req, res) => {
  res.json(notes)
});

module.exports = notesRouter;