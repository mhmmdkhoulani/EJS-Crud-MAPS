const { Router } = require("express");
const noteController = require("../controllers/noteController");
const router = Router();

router.get("/", noteController.home);
router.get("/about", noteController.about);
router.get("/addnote", noteController.addNotePage);
router.post("/addnote", noteController.createNote);
router.get("/note/:id", noteController.editNotePage);
router.put("/note/edit/:id", noteController.updateNote);
router.get("/note/delete/:id", noteController.deleteNote);

module.exports = router;
