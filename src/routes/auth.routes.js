import { Router } from "express";
import { login, register, logout, Users, OneUser, updateUser, deleteUser, profile, verifyToken} from "../controllers/auth.controller.js";
import { authRequiered } from '../middlewares/validateToken.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

router.get('/users', authRequiered, Users)
router.get('/user/:id', authRequiered, OneUser)
router.put('/users/:id',authRequiered,  updateUser)
router.delete('/users/:id',authRequiered,  deleteUser)

router.get('/profile', authRequiered, profile)

router.get('/verify', verifyToken)




export default router