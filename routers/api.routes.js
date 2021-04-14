const { Router } = require("express");
const routeEmployees = Router();
const { getApi, getQuery } = require("../controllers/api.controller");

routeEmployees.get("/:id", getApi);
routeEmployees.get("/", getQuery);

module.exports = routeEmployees;
