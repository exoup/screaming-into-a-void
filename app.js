//Middleware, etc here

//Dependencies
const express = require('express');
const path = require('path');
const public = path.join(__dirname, './dist');

//Using
const app = express();
app.set('trust proxy', 1);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Routes
// const root = require('./src/server/routes/root');
const events = require('./src/server/routes/events');

//Use routes
app.use(express.static(public));
// app.use('/', root(public));
app.use('/events', events);
app.get('*', (req, res) => {
    res.status(404).send('Your page is pining for the fjords.');
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Server Error');
});

module.exports = app;