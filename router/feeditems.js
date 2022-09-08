const express = require("express");
const Feeditem = require("../models/Feeditems");

const router = express.Router();

// http://localhost:4000/feeditems/additems
router.post("/additems", async (req, res) => {
  try {
    const tempItem = new Feeditem({
      feedid: req.body.feedid,
      userid: req.body.userid,
      name: req.body.name,
      itemText: req.body.itemText,
      itemImage: req.body.itemImage,
    });
    const response = await tempItem.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

// http://localhost:4000/feeditems/allitems
router.get("/allitems", async (req, res) => {
  try {
    const response = await Feeditem.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
