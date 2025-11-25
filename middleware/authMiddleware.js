import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization; // e.g. "Bearer <token>"
//   console.log(">>>>>auth header", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Extract token part

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(">>>>decoded",decoded)
    req.user = decoded; // attach user info (id, name, admin) to request
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.admin) {
      next();
    } else {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    next(); // any logged-in user can view
  });
};