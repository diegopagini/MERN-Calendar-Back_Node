/** @format */

const { response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, resp = response, next) => {
	// x-token headers
	const token = req.header('x-token');

	if (!token) {
		return resp.status(401).json({
			ok: false,
			msg: 'No hay token en la peticion',
		});
	}

	try {
		const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
		req.uid = uid;
		req.name = name;
	} catch (error) {
		return resp.status(401).json({
			ok: false,
			msg: 'Token no válido',
		});
	}

	next();
};

module.exports = {
	validarJWT,
};
