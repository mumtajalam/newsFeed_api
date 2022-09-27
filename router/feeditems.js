const { response } = require("express");
const express = require("express");
const Feeditems = require("../models/Feeditems");
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
//http://localhost:4000/feeditems/edititem/:feedid
router.put("/edititem/:feedid", async (req, res) => {
  try {
    const tempId = req.params.feedid;
    const tempItem = {
      feedid: req.body.feedid,
      name: req.body.name,
      userid: req.body.userid,
      itemText: req.body.itemText,
      itemImage: req.body.itemImage,
    };
    const saveItem = await Feeditem.findOneAndUpdate(
      {
        feedid: tempId,
      },
      tempItem,
      { new: true }
    );
    res.status(201).json(saveItem);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
