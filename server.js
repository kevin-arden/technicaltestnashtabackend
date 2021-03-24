const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const router = require("./src/routes/");

app.use(cors());
app.use(bodyParser.json());
app.use("/image/", express.static("uploads"));
app.use("/api/v1/", router);
app.get("/", (req, res) => {
  res.send("Express Running");
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening on port ${port}, app ready`);
});
