const { Schema, model} = require("mongoose");
const mongoose = require("../config/connection");

const CommentSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        commentBody: {
            type: String
        },
        user: [{
            type: Schema.Types.ObjectId, 
            ref: "Users"
        }],
        likes: [{
            type: Schema.Types.ObjectId,
            ref: "Users"
        }],
        comments: [{
            type: Schema.Types.ObjectId,
            ref: "Users"
        }]
    }
)

const Comment = model("Comment, CommentSchema");
module.exports = Comment;