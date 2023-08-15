const { Router } = require("express");

const usersRoutes = require ("./users.routes");

const routes = Router();

usersRoutes.use("/users", usersRoutes);

module.exports = routes;