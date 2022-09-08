const express = require("express");
const app = express();
const cors = require("cors");
const colors = require("colors");
const { default: mongoose } = require("mongoose");
const userRoute = require("./router/user");
const feeditemsRoute = require("./router/feeditems");
const commentsRoute = require("./router/comments");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    console.log("server started...");
    res.send("app running.");
  } catch {}
});

app.use("/user", userRoute);
app.use("/feeditems", feeditemsRoute);
app.use("/comments", commentsRoute);
mongoose.connect(
  "mongodb+srv://mumtajalam21:3qqVdwxkDMbSfJc@cluster0.fmfryr3.mongodb.net/social?retryWrites=true&w=majority",
  () => {
    console.log(colors.yellow("MongoDB connected..."));
  }
);

app.listen(4000);
