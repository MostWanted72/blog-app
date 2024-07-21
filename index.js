const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const session = require('express-session');

const blogController = require('./controllers/blog')
const userController = require('./controllers/user')

const { checkUserSession, validateBlog } = require('./middlewares')

mongoose.connect('mongodb://localhost/my_database')
    .then(() => console.log('connected to mongodb'))
    .catch((err) => console.log('mongodb connection error') )

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(session({
    secret: 'Lazy Galaxy',
    saveUninitialized: true,
    cookie: { maxAge: 50000 }
}))

global.loggedIn = null;
app.use('*', (req, res, next) => {
    global.loggedIn = req.session.userid;
    next()
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/posts/store', checkUserSession, validateBlog)

app.get('/auth/register', checkUserSession, userController.registerUser)

app.get('/auth/login', checkUserSession, userController.loginUser)

app.post('/user/login', checkUserSession, userController.postLoginUser)

app.post('/users/register', checkUserSession, userController.saveUser)

app.post('/posts/store', checkUserSession,  blogController.storeBlog)

app.get('/posts/new', checkUserSession, blogController.newBlog)

app.get('/post/:id', blogController.getBlogById)

app.get('/', blogController.getBlogs)

app.listen(3000, () => console.log('The app has started'))