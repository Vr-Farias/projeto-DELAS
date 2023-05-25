const mongoose = require ("mongoose")

mongoose.connect("mongodb+srv://admin:vNL2Nz2pFJ2LuMOB@vanessafarias.exjvabo.mongodb.net/delas")

let db = mongoose.connection

module.exports = db