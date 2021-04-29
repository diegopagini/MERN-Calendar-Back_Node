/** @format */
const { response } = require('express');

const crearUsuario = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'Register',
	});
};

const loginUsuario = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'Login',
	});
};

const revalidarToken = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'Renew',
	});
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };
