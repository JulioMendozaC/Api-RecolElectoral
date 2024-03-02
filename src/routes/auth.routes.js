import { Router } from "express";
import { login, register, logout, profile, verifyToken} from "../controllers/auth.controller.js";
import { authRequiered } from '../middlewares/validateToken.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/profile', authRequiered, profile)
router.get('/verify', verifyToken)




export default router