"use strict";

const {
  createAd,
  checkContent,
  getAllAds,
  AdDelete,
  erasingAds,
  checkNumberofAds,
  eraseOldestAd,
} = require("./adsControllerFunctions");
const adsCtrl = {};

const Ad = require("../models/ads");

adsCtrl.renderAdForm = (req, res) => {
  res.render("ads/new-ad");
};

adsCtrl.createNewAd = async (req, res) => {
  const { title, description } = req.body;
  if(await checkNumberofAds()){
    if (checkContent(title, description)) {
      await createAd({ title: title, description: description });
      res.redirect("/ads");
    } else {
      req.flash('error_msg', 'Title and description must be different');
      res.redirect("/ads");
    }
  } else {
    req.flash('error_msg', '100 ads limit reached. The oldest one has been deleted, please proceed again creating a new ad.');
    await eraseOldestAd();
    res.redirect("/ads");
  }
};

adsCtrl.renderAds = async (req, res) => {
  res.render("ads/all-ads", { ads: await getAllAds() });
};

adsCtrl.deleteAd = async (req, res) => {
  await AdDelete(req.params.id);
  res.redirect("/ads");
};

adsCtrl.eraseAds = async (req, res) => {
  const EraseDateRef = req.body.ReferenceDate;
  const ads = await getAllAds();
  erasingAds(ads, EraseDateRef);
  res.redirect("/ads");
};

module.exports = adsCtrl;
