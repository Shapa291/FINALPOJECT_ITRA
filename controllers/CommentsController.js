const { Comments } = require("../models");
module.exports = {
  AddComment: async (req, res) => {
    const problemId = req.params.problemId;
    const comments = await Comments.findAll({
      where: {
        ProblemId: problemId,
      },
    });
    res.json(comments);
  },
  GetComment: async (req, res) => {
    const comment = req.body;
    const username = req.user.username;
    comment.username = username;
    await Comments.create(comment);
    res.json(comment);
  },
  DeleteComment: async (req, res) => {
    const commentId = req.params.commentId;
    await Comments.destroy({
      where: {
        id: commentId,
      },
    });

    res.json("DELETED SUCCESFULLY");
  },
};
