const express = require("express");
const router = express.Router();
const ShopifyCatalogueControllers = require("../controllers/shopifyCatalogueControllers");

router.post("/", ShopifyCatalogueControllers.getShopifyCatalogue);

module.exports = router;
