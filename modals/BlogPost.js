const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPOstSchema = new Schema({
    title: String,
    body: String,
})

const BlogPOst = mongoose.model('BlogPost', BlogPOstSchema);

module.exports = BlogPOst