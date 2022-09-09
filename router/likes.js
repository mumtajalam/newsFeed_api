const express = require("express");
const mongoose = require("mongoose");
const Likes = require("../models/Likes");
const router = express.Router();

router.get("/alllikes", async (req, res) => {
  try {
    const response = await Likes.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/addlikes", async (req, res) => {
  try {
    const tempobj = new Likes({
      feedid: req.body.feedid,
      userid: req.body.userid,
      name: req.body.name,
    });
    const response = await tempobj.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/search/:feedid", async (req, res) => {
  try {
    const feedid = req.params.feedid;
    const response = await Likes.find({ feedid: feedid });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
