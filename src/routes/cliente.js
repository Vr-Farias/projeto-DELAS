const express = require("express")
const ClienteController = require('../controllers/clientesController')

const router = express.Router()

router.get("/", ClienteController.getAllClientes)
router.post("/", ClienteController.createClientes)

module.exports = router