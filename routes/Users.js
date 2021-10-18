const express = require("express");
const router = express.Router();
const {validateToken} = require('../middlewares/AuthMiddleware')
const controller = require("../controllers/UsersController");

router.post("/", controller.CreateUser);

router.post("/login", controller.PostLogUser);

router.get('/auth',validateToken, controller.GetUser)

router.get('/list' ,controller.GetAllUsers)

router.put('/:id', controller.UpdateName)

module.exports = router;
