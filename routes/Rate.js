const express = require("express");
const router = express.Router();
const { Rate } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");



router.post("/", validateToken, async (req, res) => {
  const { rate ,ProblemID } = req.body
  const UserId = req.user.id

 const found = await Rate.findOne({
    where: { ProblemId: ProblemID, UserId: UserId },
  });
  if (!found) {
    await Rate.create({ rate: rate, ProblemId:ProblemID,  UserId: UserId });
    res.json("Add");
  } else {
    await Rate.update({rate:rate},{where: {
        ProblemId: ProblemID, 
        UserId: UserId,
      }})
    res.json("Change");
  }
});


module.exports = router;
