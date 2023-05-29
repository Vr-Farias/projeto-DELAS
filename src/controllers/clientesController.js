const clientes = require('../models/clientes.js');


class ClienteController {
    static getAllClientes = (req, res) => {
        clientes.find((err, clientes) => {
            res.status(200).json(clientes)
        })
    };

    static createClientes = (req, res) => {
        let cliente = new clientes(req.body)
        
        cliente.save((err) => {
            if (err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar.`})
            } else {
                res.status(201).send(cliente.toJSON())
            }
        })
    };
}


module.exports = ClienteController