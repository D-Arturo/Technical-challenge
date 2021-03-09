'use strict'

const Ad = require('../models/ads');


function checkContent(title,description){
    if(title !== description){
        return true;
    }
}

function createAd(param){
    return new Ad(param).save();
}

function getAllAds(){
    return Ad.find().lean();
}

function AdDelete(id){
    return Ad.findByIdAndDelete(id);
}

function erasingAds(ads, EraseDateRef){
    
    const refDate = new Date(EraseDateRef);
    ads.forEach(async (element) => {
      if (element.createdAt < refDate) {      
        await AdDelete(element._id)
      }
    });
}

module.exports = { createAd, checkContent, getAllAds, AdDelete, erasingAds }