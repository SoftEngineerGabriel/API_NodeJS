const {Router} = require ("express");
const UserController = require("../controllers/UsersControllers");

const UsersController = require("../controllers/UsersControllers");

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/", usersController.create)

module.exports = usersRoutes;
