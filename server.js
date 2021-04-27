require('dotenv').config()

const mongodbUsername = process.env.mongodbRocketObjectUsername
const mongodbPassword = process.env.mongodbRocketObjectPassword
const PORT = process.env.PORT || 3001;

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const mongoose = require('mongoose');
mongoose.connect(
    `mongodb+srv://${mongodbUsername}:${mongodbPassword}@cluster0.pt47s.mongodb.net/whiteboard`,
    {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(PORT);

console.log('App listening on ' + PORT);