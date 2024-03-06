import { Router } from "express";
import { getSecciones, getSeccion, createSeccion, updateSeccion, deleteSeccion } from "../controllers/seccion.controller.js";
import { authRequiered } from '../middlewares/validateToken.js'
import { validationSchema } from "../middlewares/validator.middleware.js";
import { seccionSchema } from "../schemas/seccion.schema.js";

const router = Router()

router.get('/seccion', authRequiered, getSecciones)

router.get('/seccion/:id', authRequiered, getSeccion)


router.post('/seccion/', authRequiered, validationSchema(seccionSchema), createSeccion)

router.delete('/seccion/:id', authRequiered, deleteSeccion)

router.put('/seccion/:id', authRequiered,validationSchema(seccionSchema), updateSeccion)


export default router