const mongoose = require('mongoose');

// Define the Article Schema
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    publishedAt: {
        type: Date,
        default: Date.now
    },
    tags: [{
        type: String
    }],
    // You can add more fields as needed
});

// Create the Article model
const Article = mongoose.model('Article', articleSchema);


module.exports = Article;
module.exports = User;
