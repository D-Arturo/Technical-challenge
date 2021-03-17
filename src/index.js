'use strict';

require('dotenv').config();

const app = require('./server');
require('./database');

const server = app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});

module.exports = { app, server }