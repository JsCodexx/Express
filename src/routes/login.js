const route = require("express").Router();

route.post("/", (req, res) => {
  const { username, password } = req.body;
  console.log({ username, password });
  if (username === "admin" && password === "1234") {
    return res
      .status(200)
      .json({ status: 200, message: "Login Successfull", data: null });
  }
  return res
    .status(401)
    .json({ status: 401, message: "Login Failed", data: null });
});

module.exports = route;
