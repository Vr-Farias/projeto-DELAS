const empreendedoras = require("../models/empreendedoras.js");

class EmpreendedoraController {

  // GET
  static getAllEmpreendedoras = (req, res) => {
    empreendedoras.find((err, empreendedoras) => {
      res.status(200).json(empreendedoras);
    });
  };

  static getEmpreendedoraById = (req, res) => {
    const id = req.params.id;

    empreendedoras.findById(id, (err, empreendedoras) => {
        if (err) {
            res.status(400).send({ message: `${err.message} - Id da Empreendedora não localizado.` })
        } else {
            res.status(200).send(empreendedoras);
        }
    })
}

static getByEmpreendimento = (req, res) => {
    const parametros = req.query
    empreendedoras.find(parametros, function (err, empreendedoras) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {

            res.status(200).send(empreendedoras);
        }
    })
}

// CREATE
  static createEmpreendedoras = (req, res) => {
    let empreendedora = new empreendedoras(req.body);

    empreendedora.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar.` });
      } else {
        res.status(201).send(empreendedora.toJSON());
      }
    });
  };

// UPDATE
  static updateEmpreendedoras = (req, res) => {
    const id = req.params.id;
    empreendedoras.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res
          .status(200)
          .send({ message: "Empreendedora atualizada com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

// DELETE
  static deleteEmpreendedoras = (req, res) => {
    const id = req.params.id;
    empreendedoras.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Empreendedora removida com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}


module.exports = EmpreendedoraController;
