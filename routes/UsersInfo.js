const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");
const controller = require("../controllers/UsersInfoController");

router.post("/", validateToken, controller.PostUsersInfo)

router.get("/:id", controller.GetUsersInfo )

module.exports = router;
