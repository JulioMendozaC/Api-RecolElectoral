import { Router } from "express";
import { getCoordinadores, getCoordinador, createCoordinador, updateCoordinador, deleteCoordinador } from "../controllers/coordinador.controller.js";
import { authRequiered } from '../middlewares/validateToken.js'
import { validationSchema } from "../middlewares/validator.middleware.js";
import { coordinadorSchema } from "../schemas/cordinador.schema.js";

const router = Router()

router.get('/coordinador', authRequiered, getCoordinadores)
router.get('/coordinador/:id', authRequiered, getCoordinador)
router.post('/coordinador/', authRequiered, validationSchema(coordinadorSchema), createCoordinador)
router.delete('/coordinador/:id', authRequiered, deleteCoordinador)
router.put('/coordinador/:id', authRequiered,validationSchema(coordinadorSchema), updateCoordinador)


export default router