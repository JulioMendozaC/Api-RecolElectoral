import { Router } from "express";
import { getDataByNombre, getDataByClave } from "../controllers/filtros.controller.js";
import { authRequiered } from '../middlewares/validateToken.js'

const router = Router()

router.get('/filtroNombre', getDataByNombre)
router.get('/filtroClave', getDataByClave)

export default router