const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello router" });
});

router.get("/notes", (req, res) => {
  res.send("hi from all notes");
});

module.exports = router;
