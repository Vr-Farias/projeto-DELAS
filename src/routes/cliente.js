const express = require("express")
const ClienteController = require('../controllers/clientesController')

const router = express.Router()

router
.get("/", ClienteController.getAllClientes)
.post("/", ClienteController.createClientes)
.put("/:id", ClienteController.updateClientes)
.delete("/:id", ClienteController.deleteClientes)

module.exports = router