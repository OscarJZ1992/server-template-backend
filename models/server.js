require("dotenv").config();
const cors = require("cors");
const express = require("express");
const apiRoute = require("../routers/api.routes");
const routeEmployees = require("../routers/employees.routes");
class Server {
  constructor() {
    this.pathApi = "/api/";
    this.pathEmployees = "/employees/";
    this.port = process.env.PORT;
    this.app = express();
    this.routes();
    this.middlewares();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.pathApi, apiRoute);
    this.app.use(this.pathEmployees, routeEmployees);
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Listening for port: ", this.port);
    });
  }
}

module.exports = Server;
