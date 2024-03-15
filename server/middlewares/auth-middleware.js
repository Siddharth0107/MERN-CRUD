const jwt = require('jsonwebtoken');
const User = require("../models/user-models");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: "unauthorized HTTP, Token not found" });
    }

    const jwtToken = token.replace("Bearer ", "").trim();
    // console.log("token from auth middleware", jwtToken);
    try {
        const isVerifed = jwt.verify(jwtToken, process.env.JWT_KEY);
        const userData = await User.findOne({ email: isVerifed.email }).select({ password: 0 });
        // console.log(userData);
        req.user = userData;
        req.token = token
        req.userID = userData._id;
        
        next();
    } catch (error) {
        return res.status(401).json({ message: "unauthorized HTTP, Token not found" });
    }

}

module.exports = authMiddleware;