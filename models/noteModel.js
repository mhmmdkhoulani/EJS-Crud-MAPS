const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is require"] },
    desc: { type: String, required: [true, "Title is require"] },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
