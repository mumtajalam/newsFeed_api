const mongoose = require("mongoose");

const FeedsSchema = mongoose.Schema({
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
    require: true,
  },
  itemText: {
    type: String,
  },
  itemImage: {
    type: String,
  },
});

module.exports = mongoose.model("Feeditems", FeedsSchema);
