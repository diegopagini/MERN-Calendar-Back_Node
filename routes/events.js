/** @format */

/* 
  Event Routes
  /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { isDate } = require('../helpers/isDate');
const {
	getEvento,
	crearEvento,
	actualizarEvento,
	eliminarEvento,
} = require('../controllers/events');
const router = Router();

//CRUD
router.use(validarJWT);

//Obtener evento
router.get('/', getEvento);

//Crear evento
router.post(
	'/',
	[
		check('title', 'El titulo es obligatorio').not().isEmpty(),
		check('start', 'Fecha de inicio es obligatoria').custom(isDate),
		check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),
		validarCampos,
	],
	crearEvento
);

//Actualizar Evento
router.put('/:id', actualizarEvento);

//Borrar evento
router.delete('/:id', eliminarEvento);

module.exports = router;
