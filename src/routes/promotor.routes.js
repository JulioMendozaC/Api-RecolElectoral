import { Router } from "express";
import { getPromotores, getPromotor, createPromotor, updatePromotor, deletePromotor } from "../controllers/promotor.controller.js";
import { authRequiered } from '../middlewares/validateToken.js'
import { validationSchema } from "../middlewares/validator.middleware.js";
import { promotorSchema } from "../schemas/promotor.schema.js";

const router = Router()

router.get('/promotor', authRequiered, getPromotores)
router.get('/promotor/:id', authRequiered, getPromotor)
router.post('/promotor/', authRequiered, validationSchema(promotorSchema), createPromotor)
router.delete('/promotor/:id', authRequiered, deletePromotor)
router.put('/promotor/:id', authRequiered,validationSchema(promotorSchema), updatePromotor)


export default router