const Note = require("../models/noteModel");

exports.home = async (req, res) => {
  try {
    const notes = await Note.find();

    res.render("index", { notes });
  } catch (error) {}
};

exports.about = async (req, res) => {
  res.render("about");
};

exports.addNotePage = async (req, res) => {
  res.render("addNote");
};
exports.createNote = async (req, res) => {
  const note = await Note.create(req.body);
  res.redirect("/");
};
exports.editNotePage = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.render("updateNote", { note });
};

exports.updateNote = async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
};

exports.deleteNote = async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
