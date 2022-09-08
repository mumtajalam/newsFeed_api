const express = require("express");
const { find } = require("../models/Comments");
const router = express.Router();
const Comment = require("../models/Comments");

// http://localhost:4000/comments/addcomment
router.post("/addcomment", async (req, res) => {
  try {
    const tempComment = new Comment({
      commentid: req.body.commentid,
      feedid: req.body.feedid,
      userid: req.body.userid,
      name: req.body.name,
      text: req.body.text,
      date: req.body.date,
    });
    const response = await tempComment.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400), json(err);
  }
});

//http://localhost:4000/comments/allcomments
router.get("/allcomments", async (req, res) => {
  try {
    const response = await Comment.find();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

//http://localhost:4000/comments/search/:id
router.get("/search/:feedid", async (req, res) => {
  try {
    const feedid = req.params.feedid;
    const response = await Comment.find({ feedid: feedid });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
