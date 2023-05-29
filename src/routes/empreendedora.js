const express = require("express")
const EmpreendedoraController = require('../controllers/empreendedorasController')

const router = express.Router()

router
.get("/", EmpreendedoraController.getAllEmpreendedoras)
.post("/", EmpreendedoraController.createEmpreendedoras)

module.exports = router