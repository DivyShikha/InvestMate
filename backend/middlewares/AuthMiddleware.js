const jwt = require("jsonwebtoken");

exports.requireAuth = (req, res, next) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    req.user = jwt.verify(token, process.env.TOKEN_KEY); // {id, role, iat, exp}
    next();
  } catch {
    return res.status(401).json({ message: "Invalid/expired token" });
  }
};

exports.requireRole = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) return res.status(403).json({ message: "Forbidden" });
  next();
};
