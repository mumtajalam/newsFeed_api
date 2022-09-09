const mongoose = require("mongoose");

const LikeSchema = mongoose.Schema({
  feedid: {
    type: String,
    require: true,
    unique: true,
    index: true,
  },
  userid: {
    type: String,
    require: true,
  },
  name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Likes", LikeSchema);
