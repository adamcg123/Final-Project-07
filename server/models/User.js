const { Schema, model} = require("mongoose");
const mongoose = require("../config/connection");
const bycrpt = require("bycrpt");

// check for password
class User extends model {
    checkPassword(loginPw) {
        return bycrpt.compareSync(loginPw, this.password);
    }
}

const UserSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
            trimmed: true,
            maxlength: 28
        },
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
            maxlength: 28
        },
        email: {
            type: String,
            required: true,
            trimmed: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        password: {
            type: String,
            required: true,
            validate: {
                len:[12]
            }
        },
        followers: [{
            type: Schema.Types.ObjectId, 
            ref: "Users"
        }],
        following: [{
            type: Schema.Types.ObjectId,
            ref: "Users"
        }]
    }
)

const User = model("User", UserSchema);
module.exports = User;