require('dotenv');
const express = require('express');
// const router = express.Router();
// const Post = require('../models/Post');


const app = express();


app.get('', (req, res) => {
    res.send('Hello World');
})

module.exports = app;