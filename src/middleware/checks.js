const checks = (req, res, next) => {
  //to get from value from url we use param specially in get req but in other methods we use body

  const { fname } = req.body;
  console.log(fname);
  if (fname === "nauman") {
    next(); // Call next middleware or route handler
  } else {
    res.status(400).json({
      status: 400,
      message: "First name must be 'nauman'",
      data: null,
    });
  }
};

module.exports = {
  checks,
};
