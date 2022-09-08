const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
  commentid: {
    type: String,
    unique: true,
  },
  feedid: {
    type: String,
    require: true,
  },
  userid: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  text: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
