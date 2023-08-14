const Usuarios = require("../models/usuariosModel");

exports.getAllUsuarios = async (req, res) => {
    try {
        const Usuarios = await Usuarios.find();
        res.status(200).json(Usuarios);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
}

exports.getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuarios.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el usuario" });
    }
}

exports.createUsuario = async (req, res) => {
    try {
        const nuevoUsuario = await Usuarios.create(req.body);
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el usuario" });
    }
}

exports.updateUsuario = async (req, res) => {
    try {
        const usuario = await Usuarios.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
    
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
    
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el usuario" });
    }
}

exports.deleteUsuario = async (req, res) => {
    try {
        const usuarioId = req.params.id;
    
        const usuarioEliminado = await Usuarios.findByIdAndRemove(usuarioId);
    
        res.status(200).json(usuarioEliminado);
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el usuario" });
    }
}

