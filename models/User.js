const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  userid: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
