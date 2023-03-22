const catchAsyncError = require("./catchAsyncError");
const ErroHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return next(new ErroHandler("Please login to access this resourse", 401));

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);

  next();
});

exports.authorizedRole =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(new ErroHandler(
        `Role: ${req.user.role} not allowed to access this resourse` ,403
      ));

    next();
  };
