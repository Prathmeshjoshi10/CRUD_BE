module.exports = (app) => {
  const notes = require("../controllers/note.controller");

  let router = require("express").Router();
  app.use("/api/notes", router);

  router.post("/create", notes.create);
  router.delete("/delete/:id", notes.delete);
  router.patch("/edit/:id", notes.edit);
  router.get("/getAll/:userId", notes.getAll);
  router.get("/search/:userId/:searchText", notes.search);
};
