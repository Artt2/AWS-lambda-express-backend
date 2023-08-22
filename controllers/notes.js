const notesRouter = require("express").Router();
const dbConnection = require("../config/db.js");
const noteQueries = require("../queries/notesQueries.js");

notesRouter.get("/", (req, res) => {
  dbConnection.query(noteQueries.getAllNotes, (err, data) => {
    if (err) {
      res.json({error: err});
      return;
    }
    res.status(200).json(data);
  });
});

notesRouter.get("/:id", (req, res) => {
  const id = req.params.id;

  dbConnection.query(noteQueries.getNoteById, [id], (err, data) => {
    if (err) {
      res.json({error: err});
      return;
    }
    res.status(200).json(data);
  });
});

notesRouter.post("/", (req, res) => {
  const { text, done } = req.body;

  if (!text || typeof done !== "boolean") {
    res.status(400).json({ error: "Invalid input data" });
    return;
  }

  dbConnection.query(noteQueries.addNote, [text, done], (err, data) => {
    if (err) {
      res.json({error: err});
      return;
    }
    res.status(200).json(data);
  });
});

notesRouter.delete("/:id", (req, res) => {
  const id = req.params.id;

  dbConnection.query(noteQueries.deleteNoteById, [id], (err, data) => {
    if (err) {
      res.json({error: err});
      return;
    }
    res.status(200).json(data);
  });  
});

module.exports = notesRouter;