const express = require("express");
const { validateToken } = require("../middlewares/AuthMiddleware");
const router = express.Router();
const controller = require("../controllers/ProblemController");

router.get("/", controller.GetProblems);

router.get("/byId/:id", controller.GetProblemById);

router.post("/", validateToken, controller.PostProblem);

router.put("/:id", controller.UpdateProblem);

router.delete("/:id", controller.DeleteProblem);

module.exports = router;
