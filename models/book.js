const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//controller needs to know how to talk to mongo.
const bookSchema = new Schema(
    {
        title: { type: String },
        author: { type: String },
        user: { type: Schema.Types.ObjectId, ref: 'User' },
    }
);

module.exports = mongoose.model("Book", bookSchema);