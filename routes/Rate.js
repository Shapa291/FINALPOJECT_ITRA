const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");
const controller = require("../controllers/RateController");

router.post("/", validateToken, controller.PostRate);

module.exports = router;
