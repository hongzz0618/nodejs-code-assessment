import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const authUserRole = (role) => {
  return async (req, res, next) => {
    try {
      const hasAccess = role.includes(req.user.role);
      if (!hasAccess) return res.status(401).json({ message: "Not allowed" });

      next();
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
};

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).json({ message: "Not allowed" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Not allowed" });
    req.user = user;
    next();
  });
};
