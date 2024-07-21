const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const session = require('express-session');
const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

const blogController = require('./controllers/blog')
const userController = require('./controllers/user')

const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')

const { checkUserSession, validateBlog } = require('./middlewares');
const { swaggerOptions } = require('./utils')

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

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {
    explorer: true
}))

global.loggedIn = null;
app.use('*', (req, res, next) => {
    global.loggedIn = req.session.userid;
    next()
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/posts/store', checkUserSession, validateBlog)

app.use('/auth', authRoute)
app.use(userRoute)

app.get('/', blogController.getBlogs)

app.use((req, res) => res.render('notfound'))

app.listen(3000, () => console.log('The app has started'))