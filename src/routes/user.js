const route = require("express").Router();
const { data } = require("../json");
const { auth } = require("../middleware/auth");
const { checks } = require("../middleware/checks");

route.get("/", auth, (req, res) => {
  return res.status(200).json({
    status: 200,
    message: null,
    data,
  });
});

route.post("/fname", checks, (req, res) => {
  return res.status(200).json({
    status: 200,
    message: null,
    data: { data },
  });
});

route.get(
  "/:id",
  (req, res, next) => {
    // if the user ID is 0, skip to the next router
    if (req.params.id === "0") next("route");
    // otherwise pass control to the next middleware function in this stack
    else next();
  },
  (req, res, next) => {
    // render a regular page
    res.render("regular");
  }
);

module.exports = route;
