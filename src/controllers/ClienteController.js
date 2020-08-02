const Cliente = require("../models/Cliente");

module.exports = {
  async store(req, res) {
    try {
      const cliente = await Cliente.create(req.body);
      return res.json(cliente);
    } catch (error) {
      return res.sendStatus(500);
    }
  },

  async index(req, res) {
    try {
      const clientes = await Cliente.findAll();
      return res.json(clientes);
    } catch (error) {
      return res.sendStatus(500);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.update(req.body, {
        where: { id },
        returning: true,
      });
      return res.json(cliente[1]);
    } catch (error) {
      return res.sendStatus(500);
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params;
      await Cliente.destroy({ where: { id } });
      return res.sendStatus(200);
    } catch (error) {
      return res.sendStatus(500);
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);
      return res.json(cliente);
    } catch (error) {
      return res.sendStatus(500);
    }
  },
};
