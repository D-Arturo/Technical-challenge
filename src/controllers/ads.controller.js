'use strict';

const adsCtrl = {};


const Ad = require('../models/ads');


adsCtrl.renderAdForm = (req,res) => {
    res.render('ads/new-ad');
};


module.exports = adsCtrl;