'use strict'

const adsCtrl = {};


const Ad = require('../models/ads');


adsCtrl.renderAdForm = (req,res) => {
    res.render('ads/new-ad');
};

adsCtrl.createNewAd = async (req,res) => {
    const {title, description} = req.body;
    const NewAd = new Ad ({title:title, description:description});
    await NewAd.save();
    
    res.redirect('/ads');
};

adsCtrl.renderAds = async (req, res) => {
    const ads = await Ad.find().lean();
    res.render('ads/all-ads', {ads});
};


module.exports = adsCtrl;