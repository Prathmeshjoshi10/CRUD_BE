const { text } = require("body-parser");
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    note: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
noteSchema.index({ title: "text", note: "text" });
const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
