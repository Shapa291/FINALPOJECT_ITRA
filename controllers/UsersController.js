const { Users } = require("../models");
const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");

module.exports = {
  CreateUser: async (req, res) => {
    const { username, password, role } = req.body;
    const found = await Users.findOne({
      where: { username: username },
    });
    if (!found) {
      bcrypt.hash(password, 10).then((hash) => {
        Users.create({
          username: username,
          password: hash,
          role: role,
        });
        res.json("SUCCESS");
      });
    } else {
      res.json({ error: "User has registered" });
    }
  },
  PostLogUser: async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username: username } });
    if (!user) res.json({ error: "User Doesn't Exist" });
    bcrypt.compare(password, user.password).then(async (match) => {
      if (!match)
        res.json({ error: "Wrong Username And Password Combination" });
      const accessToken = sign(
        { username: user.username, id: user.id },
        "importantsecret"
      );
      res.json({
        token: accessToken,
        username: username,
        id: user.id,
        role: user.role,
      });
    });
  },
  GetUser: (req, res) => {
    res.json(req.user);
  },
  GetAllUsers: async (req, res) => {
    const listOfUsers = await Users.findAll();
    res.json({ listOfUsers: listOfUsers });
  },
  UpdateName: async (req, res) => {
    const id = req.params.id
    await Users.update(req.body, {where : {id: id}})
  }
};
