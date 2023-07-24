const auth = (req, res, next) => {
  console.log(req.headers);
  if (req.headers.authorization === "Bearer 1234") {
    next();
    return;
  }
  res
    .status(401)
    .json({ status: 401, message: "Unauthorized Request", data: null });
};

module.exports = {
  auth,
};

