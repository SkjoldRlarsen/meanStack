const express = require('express');
const  app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path')

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('could not connect to database:', err)
    }else
    {
        console.log('connected to databse:' +config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/client'));

// Connect server to Angular 2 Index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(8080, () =>{

    console.log('listing on port 8080');
    });