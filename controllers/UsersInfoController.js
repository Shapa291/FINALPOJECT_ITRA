const { UsersInfo } = require("../models");

module.exports = {
  PostUsersInfo: async (req, res) => {
    const { ProblemID } = req.body;
    const UserId = req.user.id;

    const found = await UsersInfo.findOne({
      where: { ProblemId: ProblemID, UserId: UserId },
    });

    if (!found) {
      await UsersInfo.create({ ProblemId: ProblemID, UserId: UserId });
      res.json("SUCCESS");
    } else {
      UsersInfo.update({
        where: {
          ProblemId: ProblemID,
          UserId: UserId,
        },
      });
      res.json("UPDATED");
    }
  },
  GetUsersInfo: async (req, res) => {
    const id = req.params.id;
    const UsersInfoList = await UsersInfo.findAll({
      where: {
        Userid: id,
      },
    });
    res.json(UsersInfoList);
  },
};
