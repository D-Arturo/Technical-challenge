'use strict';

const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const handlebars = require('handlebars');
const session = require('express-session');
const flash = require('connect-flash');

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

app.use(session({
    secret:'secret',
    resave: true, 
    saveUninitialized: true
}));
app.use(morgan('dev'));
app.use(flash());

app.use((req, res,next) => {
    res.locals.error_msg = req.flash('error_msg');
    next(); 
});


app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.use(require('./routes/ads.routes'));



module.exports = app;