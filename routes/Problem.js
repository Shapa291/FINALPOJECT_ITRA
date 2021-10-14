const express = require("express");
const { validateToken } = require("../middlewares/AuthMiddleware");
const router = express.Router();
const {Problems, Rate} = require('../models');


router.get("/", async (req, res) => {
  const listOfProblems = await Problems.findAll();
  res.json(listOfProblems)
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id
  const problem = await Problems.findByPk(id, {include: [Rate]})
  res.json(problem)
})

router.post("/",validateToken ,async (req, res) => {
  const problem = req.body;
  problem.username = req.user.username
  await Problems.create(problem);
  res.json(problem);
});

router.put("/:id", async (req, res) => {
  const problemId = req.params.id
  await Problems.update(req.body, {where: {
    id: problemId,
  }})

  res.json("updated succesfully")
})

router.delete("/:id", async (req, res) => {
  const problemId = req.params.id
  await Problems.destroy({where: {
    id: problemId,
  }})
  
  res.json("DELETED SUCCESFULLY")
})

module.exports = router;
