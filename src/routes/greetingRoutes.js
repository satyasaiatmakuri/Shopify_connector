const express = require("express");
const router = express.Router();
const GreetingControllers = require("../controllers/greetingControllers");

router.get("/", GreetingControllers.greetingGetRequest);
router.post("/", GreetingControllers.greetingPostRequest);

module.exports = router;
