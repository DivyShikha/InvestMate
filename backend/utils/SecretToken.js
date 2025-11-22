const jwt = require("jsonwebtoken");

exports.createSecretToken = (id, role) =>
  jwt.sign({ id, role }, process.env.TOKEN_KEY, { expiresIn: "3d" });
