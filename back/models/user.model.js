const { Schema, model } = require('mongoose');

/**
 * @description Mongoose schema for the User model.
 * Defines the structure for storing authenticated users in the database.
 */
const UserSchema = Schema({
    username: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }
});

module.exports = model("User", UserSchema, "users");