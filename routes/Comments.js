const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { route } = require("./Users");

router.get("/:problemId", async (req, res) => {
  const problemId = req.params.problemId;
  const comments = await Comments.findAll({
    where: {
      ProblemId: problemId,
    },
  });
  res.json(comments);
});

router.post("/", validateToken, async (req, res) => {
  const comment = req.body;
  const username = req.user.username
  comment.username = username
  await Comments.create(comment);
  res.json(comment);
});

router.delete("/:commentId", validateToken, async (req, res) => {
  const commentId = req.params.commentId
  await Comments.destroy({where: {
    id: commentId,
  }})
  
  res.json("DELETED SUCCESFULLY")
})

module.exports = router;
