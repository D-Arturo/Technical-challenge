'use strict';

const mongoose = require("mongoose");

const ADS_APP_MONGODB_HOST = process.env.ADS_APP_MONGODB_HOST;
const ADS_APP_MONGODB_DATABASE = process.env.ADS_APP_MONGODB_DATABASE;

const MONGODB_URI = `mongodb://${ADS_APP_MONGODB_HOST}/${ADS_APP_MONGODB_DATABASE}`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));
