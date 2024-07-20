const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const BlogPOst = require('./modals/BlogPost')

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

app.get('/about', (req, res) => {
    res.render(path.resolve(__dirname, 'views/about'))
})

app.get('/contact', (req, res) => {
    res.render(path.resolve(__dirname, 'views/contact'))
})

app.post('/posts/store', async (req, res) => {
    console.log('request data', req.body)
    try {
        const blog = new BlogPOst(req.body)
        await blog.save();
        // res.status(201).send('blog saved successfully')
        res.redirect('/')
    } catch (err) {
        console.log('error in saving data in db', err)
    }
})

app.get('/posts/new', (req, res) => {
    res.render(path.resolve(__dirname, 'views/create'))
})

app.get('/post', (req, res) => {
    res.render(path.resolve(__dirname, 'views/post'))
})

app.get('/', (req, res) => {
    res.render(path.resolve(__dirname, 'views/index'))
})

app.listen(3000, () => console.log('The app has started'))