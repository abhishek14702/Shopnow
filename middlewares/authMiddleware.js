const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
//Decoding and verifying JWT tokens
const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded?.id);

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});
// to verify admin user through token data in req.user set in authMiddleware above
const isAdmin = asyncHandler(async (req, res, next) => {
  console.log("req.user", req.user);
  console.log("req.user.mail", req.user.email);
  const { email } = req.user;
  const adminUser = await User.findOne({ email: email });
  if (adminUser.role !== "admin") {
    res.status(401);
    throw new Error("Not authorized as an admin");
  } else {
    next();
  }
});

module.exports = { authMiddleware, isAdmin };
