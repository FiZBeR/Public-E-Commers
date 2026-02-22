const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../config");

/**
 * @function authRequired
 * @description Express middleware to protect routes. Validates the JWT auth token extracted from cookies.
 * Continues to the next middleware/controller if valid, or returns 401/403 errors if missing or invalid.
 * @param {import('express').Request} req - Express request object, expects `token` in `req.cookies`
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next function to proceed in the routing chain
 */
const authRequired = (req, res, next) => {
    console.log("Validing Token");
    const { token } = req.cookies;

    if (!token) return res.status(401).json({ message: "No token, authorization denied" });

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });

        req.user = user;
        next();
    })
}

module.exports = {
    authRequired
}