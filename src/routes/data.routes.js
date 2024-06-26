import { Router } from "express";
import { getDatas, getData, getAllData, createData, deleteData, deleteAllData, updatedata } from "../controllers/data.controller.js";
import { getEstadisticas, getEstadisticasSeccion } from "../controllers/estadisticas.controller.js";
import { authRequiered } from '../middlewares/validateToken.js'
import { validationSchema } from "../middlewares/validator.middleware.js";
import { dataSchema } from "../schemas/data.schema.js";

const router = Router()

// ? Recoleccion
router.get('/data', getDatas)

router.get('/data/:id', authRequiered, getData)

router.post('/data', authRequiered, validationSchema(dataSchema), createData)

router.delete('/data/:id', authRequiered, deleteData)

router.put('/data/:id', authRequiered, validationSchema(dataSchema), updatedata)


// ? Estadisticas
router.get('/data-all', authRequiered, getAllData)

router.get('/data-estadisticas', getEstadisticas)

router.post('/data-estadisticas', getEstadisticasSeccion)

router.delete('/data-delete-all', authRequiered, deleteAllData)




export default router