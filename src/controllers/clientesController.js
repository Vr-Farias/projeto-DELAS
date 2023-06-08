const clientes = require("../models/clientes.js");

class ClienteController {
  // GET
  static getAllClientes = (req, res) => {
    clientes.find((err, clientes) => {
      res.status(200).json(clientes);
    });
  };

  // CREATE
  static createClientes = (req, res) => {
    let cliente = new clientes(req.body);

    cliente.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar.` });
      } else {
        res.status(201).send(cliente.toJSON());
      }
    });
  };

  // UPDATE
  static updateClientes = (req, res) => {
    const id = req.params.id;
    clientes.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res
          .status(200)
          .send({ message: "Cliente atualizadx com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  // DELETE
  static deleteClientes = (req, res) => {
    const id = req.params.id;
    clientes.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Cliente removidx com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

module.exports = ClienteController;
