const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const GreetingRoutes = require("./routes/greetingRoutes");
const ShopifyCatalogueRoutes = require("./routes/shopifyCatalogueRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", GreetingRoutes);
app.use("/api/v1/shopify_catalogue", ShopifyCatalogueRoutes);

module.exports = app;
