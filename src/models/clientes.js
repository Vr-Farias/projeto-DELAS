const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type:String, require:true},
        cpf: { type: Number ,require:true},
        telefone1: { type: Number,require:true },
        telefone2: { type: Number,require:true },
        email: { type: String,require:true },
        endereco: { type: Object,require:true },
        dataNascimento: { type: Date ,require:true},
        genero: { type: String ,require:true},
        youLiked: {type:Boolean}
    }
)

const clientes = mongoose.model('cliente',clienteSchema);

module.exports = clientes;