const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/libro', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

const UsuariosSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    password: String
})

const Usuarios = mongoose.model('Usuarios', UsuariosSchema);

module.exports = Usuarios;