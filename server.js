'use strict';

const express = require("express");
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/style.css', (req, res)=>{
    res.sendFile(__dirname + "/public/style.css");
});

app.get('/main.js', (req, res)=>{
    res.sendFile(__dirname + "/public/main.js");
});

let server = http.listen(3000);