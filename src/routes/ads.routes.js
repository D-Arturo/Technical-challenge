const { Router } = require("express");
const router = Router();


const { renderAdForm } = require("../controllers/ads.controller");

router.get("/ads/NewAddForm", renderAdForm);


module.exports = router;