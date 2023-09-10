//Middleware, etc here

//Dependencies
const express = require('express');
const path = require("path");
const public = path.join(__dirname, './src/client/public');

//Using
const app = express();
app.set('trust proxy', 1);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/client/views'));
// app.engine('html', require('ejs').renderFile);


//Routes
const root = require('./src/server/routes/root');

//Use routes
app.use(express.static(public));
app.use('/', root);
app.get('*', (req, res) => {
    res.status(404).send("Your page is pining for the fjords.");
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Server Error');
});

module.exports = app;