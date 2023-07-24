const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./routes");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use(route);
app.use(express.static(path.join(__dirname, "../public")));

app.listen(5000, () => {
  console.log("Server started http://localhost:5000");
});
