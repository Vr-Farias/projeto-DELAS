const express = require("express")
const index = require("./routes/index")
const db = require("./config/dbConnect")
const empreendedoras = require("./models/empreendedoras")
const app = express()


db.on("error", console.log.bind(console, 'Erro de conexão.'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso.')
})


app.use(express.json());
app.use("/", index);
app.use("/empreendedoras", empreendedoras)





module.exports = app