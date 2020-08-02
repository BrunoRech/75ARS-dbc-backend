const express = require("express");
const ClienteController = require("./controllers/ClienteController");

const routes = express.Router();

routes.post("/clientes", ClienteController.store);
routes.get("/clientes", ClienteController.index);
routes.put("/clientes/:id", ClienteController.update);
routes.get("/clientes/:id", ClienteController.show);
routes.delete("/clientes/:id", ClienteController.destroy);

module.exports = routes;
