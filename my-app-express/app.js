const express = require('express')

// express app
const app = express()

// register view engine
app.set('view engine', 'ejs')

// listen for request
app.listen(3000)

app.get('/', (req, res) => {
    // res.send('<p>Home page</p>')
    // res.sendFile('./views/index.html', {root: __dirname})
    res.render('index')
})
app.get('/about', (req, res) => {
    // res.send('<p>Home page</p>')
    // res.sendFile('./views/about.html', {root: __dirname})
    res.render('about')
})

app.get('/blogs/create', (req, res) => {
    res.render('create')
})

// redirects
app.get('/about-us', (req, res) => {
    res.render('about')
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404')
})