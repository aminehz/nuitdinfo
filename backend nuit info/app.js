var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const Solution = require('./models/Solution');
const Users=require('./models/Users');
const QuizPage=require('./models/QuizPage');
const ChatBotMessagePage=require('./models/ChatBotMessage');
const routes=require("./routes/routes");
const cors=require('cors');


var app = express();
app.use(cors());
app.use("/",routes);


// view engine setup


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//model produit
Solution.createTable();
Users.createTable();
QuizPage.createTable();
ChatBotMessagePage.createTable();
const port = 3031;
app.listen(port,()=>{
  console.log(("server"))
})

module.exports = app;
