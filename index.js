const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const blogController = require('./controllers/blog')
const customMiddleWares = require('./middlewares')

mongoose.connect('mongodb://localhost/my_database')
    .then(() => console.log('connected to mongodb'))
    .catch((err) => console.log('mongodb connection error') )

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/posts/store', customMiddleWares.validateBlog)

app.post('/posts/store', blogController.storeBlog)

app.get('/posts/new', blogController.newBlog)

app.get('/post/:id', blogController.getBlogById)

app.get('/', blogController.getBlogs)

app.listen(3000, () => console.log('The app has started'))