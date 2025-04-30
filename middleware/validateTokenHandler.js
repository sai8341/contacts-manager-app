const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;

  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader || authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    if (!token) {
      res.status(401);
      throw new Error("Token is missing");
    }

    jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized!");
      } else {
        // console.log(decoded);
        req.user = decoded.user;
        // console.log(req.user);
      }
      next();
    });
  }
});

module.exports = validateToken;
