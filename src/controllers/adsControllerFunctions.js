"use strict";

const Ad = require("../models/ads");

function checkContent(title, description) {
  if (title !== description) {
    return true;
  }
}

function createAd(param) {
  return new Ad(param).save();
}

function getAllAds() {
  return Ad.find().lean();
}

function AdDelete(id) {
  return Ad.findByIdAndDelete(id);
}

function erasingAds(ads, EraseDateRef) {
  const refDate = new Date(EraseDateRef);
  const today = new Date();
  if(refDate <= today){
    ads.forEach(async (element) => {
      if (element.createdAt < refDate) {
        await AdDelete(element._id);
      }
    });
  }
}

async function checkNumberofAds(){
    const ads = await getAllAds();
    if(ads.length < 10){
        return true
    } else{
        return false
    }
}

async function eraseOldestAd (){
  const existingAds = await getAllAds();
  let oldestAdId = 0;
  let oldestDate = new Date();
  existingAds.forEach(async (element) => {
    if(element.createdAt < oldestDate) {
      oldestDate = element.createdAt;
      oldestAdId = element._id
    }
  })

  await AdDelete(oldestAdId);
}

module.exports = { createAd, checkContent, getAllAds, AdDelete, erasingAds, checkNumberofAds, eraseOldestAd };
