/** @format */
const { response } = require('express');
const Usuario = require('../models/Usuario');

const crearUsuario = async (req, res = response) => {
	// const { name, email, password } = req.body;

	try {
		const usuario = new Usuario(req.body);

		await usuario.save();

		res.status(201).json({
			ok: true,
			msg: 'Register',
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			mgs: 'Por favor hable con el administrador',
		});
	}
};

const loginUsuario = (req, res = response) => {
	const { email, password } = req.body;

	res.status(201).json({
		ok: true,
		msg: 'Login',
		email,
		password,
	});
};

const revalidarToken = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'Renew',
	});
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };
