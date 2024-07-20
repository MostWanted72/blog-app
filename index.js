const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/about', (req, res) => {
    res.render(path.resolve(__dirname, 'views/about'))
})

app.get('/contact', (req, res) => {
    res.render(path.resolve(__dirname, 'views/contact'))
})

app.get('/post', (req, res) => {
    res.render(path.resolve(__dirname, 'views/post'))
})

app.get('/', (req, res) => {
    res.render(path.resolve(__dirname, 'views/index'))
})

app.listen(3000, () => console.log('The app has started'))