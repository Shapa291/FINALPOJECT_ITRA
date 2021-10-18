const { Problems, Rate } = require("../models");

module.exports = {
  GetProblems: async (req, res) => {
    const listOfProblems = await Problems.findAll();
    res.json(listOfProblems);
  },
  GetProblemById: async (req, res) => {
    const id = req.params.id;
    const problem = await Problems.findByPk(id, { include: [Rate] });
    res.json(problem);
  },
  PostProblem: async (req, res) => {
    const problem = req.body;
    problem.username = req.user.username;
    await Problems.create(problem);
    res.json(problem);
  },
  UpdateProblem: async (req, res) => {
    const problemId = req.params.id;
    await Problems.update(req.body, {
      where: {
        id: problemId,
      },
    });
    res.json("updated succesfully");
  },
  DeleteProblem: async (req, res) => {
    const problemId = req.params.id;
    await Problems.destroy({
      where: {
        id: problemId,
      },
    });

    res.json("DELETED SUCCESFULLY");
  },
};
