const login = require("./login");
const user = require("./user");
const route = require("express").Router();

route.use("/login", login);
route.use("/user", user);

module.exports = route;
