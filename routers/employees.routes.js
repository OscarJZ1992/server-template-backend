const { Router } = require("express");
const routeEmployees = Router();
const { getEmployees } = require("../controllers/employees.controller");
routeEmployees.get("/", getEmployees);

module.exports = routeEmployees;
