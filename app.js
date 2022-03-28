const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middleware
app.use(cors());
app.use(bodyParser.json());

// import Routes
const postsRouter =require('./routes/posts');
app.use('/posts',postsRouter)
// Reoutes
app.get('/',(req,res)=>{res.send('Hello Express World');});
//Db Connecting
mongoose.connect(process.env.DB_CONNECTION,console.log("connected to db"));
// Lestining 
app.listen(3000);