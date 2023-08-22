const noteQueries = {
  getAllNotes: "SELECT * FROM Notes",
  getNoteById: "SELECT * FROM Notes WHERE id = ?",
  addNote: "INSERT INTO Notes (id, text, done) VALUES (UUID(), ?, ?)",
  deleteNoteById: "DELETE FROM Notes WHERE id = ?",
}

module.exports = noteQueries;