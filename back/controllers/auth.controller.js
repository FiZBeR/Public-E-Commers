const User = require("../models/user.model");
const bcrypt = require('bcryptjs');
const { createAccessToken } = require('../libs/jwt');

/**
 * @function register
 * @description Registers a new user in the system, hashes their password, and sets an auth token via cookies.
 * @param {import('express').Request} req - Express request object containing `email`, `password`, and `username` in `req.body`
 * @param {import('express').Response} res - Express response object
 * @returns {Promise<import('express').Response>} JSON response with success message or error status
 */
const register = async (req, res) => {

    const { email, password, username } = req.body;

    try {

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id });

        res.cookie('token', token);
        res.status(200).json({
            message: "user created successfully"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }

}

/**
 * @function login
 * @description Authenticates a user, verifies the hashed password, and issues an auth token cookie.
 * @param {import('express').Request} req - Express request object containing `email` and `password` in `req.body`
 * @param {import('express').Response} res - Express response object
 * @returns {Promise<import('express').Response>} JSON response indicating welcome message or error status
 */
const login = async (req, res) => {

    const { email, password } = req.body;

    try {

        const userFound = await User.findOne({ email });

        if (!userFound) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, userFound.password);

        if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

        const token = await createAccessToken({ id: userFound._id });

        res.cookie('token', token);
        res.status(200).json({
            message: "Welcome"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }

}

/**
 * @function logout
 * @description Logs out the currently authenticated user by clearing the auth token cookie.
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @returns {import('express').Response} JSON response confirming logout
 */
const logout = (req, res) => {
    res.cookie('token', "", { expires: new Date(0) })
    return res.status(200).json({ message: "Bye" });
}

module.exports = {
    register,
    login,
    logout
}