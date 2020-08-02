const express = require("express");
const ClienteController = require("./controllers/ClienteController");

const routes = express.Router();

routes.post("/clientes", ClienteController.store);
routes.get("/clientes", ClienteController.index);
routes.delete("/clientes/:id", ClienteController.destroy);
routes.get("/clientes/:id", ClienteController.show);

module.exports = routes;
