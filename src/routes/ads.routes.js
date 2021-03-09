'use strict'

const { Router } = require("express");
const router = Router();


const { renderAdForm, createNewAd, renderAds } = require("../controllers/ads.controller");

router.get("/ads/NewAddForm", renderAdForm);

router.post("/ads/new-ad", createNewAd);

router.get("/ads", renderAds);


module.exports = router;