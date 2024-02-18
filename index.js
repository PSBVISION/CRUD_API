const express = require('express');
const mongoose = require('mongoose');

const app = express();



app.get('/', (req, res) => {
    res.send('Hello from node API badmash! ');
});

mongoose.connect("mongodb+srv://admin:9Y6aNJTHrkCqmeYf@cluster0.yf6gjbd.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log('Connection failed!');
});