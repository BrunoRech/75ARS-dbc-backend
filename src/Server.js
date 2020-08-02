const express = require("express");
const routes = require("./Routes");
const cors = require("cors");
require("./database");

const server = express();
server.use(express.json());
server.use(cors());
server.use(routes);
server.listen(3333);
