'use strict'

const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const handlebars = require('handlebars');

const app = express();


app.set('port', process.env.PORT || 4000);


app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    handlebars: handlebars
}));
app.set('view engine', '.hbs');


app.use(morgan('dev'));


app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(express.json());


app.use(require('./routes/ads.routes'));


app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;