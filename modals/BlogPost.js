const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPOstSchema = new Schema({
    title: String,
    body: String,
    username: String,
    date_posted: {
        type: Date,
        default: new Date()
    }
})

const BlogPOst = mongoose.model('BlogPost', BlogPOstSchema);

module.exports = BlogPOst