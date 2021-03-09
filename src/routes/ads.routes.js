'use strict'

const { Router } = require("express");
const router = Router();


const { renderAdForm, createNewAd, renderAds, deleteAd, eraseAds } = require("../controllers/ads.controller");

router.get("/ads/NewAddForm", renderAdForm);

router.post("/ads/new-ad", createNewAd);

router.get("/ads", renderAds);

router.get("/ads/deleteAd/:id", deleteAd);

router.post("/ads/delete-old", eraseAds);


module.exports = router;