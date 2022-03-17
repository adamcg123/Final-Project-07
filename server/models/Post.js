const { Schema, model} = require("mongoose");
const mongoose = require("../config/connection");

const PostSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
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
            ref: "Comment"
        }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

const Post = model("Post", PostSchema);
module.exports = Post;