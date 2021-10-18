const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");
const controller = require("../controllers/CommentsController");

router.get("/:problemId", controller.AddComment);

router.post("/", validateToken, controller.GetComment);

router.delete("/:commentId", validateToken, controller.DeleteComment);

module.exports = router;
