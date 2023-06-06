const express = require("express")
const EmpreendedoraController = require('../controllers/empreendedorasController')

const router = express.Router()

router
.get("/", EmpreendedoraController.getAllEmpreendedoras)
.get("/", EmpreendedoraController.getEmpreendedoraById)
.get("/", EmpreendedoraController.getByEmpreendimento)
.post("/", EmpreendedoraController.createEmpreendedoras)
.put("/:id", EmpreendedoraController.updateEmpreendedoras)
.delete("/:id", EmpreendedoraController.deleteEmpreendedoras)

module.exports = router