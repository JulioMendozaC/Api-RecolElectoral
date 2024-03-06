import { Router } from "express";
import { getDatas, getData, getDataBySeccion, getDataByClave, createData, deleteData, updatedata } from "../controllers/data.controller.js";
import { authRequiered } from '../middlewares/validateToken.js'
import { validationSchema } from "../middlewares/validator.middleware.js";
import { dataSchema } from "../schemas/data.schema.js";

const router = Router()

router.get('/data', authRequiered, getDatas)

router.get('/data/:id', authRequiered, getData)

router.post('/data', authRequiered, validationSchema(dataSchema), createData)

router.post('/data-seccion', authRequiered, getDataBySeccion)

router.post('/data-clave', authRequiered, getDataByClave)

router.delete('/data/:id', authRequiered, deleteData)

router.put('/data/:id', authRequiered,validationSchema(dataSchema), updatedata)



export default router