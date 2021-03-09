"use strict";

const { createAd, checkContent, getAllAds } = require("./adsControllerFunctions");
const adsCtrl = {};

const Ad = require("../models/ads");

adsCtrl.renderAdForm = (req, res) => {
  res.render("ads/new-ad");
};

adsCtrl.createNewAd = async (req, res) => {
  const { title, description } = req.body;
  if (checkContent(title, description)) {
    await createAd({title:title, description:description});
  }
  res.redirect("/ads");
};

adsCtrl.renderAds = async (req, res) => {
  res.render("ads/all-ads", { ads: await getAllAds() });
};

adsCtrl.deleteAd = async (req, res) => {
  await Ad.findByIdAndDelete(req.params.id);
  res.redirect("/ads");
};

module.exports = adsCtrl;
